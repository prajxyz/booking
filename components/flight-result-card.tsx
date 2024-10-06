import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type FlightData = {
  id: number;
  costStartsFrom: string;
  flights: {
    dateString: string;
    imgHref: string;
    flightName: string;
    flightTime: string;
    flightCode: string;
    flightDuration: string;
    flightStops: string;
  }[];
};

type FlightResultCardProps = {
  flightData: FlightData;
  onSelect: () => void;
};

export default function FlightResultCard({
  flightData,
  onSelect,
}: FlightResultCardProps) {
  const { costStartsFrom, flights } = flightData;

  return (
    <Card
      className="flex flex-col md:flex-row md:justify-between cursor-pointer py-3 mx-2 md:mx-0 md:p-0"
      onClick={onSelect}
    >
      <CardContent className="w-full flex flex-col justify-center gap-y-2 md:gap-y-8">
        {flights.map((item, index) => (
          <div className="" key={index}>
            <p className="text-xs text-gray-500 my-1">{item.dateString}</p>
            <div className="grid grid-cols-1 md:gap-y-12">
              <div className="flex gap-x-2 md:justify-between w-full">
                <div className="flex items-center gap-x-4">
                  <div className="">
                    <Image
                      src={item.imgHref}
                      alt="company"
                      className="border rounded-lg p-2"
                      height={10}
                      width={50}
                    />
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <p className="text-xs text-gray-500">{item.flightName}</p>
                    <h4 className="text-[13.5px] md:text-base">
                      {item.flightTime}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col gap-y-1">
                  <p className="text-gray-500/80 text-xs">{item.flightCode}</p>
                  <h4 className="text-[13px] md:text-base">
                    {item.flightDuration}
                  </h4>
                </div>

                <div className="align-bottom pt-5 text-sm md:text-base">
                  {item.flightStops}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>

      <div className="hidden md:block h-52 border-r w-2"></div>
      <hr className="md:hiden" />

      <CardFooter className="mt-4 md:mt-20 md:w-60">
        <div className="flex flex-col gap-y-2 items-start w-full">
          <p className="text-xs text-gray-500/80">from</p>
          <h4 className="text-lg">{costStartsFrom}</h4>
          <Button
            className="bg-brandGreen hover:bg-brandGreen/90 w-full h-9"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            Select
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
