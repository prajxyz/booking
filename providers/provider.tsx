"use client";

import { ReactNode, useState } from "react";
import { FlightDataContext } from "@/context/flight-data-context";

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

  return (
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
  );
}
