import { FloorInfoSection } from "@/components/location/FloorInfoSection.tsx";
import { MapViewSection } from "@/components/location/MapViewSection.tsx";

function Location() {
  return (
      <section className="bg-white mt-[30px]">
        <div className="flex flex-col md:flex-row">

          <div className="w-full md:w-1/2">
            <FloorInfoSection />
          </div>

          <div className="w-full md:w-1/2">
            <MapViewSection />
          </div>

        </div>
      </section>
  );
}

export default Location;
