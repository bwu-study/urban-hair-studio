import clockIcon from '@/assets/location/clock-icon.svg'
import markerIcon from '@/assets/location/marker-icon.svg'
import {useState} from "react";

type Floor = { floor: string; title: string; summary: string };
type Info = { icon: string; information: string; }
const floors: Floor[] = [
    {
        floor: '3F',
        title: 'Premium Salon & Nail Room',
        summary: '열펌/컬러 전용 좌석 및 네일 아트 네일또와',
    },
    {
        floor: '2F',
        title: 'Main Hair Lounge',
        summary: '안내 데스크, 커트 및 스타일링 메인 룸',
    }
];
const information: Info[] = [
    {
        icon: markerIcon,
        information: '서울 강북구 도봉로 10길 2-3층'
    },
    {
        icon: clockIcon,
        information: '10:00 - 20:00 (매일)'
    }
]

const FloorCard = (floors: Floor) => {
    return (
        <div className="flex gap-[15px] items-center">
            {/* Floor Badge */}
            <div className="flex items-center justify-center w-[45px] h-[48px] bg-[#FAFAF9] rounded-[20px]">
                <span className="font-semibold text-[16px] text-[#0A0A0A]">
                    {floors.floor}
                </span>
            </div>

            {/* Text Area */}
            <div className="flex flex-col">
                <h4 className="text-[18px] font-bold text-[#0A0A0A] leading-[20px] tracking-[-0.44px]">
                    {floors.title}
                </h4>
                <p className="text-[16px] text-[#78716C] leading-[24px] tracking-[-0.31px]">
                    {floors.summary}
                </p>
            </div>
        </div>
    )
}

const InfoCard = (information: Info) => {
    return (
        <div className="flex items-center gap-[16px]">
            <img src={information.icon} alt="icon" className="w-[20px] h-[20px]" />
            <p className="text-[16px] text-[#44403C] tracking-[-0.31px]">
                {information.information}
            </p>
        </div>
    )
}


export const FloorInfoSection = () => {
    const [selected, setSelected] = useState("kakao");

    return (
        <section className="bg-white py-[120px]">
            <div className="max-w-[1200px] flex flex-col gap-[32px]">

                <h2 className="text-[36px] font-serif text-[#1C1917] leading-[40px]">
                    Location & Floors
                </h2>

                {/* Floor List */}
                <div className="flex flex-col gap-[30px]">
                    {floors.map((floor) => (
                        <FloorCard
                            key={floor.floor}
                            {...floor}
                        />
                    ))}
                </div>

                <div className="w-full h-[1px] bg-[#F5F5F4]" />

                {/* Info Area */}
                <div className="flex flex-col gap-[16px]">
                    {information.map((info, index) => (
                        <InfoCard key={index} {...info} />
                    ))}
                </div>

                {/* Button Area */}
                <div className="flex gap-[8px] pt-[16px]">
                    {/*<button*/}
                    {/*    onClick={() => setSelected("naver")}*/}
                    {/*    className={`w-[288px] h-[56px] flex items-center justify-center rounded-[16px] text-[16px] font-semibold transition-colors tracking-[-0.31px]*/}
                    {/*                ${selected === "naver"*/}
                    {/*                    ? "bg-[#1C1917] text-white"*/}
                    {/*                    : "bg-[#F5F5F4] text-[#1C1917]"*/}
                    {/*                }`*/}
                    {/*    }*/}
                    {/*>*/}
                    {/*    네이버 지도*/}
                    {/*</button>*/}

                    <button
                        onClick={() => setSelected("kakao")}
                        className={`w-[288px] h-[56px] flex items-center justify-center rounded-[16px] text-[16px] font-semibold transition-colors tracking-[-0.31px]
                                    ${selected === "kakao"
                                        ? "bg-[#1C1917] text-white"
                                        : "bg-[#F5F5F4] text-[#1C1917]"
                                    }`
                        }
                    >
                        카카오맵
                    </button>
                </div>

            </div>
        </section>
    )
}