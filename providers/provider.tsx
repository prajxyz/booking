"use client";

import { ReactNode, useState } from "react";
import { FlightDataContext } from "@/context/flight-data-context";
import { LoadingContext } from "@/context/loading-context";

export default function Provider({ children }: { children: ReactNode }) {
  const [fromAirport, setFromAirport] = useState<{
    name: string;
    code: string;
    city: string;
    country: string;
  } | null>(null);
  const [toAirport, setToAirport] = useState<{
    name: string;
    code: string;
    city: string;
    country: string;
  } | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <FlightDataContext.Provider
        value={{
          fromAirport,
          setFromAirport,
          toAirport,
          setToAirport,
          departureDate,
          setDepartureDate,
          returnDate,
          setReturnDate,
        }}
      >
        {children}
      </FlightDataContext.Provider>
    </LoadingContext.Provider>
  );
}
