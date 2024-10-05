import { Dispatch, SetStateAction, createContext } from "react";

type FlightDataContextType = {
  fromAirport: {
    name: string;
    code: string;
    city: string;
    country: string;
  } | null;
  setFromAirport: Dispatch<
    SetStateAction<{
      name: string;
      code: string;
      city: string;
      country: string;
    } | null>
  >;
  toAirport: {
    name: string;
    code: string;
    city: string;
    country: string;
  } | null;
  setToAirport: Dispatch<
    SetStateAction<{
      name: string;
      code: string;
      city: string;
      country: string;
    } | null>
  >;
  departureDate: Date | null;
  setDepartureDate: Dispatch<SetStateAction<Date | null>>;
  returnDate: Date | null;
  setReturnDate: Dispatch<SetStateAction<Date | null>>;
};

export const FlightDataContext = createContext<FlightDataContextType>({
  fromAirport: null,
  toAirport: null,
  departureDate: null,
  returnDate: null,
  setFromAirport: () => {},
  setToAirport: () => {},
  setDepartureDate: () => {},
  setReturnDate: () => {},
});
