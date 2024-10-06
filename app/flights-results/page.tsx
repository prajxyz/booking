"use client";

import FlightDetails from "@/components/flight-details";
import FlightResultCard from "@/components/flight-result-card";
import Header from "@/components/header";
import LoadingComponent from "@/components/loading";
import VaulDrawer from "@/components/ui/drawer";
import { LoadingContext } from "@/context/loading-context";
import { airportResults } from "@/data";
import { useContext, useState } from "react";

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

export default function FlightsResults() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { isLoading, setIsLoading } = useContext(LoadingContext);

  return (
    <main className="flex flex-col">
      <Header />

      {/* condionally render loading or results component  */}

      {/* results  */}
      <section className="w-3/4 px-12 mx-auto my-12">
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <section className="flex flex-col px-12 mx-auto my-2">
            <h4 className="text-zinc-500/80 font-extralight">
              Showing 356 of 767 results
            </h4>

            <div className="my-10 w-full grid grid-cols-1 gap-y-6">
              {airportResults.map((flightPair, index) => {
                console.log(flightPair, "flightData");
                return (
                  <VaulDrawer
                    key={index}
                    isOpen={isDrawerOpen}
                    onOpenChange={setIsDrawerOpen}
                    drawerDirection="right"
                    triggerChildren={
                      <FlightResultCard
                        flightData={flightPair}
                        key={index}
                        onSelect={() => {
                          setIsDrawerOpen(true);
                        }}
                      />
                    }
                    contentChildren={
                      <FlightDetails
                        onClose={() => {
                          setIsDrawerOpen(false);
                        }}
                      />
                    }
                  />
                );
              })}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
