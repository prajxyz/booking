import { ArrowLeft, Clock } from "lucide-react";
import Image from "next/image";

type FlightDetailsProps = {
  onClose: () => void;
};

export default function FlightDetails({ onClose }: FlightDetailsProps) {
  return (
    <section className="px-2 py-6 ">
      <div className="flex items-start">
        <div
          onClick={onClose}
          className="bg-[#F5F7FA] rounded-full p-2 cursor-pointer"
        >
          <ArrowLeft size={15} />
        </div>
      </div>
      <h4 className="text-lg font-medium px-1.5 my-5">Flight Details</h4>
      <hr className="" />
      <div className="my-4 grid grid-cols-2 justify-items-center ">
        <div>
          <div className="flex gap-x-2">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <p className="h-3 w-3 border border-black rounded-full"></p>
              <p className="h-14 border-l-[1px] border-black"></p>
            </div>

            <div>
              <p className="text-xs text-gray-500/80">Sat 28 Sept • 2:15</p>
              <h4 className="my-1 text-sm">
                DXB • Dubai International Airport
              </h4>
            </div>
          </div>

          {/* second  */}
          <div className="flex gap-x-2 my-2">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <p className="h-3 w-3 border border-black rounded-full"></p>
              <p className="h-32 border-l-[1.2px] border-dashed border-gray-700"></p>
            </div>

            <div>
              <p className="text-xs text-gray-500/80">Sat 28 Sept • 2:15</p>
              <h4 className="my-1 text-sm">
                RUH • King Khalid International Airportt
              </h4>

              <p className="flex items-center gap-x-2 text-gray-400 mt-4 pt-6 pl-6">
                <Clock size={14} />
                <p className="text-sm"> Layover 2h 25m</p>
              </p>
            </div>
          </div>

          {/* third  */}
          <div className="flex gap-x-2">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <p className="h-3 w-3 border border-black rounded-full"></p>
              <p className="h-14 border-l-[1px] border-black"></p>
            </div>

            <div>
              <p className="text-xs text-gray-500/80">Sat 28 Sept • 2:15</p>
              <h4 className="my-1 text-sm">
                RUH • King Khalid International Airport
              </h4>
            </div>
          </div>

          {/* fourth */}
          <div className="flex gap-x-2">
            <p className="h-3 w-3 border border-black rounded-full my-2"></p>
            {/* <p className="h-14 border-l-[1px] border-black"></p> */}

            <div className="my-2">
              <p className="text-xs text-gray-500/80">Sat 28 Sept • 2:15</p>
              <h4 className="my-1 text-sm">
                CDG • Paris - Charles de Gualle Airport
              </h4>
            </div>
          </div>
          {/* fourth ends  */}
        </div>

        <div className="flex flex-col justify-around">
          <div className="flex items-start gap-x-3 text-gray-500">
            <Image src={"/second.png"} height={35} width={35} alt="company" />

            <div className="text-[12px]">
              <p>Saudi Arabian Airlines • SV553</p>
              <p>Economy • A330</p>
              <p>Flight time 3h 45m</p>
            </div>
          </div>

          <div className="flex items-start gap-x-3 text-gray-500">
            <Image src={"/second.png"} height={35} width={35} alt="company" />

            <div className="text-[12px]">
              <p>Saudi Arabian Airlines • SV553</p>
              <p>Economy • A330</p>
              <p>Flight time 3h 45m</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
