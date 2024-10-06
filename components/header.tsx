import FlightSearchCard from "@/components/fligh-search-card";
import VaulDrawer from "@/components/ui/drawer";
import { FlightDataContext } from "@/context/flight-data-context";
import { LoadingContext } from "@/context/loading-context";
import { formatDateRange } from "@/lib/date";
import { X, Search } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

export default function Header() {
  const { fromAirport, toAirport, departureDate, returnDate } =
    useContext(FlightDataContext);

  const { isLoading } = useContext(LoadingContext);

  return (
    <div>
      {isLoading && (
        <div className="absolute w-full top-24 h-2">
          <div className="w-[25%] h-1 bg-green-800 absolute left-0 progress-bar rounded-lg"></div>
        </div>
      )}

      <header className="flex justify-center w-full md:justify-around items-center h-24 border-b">
        <VaulDrawer
          drawerDirection="top"
          triggerChildren={
            <div className="flex items-center md:justify-start justify-between gap-x-1 md:gap-x-3 border rounded-full p-1.5 md:pl-6 cursor-pointer mx-1 md:mx-0  md:w-fit w-full">
              <div className="flex items-center gap-x-1 text-sm">
                <h4 className="font-semibold text-xs md:text-base">
                  {fromAirport?.code}
                </h4>
                <p className="font-light text-xs md:text-base text-gray-500">
                  {fromAirport?.name.slice(0, 13)}
                </p>
              </div>

              <div className="h-5 border-r"></div>

              <div className="flex items-center gap-x-1 text-sm">
                <h4 className="font-semibold text-xs md:text-base">
                  {toAirport?.code}
                </h4>
                <p className="font-light text-xs md:text-base text-gray-500">
                  {toAirport?.name.slice(0, 13)}
                </p>
              </div>

              <div className="h-5 border-r"></div>

              <div>
                <h4 className="font-semibold text-xs md:text-base">
                  {formatDateRange(departureDate, returnDate)}
                </h4>
              </div>

              <div className="h-5 border-r"></div>

              <div className="bg-brandGreen/10 p-2 rounded-full">
                <Search size={14} className="text-brandGreen" />
              </div>
            </div>
          }
          contentChildren={
            <div className="flex justify-center items-center">
              <FlightSearchCard needBorder={false} />
            </div>
          }
        />

        {/* close icon  */}
        <Link
          href={"/search-flights"}
          className="hidden md:block rounded-full p-2 border"
        >
          <X size={18} className="text-zinc-500" />
        </Link>
      </header>
    </div>
  );
}
