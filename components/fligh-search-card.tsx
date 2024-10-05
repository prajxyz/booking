"use client";

import { useContext, useEffect, useState } from "react"; // Import useState
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Search,
  LocateFixed,
  ChevronDown,
  Calendar as CalendarIcon,
  ArrowRightLeft,
} from "lucide-react";
import Link from "next/link";
import { airportsData } from "@/data";
import { Calendar } from "@/components/ui/calendar";
import { FlightDataContext } from "@/context/flight-data-context";

type FlightSearchCardProps = {
  needBorder: boolean;
  customClass?: string;
};

export default function FlightSearchCard({
  needBorder,
  customClass,
}: FlightSearchCardProps) {
  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const {
    fromAirport,
    toAirport,
    departureDate,
    returnDate,
    setFromAirport,
    setToAirport,
    setDepartureDate,
    setReturnDate,
  } = useContext(FlightDataContext);

  return (
    <Card
      className={`${
        needBorder
          ? "border"
          : "border-none border-0 shadow-none drop-shadow-none"
      } ${customClass}  w-fit`}
    >
      <CardHeader>
        <CardTitle>
          <Badge
            className={`${
              needBorder
                ? "bg-[#F5F7FA] text-[#000C0B] text-sm font-normal rounded px-8 py-1 "
                : "hidden"
            }`}
          >
            Flights
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-x-2">
        {/* Dropdown for "From" */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="flex items-center justify-between w-56 h-12"
            >
              <div className={`flex items-center justify-center gap-x-2`}>
                <LocateFixed
                  className={`text-zinc-400 ${fromAirport && "mt-4"}`}
                  size={17}
                />
                {fromAirport ? (
                  <div className="flex flex-col items-start">
                    <p className="text-zinc-500 text-[10px]">Where From?</p>
                    <div className="flex items-center gap-x-1">
                      <h5>{fromAirport.code}</h5>
                      <p className="text-zinc-500">
                        {fromAirport.name.slice(0, 13)}...
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-zinc-500 text-sm">Where From?</p>
                )}
              </div>
              <ChevronDown size={14} className="text-zinc-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {airportsData.map((item) => (
              <DropdownMenuItem
                key={item.code}
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setFromAirport(item)} // Update the selected value
              >
                <div>
                  <h5>{item.city}</h5>
                  <p className="text-gray-400">{item.country}</p>
                </div>
                <p>{item.code}</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="bg-[#F5F7FA] p-3.5 rounded-full">
          <ArrowRightLeft size={15} />
        </div>

        {/* Dropdown for "To" */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="flex items-center justify-between w-56 h-12"
            >
              <div className={`flex items-center justify-center gap-x-2`}>
                <LocateFixed
                  className={`text-zinc-400 ${toAirport && "mt-4"}`}
                  size={17}
                />
                {toAirport ? (
                  <div className="flex flex-col items-start">
                    <p className="text-zinc-500 text-[10px]">Where To?</p>
                    <div className="flex items-center gap-x-1">
                      <h5>{toAirport.code}</h5>
                      <p className="text-zinc-500">
                        {toAirport.name.slice(0, 13)}...
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-zinc-500 text-sm">Where To?</p>
                )}
              </div>
              <ChevronDown size={14} className="text-zinc-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {airportsData.map((item) => (
              <DropdownMenuItem
                key={item.code}
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setToAirport(item)} // Update the selected value
              >
                <div>
                  <h5>{item.city}</h5>
                  <p className="text-gray-400">{item.country}</p>
                </div>
                <p>{item.code}</p>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Dropdown for "Departure" */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="flex items-center justify-center gap-x-2 h-12 pr-14"
            >
              <div className={`flex items-center justify-center gap-x-2`}>
                <CalendarIcon
                  className={`text-zinc-400  ${departureDate && "mt-4"}`}
                  size={16}
                />
                {departureDate ? (
                  <div className="flex flex-col items-start">
                    <p className="text-zinc-500 text-[10px]">Departure</p>
                    <div className="flex items-center gap-x-1">
                      <h5>{formatDate(departureDate)}</h5>
                    </div>
                  </div>
                ) : (
                  <p className="text-zinc-500 text-sm">Departure</p>
                )}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0 m-0 shadow-none drop-shadow-none">
            <Calendar
              mode="single"
              selected={departureDate!}
              onSelect={(date: Date | undefined) =>
                date && setDepartureDate(date)
              }
              className="rounded-md border"
            />
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Dropdown for "Return" */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="flex items-center justify-center gap-x-2 h-12 pr-14"
            >
              <div className={`flex items-center justify-center gap-x-2`}>
                <CalendarIcon
                  className={`text-zinc-400  ${returnDate && "mt-4"}`}
                  size={16}
                />
                {returnDate ? (
                  <div className="flex flex-col items-start">
                    <p className="text-zinc-500 text-[10px]">Return</p>
                    <div className="flex items-center gap-x-1">
                      <h5>{formatDate(returnDate)}</h5>
                    </div>
                  </div>
                ) : (
                  <p className="text-zinc-500 text-sm">Return</p>
                )}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0 m-0 shadow-none drop-shadow-none">
            <Calendar
              mode="single"
              selected={returnDate!}
              onSelect={(date: Date | undefined) => date && setReturnDate(date)}
              className="rounded-md border"
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
      <CardFooter className="justify-end mt-2">
        <Link href={"/flights-results"}>
          <Button className="flex items-center gap-x-2 bg-brandGreen h-10 px-12">
            <Search size={14} />
            Search Flights
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
