import { FloorInfoSection } from "@/components/location/FloorInfoSection.tsx";
import { MapViewSection } from "@/components/location/MapViewSection.tsx";

function Location() {
  return (
    <section className="bg-white mt-[30px]">
      <div className="w-full">
        <div className="flex justify-between items-start">
          <div className="w-[45%] px-8">
            <FloorInfoSection />
          </div>

          <div className="w-[50%]">
            <MapViewSection />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
