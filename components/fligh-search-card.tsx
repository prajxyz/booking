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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Search,
  LocateFixed,
  ChevronDown,
  Calendar,
  ArrowRightLeft,
} from "lucide-react";
import Link from "next/link";

type FlightSearchCardProps = {
  needBorder: boolean;
  customClass?: string;
};

export default function FlightSearchCard({
  needBorder,
  customClass,
}: FlightSearchCardProps) {
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="flex items-center justify-between w-56 h-12"
            >
              <div className="flex items-center justify-center gap-x-2">
                <LocateFixed className="text-zinc-400" size={17} />
                <p className="text-zinc-500 text-sm">Where From?</p>
              </div>
              <ChevronDown size={14} className="text-zinc-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="bg-[#F5F7FA] p-3.5 rounded-full">
          <ArrowRightLeft size={15} />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="flex items-center justify-between w-56 h-12"
            >
              <div className="flex items-center justify-center gap-x-2">
                <LocateFixed className="text-zinc-400" size={17} />
                <p className="text-zinc-500 text-sm">Where To?</p>
              </div>
              <ChevronDown size={14} className="text-zinc-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="flex items-center justify-center gap-x-2 h-12 pr-14"
            >
              <Calendar className="text-zinc-400" size={16} />
              <p className="text-zinc-500 text-sm">Departure</p>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="pr-14">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              className="flex items-center justify-center gap-x-2 h-12 pr-14"
            >
              <Calendar className="text-zinc-400" size={16} />
              <p className="text-zinc-500 text-sm">Return</p>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="pr-14">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
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
