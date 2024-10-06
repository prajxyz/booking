import FlightSearchCard from "@/components/fligh-search-card";

export default function SearchFlights() {
  return (
    <main className="md:max-w-4xl mx-auto my-8 md:my-24 flex md:block flex-col justify-center items-center h-screen">
      <h4 className="text-xl md:text-2xl text-center my-5">
        Good Afternoon, Brain
      </h4>

      <div className="flex flex-col justify-center items-center">
        <FlightSearchCard needBorder />
      </div>
    </main>
  );
}
