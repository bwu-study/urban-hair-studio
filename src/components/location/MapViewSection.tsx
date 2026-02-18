import { useEffect, useRef } from "react";

const MapViewCard = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const kakaoKey = import.meta.env.VITE_KAKAO_APP_KEY;

  useEffect(() => {
    const existing = document.querySelector(
      'script[src*="dapi.kakao.com/v2/maps/sdk.js"]',
    );
    if (existing) {
      window.kakao?.maps?.load(() => initMap());
      return;
    }

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => initMap());
    };

    function initMap() {
      if (!mapRef.current) return;

      const center = new window.kakao.maps.LatLng(37.614522, 127.030836);
      const map = new window.kakao.maps.Map(mapRef.current, {
        center,
        level: 3,
      });

      const marker = new window.kakao.maps.Marker({ position: center });
      marker.setMap(map);
    }
  }, []);

  return (
    <div className="w-[800px] h-[592px] rounded-[43px] overflow-hidden">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export const MapViewSection = () => (
  <section className="bg-white py-[120px]">
    <MapViewCard />
  </section>
);
