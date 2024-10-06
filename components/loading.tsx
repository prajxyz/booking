"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { Card } from "./ui/card";
import { LoadingContext } from "@/context/loading-context";

const LoadingComponent = () => {
  const [steps, setSteps] = useState([
    { status: "loading", text: "Searching 400+ flights" },
    { status: "waiting", text: "Attaching Company rules" },
    { status: "waiting", text: "Serving best results" },
  ]);

  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    const timers = steps.map((_, index) =>
      setTimeout(() => {
        setSteps((prevSteps) =>
          prevSteps.map((step, i) => {
            if (i === index) return { ...step, status: "completed" };
            if (i === index + 1) return { ...step, status: "loading" };
            return step;
          })
        );
      }, (index + 1) * 3000)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const allCompleted = steps.every((step) => step.status === "completed");

    if (allCompleted) {
      setIsLoading(false);
    }
  }, [steps, setIsLoading]);

  useEffect(() => {
    console.log(isLoading, "is loading");
  }, [isLoading]);

  const renderStep = (step: any, index: number) => (
    <div key={index} className="flex items-center gap-x-4 my-1">
      <span>
        {step.status === "completed" ? (
          <p className="border-[1.5px] border-[#338550] bg-green-500/10 rounded-full p-[1.8px]">
            <Check size={8} strokeWidth={5} className="text-[#338550]" />
          </p>
        ) : step.status === "loading" ? (
          <div className="border-gray-300 h-3.5 w-3.5 animate-spin transition-all duration-1000 rounded-full border-2 border-t-gray-800" />
        ) : (
          <div className="pl-3"></div>
        )}
      </span>
      <span
        className={`text-[#787B80] ${
          step.status === "waiting" ? "font-light" : ""
        }`}
      >
        {step.text}
      </span>
    </div>
  );

  return (
    <div>
      <div className="fixed inset-0 bg-black/20 flex flex-col justify-start py-44 items-center z-50">
        <div className="flex flex-col items-center justify-start w-72 h-[280px] bg-gray-50 rounded-lg shadow-md p-6">
          <Image
            src={"/rocket.png"}
            alt="rocket"
            height={40}
            width={100}
            className="my-3 animate-bounce duration-[10000]"
          />

          <div className="flex flex-col space-y-2">{steps.map(renderStep)}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-6 px-4">
        {[...Array(5)].map((_, index) => (
          <Card className="animate-pulse w-full py-4 px-4 grid grid-cols-1 gap-y-10 drop-shadow-none shadow-none">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-4">
                <div className="h-10 w-[40px] bg-gray-100 rounded-lg"></div>

                <div className="flex flex-col gap-y-4">
                  <h4 className="w-72 h-2.5 rounded-lg bg-gray-100"></h4>
                  <p className="bg-gray-100 w-96 h-2 rounded-lg"></p>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-y-4">
                  <h4 className="w-72 h-2.5 rounded-lg bg-gray-100"></h4>
                  <p className="bg-gray-100 w-96 h-2 rounded-lg"></p>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-x-4">
                <div className="h-10 w-[40px] bg-gray-100 rounded-lg"></div>

                <div className="flex flex-col gap-y-4">
                  <h4 className="w-72 h-2.5 rounded-lg bg-gray-100"></h4>
                  <p className="bg-gray-100 w-96 h-2 rounded-lg"></p>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-y-4">
                  <h4 className="w-72 h-2.5 rounded-lg bg-gray-100"></h4>
                  <p className="bg-gray-100 w-96 h-2 rounded-lg"></p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LoadingComponent;
