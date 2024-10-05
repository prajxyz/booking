import FlightSearchCard from "@/components/fligh-search-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import VaulDrawer from "@/components/ui/drawer";
import { X, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FlightsResults() {
  return (
    <main className="flex flex-col">
      <header className="flex justify-around items-center h-24 border-b">
        <VaulDrawer
          drawerDirection="top"
          triggerChildren={
            <div className="flex items-center gap-x-3 border rounded-full p-1.5 pl-6 cursor-pointer">
              <div className="flex items-center gap-x-1 text-sm">
                <h4 className="font-semibold">DEL</h4>
                <p className="font-light text-gray-500">
                  Indira Gandhi Inter...
                </p>
              </div>

              <div className="h-5 border-r"></div>

              <div className="flex items-center gap-x-1 text-sm">
                <h4 className="font-semibold">DXB</h4>
                <p className="font-light text-gray-500">
                  Dubai International...
                </p>
              </div>

              <div className="h-5 border-r"></div>

              <div>
                <h4 className="font-semibold text-sm">Jun 25 - Jul 2</h4>
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
        <Link href={"/search-flights"} className="rounded-full p-2 border">
          <X size={18} className="text-zinc-500" />
        </Link>
      </header>

      {/* condionally render loading or results component  */}

      {/* results  */}
      <section className="flex flex-col w-3/4 px-12 mx-auto my-12">
        <h4 className="text-zinc-500/80 font-extralight">
          Showing 356 of 767 results
        </h4>

        <div className="my-10 w-full grid grid-cols-1 gap-y-6">
          <VaulDrawer
            // customClass="w-full"
            drawerDirection="right"
            triggerChildren={
              <Card className="flex justify-between cursor-pointer">
                <CardContent className="w-full">
                  <p className="text-xs text-gray-500 my-4 text-start">
                    Thu 25 Jun
                  </p>
                  <div className="grid grid-cols-1 gap-y-12">
                    <div className="flex justify-between w-full">
                      <div className="flex items-center gap-x-4">
                        <div className="">
                          <Image
                            src={"/emirites.png"}
                            alt="company"
                            className="border rounded-lg p-2"
                            // className="mx-1 my-1"
                            height={10}
                            width={50}
                          />
                        </div>

                        <div className="flex flex-col text-start gap-y-1">
                          <p className="text-xs text-gray-500">
                            Emirates . AT 4334
                          </p>
                          <h4>9:45 AM - 11:45 AM</h4>
                        </div>
                      </div>

                      <div className="flex flex-col gap-y-1">
                        <p className="text-gray-500/80 text-xs">CDG-DXB</p>
                        <h4 className="text-base">2h 10min</h4>
                      </div>

                      <div className=" align-bottom pt-5">Non stop</div>
                    </div>

                    <div className="flex justify-between w-full">
                      <div className="flex items-center gap-x-4">
                        <div className="">
                          <Image
                            src={"/emirites.png"}
                            alt="company"
                            className="border rounded-lg p-2"
                            // className="mx-1 my-1"
                            height={10}
                            width={50}
                          />
                        </div>

                        <div className="flex flex-col gap-y-1 text-start">
                          <p className="text-xs text-gray-500">
                            Emirates . AT 4334
                          </p>
                          <h4>9:45 AM - 11:45 AM</h4>
                        </div>
                      </div>

                      <div className="flex flex-col gap-y-1">
                        <p className="text-gray-500/80 text-xs">CDG-DXB</p>
                        <h4 className="text-base">2h 10min</h4>
                      </div>

                      <div className=" align-bottom pt-5">Non stop</div>
                    </div>
                  </div>
                </CardContent>

                <div className="h-52 border-r w-2"></div>

                <CardFooter className="mt-20 w-60">
                  <div className="flex flex-col gap-y-2 items-start w-full">
                    <p className="text-xs text-gray-500/80">from</p>
                    <h4 className="text-lg">AED 2,456.90</h4>
                    <Button className="bg-brandGreen w-full h-9">Select</Button>
                  </div>
                </CardFooter>
              </Card>
            }
            contentChildren={
              <div className="h-screen">kitt frontend assignment github </div>
            }
          />

          <Card className="flex justify-between cursor-pointer">
            <CardContent className="w-full">
              <p className="text-xs text-gray-500 my-4 text-start">
                Thu 25 Jun
              </p>
              <div className="grid grid-cols-1 gap-y-12">
                <div className="flex justify-between w-full">
                  <div className="flex items-center gap-x-4">
                    <div className="">
                      <Image
                        src={"/emirites.png"}
                        alt="company"
                        className="border rounded-lg p-2"
                        // className="mx-1 my-1"
                        height={10}
                        width={50}
                      />
                    </div>

                    <div className="flex flex-col gap-y-1">
                      <p className="text-xs text-gray-500">
                        Emirates . AT 4334
                      </p>
                      <h4>9:45 AM - 11:45 AM</h4>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <p className="text-gray-500/80 text-xs">CDG-DXB</p>
                    <h4 className="text-base">2h 10min</h4>
                  </div>

                  <div className=" align-bottom pt-5">Non stop</div>
                </div>

                <div className="flex justify-between w-full">
                  <div className="flex items-center gap-x-4">
                    <div className="">
                      <Image
                        src={"/emirites.png"}
                        alt="company"
                        className="border rounded-lg p-2"
                        // className="mx-1 my-1"
                        height={10}
                        width={50}
                      />
                    </div>

                    <div className="flex flex-col gap-y-1">
                      <p className="text-xs text-gray-500">
                        Emirates . AT 4334
                      </p>
                      <h4>9:45 AM - 11:45 AM</h4>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <p className="text-gray-500/80 text-xs">CDG-DXB</p>
                    <h4 className="text-base">2h 10min</h4>
                  </div>

                  <div className=" align-bottom pt-5">Non stop</div>
                </div>
              </div>
            </CardContent>

            <div className="h-52 border-r w-2"></div>

            <CardFooter className="mt-20 w-60">
              <div className="flex flex-col gap-y-2 items-start w-full">
                <p className="text-xs text-gray-500/80">from</p>
                <h4 className="text-lg">AED 2,456.90</h4>
                <Button className="bg-brandGreen w-full h-9">Select</Button>
              </div>
            </CardFooter>
          </Card>

          <Card className="flex justify-between cursor-pointer">
            <CardContent className="w-full">
              <p className="text-xs text-gray-500 my-4 text-start">
                Thu 25 Jun
              </p>
              <div className="grid grid-cols-1 gap-y-12">
                <div className="flex justify-between w-full">
                  <div className="flex items-center gap-x-4">
                    <div className="">
                      <Image
                        src={"/emirites.png"}
                        alt="company"
                        className="border rounded-lg p-2"
                        // className="mx-1 my-1"
                        height={10}
                        width={50}
                      />
                    </div>

                    <div className="flex flex-col gap-y-1">
                      <p className="text-xs text-gray-500">
                        Emirates . AT 4334
                      </p>
                      <h4>9:45 AM - 11:45 AM</h4>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <p className="text-gray-500/80 text-xs">CDG-DXB</p>
                    <h4 className="text-base">2h 10min</h4>
                  </div>

                  <div className=" align-bottom pt-5">Non stop</div>
                </div>

                <div className="flex justify-between w-full">
                  <div className="flex items-center gap-x-4">
                    <div className="">
                      <Image
                        src={"/emirites.png"}
                        alt="company"
                        className="border rounded-lg p-2"
                        // className="mx-1 my-1"
                        height={10}
                        width={50}
                      />
                    </div>

                    <div className="flex flex-col gap-y-1">
                      <p className="text-xs text-gray-500">
                        Emirates . AT 4334
                      </p>
                      <h4>9:45 AM - 11:45 AM</h4>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <p className="text-gray-500/80 text-xs">CDG-DXB</p>
                    <h4 className="text-base">2h 10min</h4>
                  </div>

                  <div className=" align-bottom pt-5">Non stop</div>
                </div>
              </div>
            </CardContent>

            <div className="h-52 border-r w-2"></div>

            <CardFooter className="mt-20 w-60">
              <div className="flex flex-col gap-y-2 items-start w-full">
                <p className="text-xs text-gray-500/80">from</p>
                <h4 className="text-lg">AED 2,456.90</h4>
                <Button className="bg-brandGreen w-full h-9">Select</Button>
              </div>
            </CardFooter>
          </Card>
          <Card className="flex justify-between cursor-pointer">
            <CardContent className="w-full">
              <p className="text-xs text-gray-500 my-4 text-start">
                Thu 25 Jun
              </p>
              <div className="grid grid-cols-1 gap-y-12">
                <div className="flex justify-between w-full">
                  <div className="flex items-center gap-x-4">
                    <div className="">
                      <Image
                        src={"/emirites.png"}
                        alt="company"
                        className="border rounded-lg p-2"
                        // className="mx-1 my-1"
                        height={10}
                        width={50}
                      />
                    </div>

                    <div className="flex flex-col gap-y-1">
                      <p className="text-xs text-gray-500">
                        Emirates . AT 4334
                      </p>
                      <h4>9:45 AM - 11:45 AM</h4>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <p className="text-gray-500/80 text-xs">CDG-DXB</p>
                    <h4 className="text-base">2h 10min</h4>
                  </div>

                  <div className=" align-bottom pt-5">Non stop</div>
                </div>

                <div className="flex justify-between w-full">
                  <div className="flex items-center gap-x-4">
                    <div className="">
                      <Image
                        src={"/emirites.png"}
                        alt="company"
                        className="border rounded-lg p-2"
                        // className="mx-1 my-1"
                        height={10}
                        width={50}
                      />
                    </div>

                    <div className="flex flex-col gap-y-1">
                      <p className="text-xs text-gray-500">
                        Emirates . AT 4334
                      </p>
                      <h4>9:45 AM - 11:45 AM</h4>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <p className="text-gray-500/80 text-xs">CDG-DXB</p>
                    <h4 className="text-base">2h 10min</h4>
                  </div>

                  <div className=" align-bottom pt-5">Non stop</div>
                </div>
              </div>
            </CardContent>

            <div className="h-52 border-r w-2"></div>

            <CardFooter className="mt-20 w-60">
              <div className="flex flex-col gap-y-2 items-start w-full">
                <p className="text-xs text-gray-500/80">from</p>
                <h4 className="text-lg">AED 2,456.90</h4>
                <Button className="bg-brandGreen w-full h-9">Select</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
