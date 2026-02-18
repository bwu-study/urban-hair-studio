import { useEffect } from 'react';

const { kakao } = window;

const MapViewCard = () => {
    useEffect(() => {
        if (!window.kakao) {
            console.error("kakao undefined");
            return;
        }

        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.614522, 127.030836),
            level: 3
        };

        const map = new kakao.maps.Map(container, options);

        const markerPosition  = new kakao.maps.LatLng(37.614522, 127.030836);

        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        marker.setMap(map);
    }, []);

    return (
        <div className="w-[800px] h-[592px] rounded-[43px] overflow-hidden">
            <div id="map" className="w-full h-full"></div>
        </div>
    )
}

export const MapViewSection = () => {
    return (
        <section className="bg-white py-[120px]">
                <MapViewCard></MapViewCard>
        </section>
    )
}