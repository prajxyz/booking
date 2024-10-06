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
  const { id, costStartsFrom, flights } = flightData;

  return (
    <Card className="flex justify-between cursor-pointer" onClick={onSelect}>
      <CardContent className="w-full flex flex-col justify-center gap-y-8">
        {flights.map((item) => (
          <div className="">
            <p className="text-xs text-gray-500 my-1">{item.dateString}</p>
            <div className="grid grid-cols-1 gap-y-12">
              <div className="flex justify-between w-full">
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
                    <h4>{item.flightTime}</h4>
                  </div>
                </div>

                <div className="flex flex-col gap-y-1">
                  <p className="text-gray-500/80 text-xs">{item.flightCode}</p>
                  <h4 className="text-base">{item.flightDuration}</h4>
                </div>

                <div className="align-bottom pt-5">{item.flightStops}</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>

      <div className="h-52 border-r w-2"></div>

      <CardFooter className="mt-20 w-60">
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
