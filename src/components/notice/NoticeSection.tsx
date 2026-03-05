import {useState} from "react";

export const NOTICE_TYPE = {
    NOTICE: "공지",
    EVENT: "이벤트",
    GUIDE: "안내",
} as const

type Notice = { type: string; title: string; description: string, date: string }

type NoticeCardProps = {
    notice: Notice;
    isOpen: boolean;
    onClick: () => void;
}

const notices: Notice[] = [
    {
        type: NOTICE_TYPE.NOTICE,
        title: "설 연휴 2/16-17 전 층 휴무 안내",
        description: "공지 내용",
        date: "2026.02.01",
    },
    {
        type: NOTICE_TYPE.EVENT,
        title: "네일+헤어 통합 시술 시 20% 특별 할인",
        description: "이벤트 내용",
        date: "2026.01.20",
    },
    {
        type: NOTICE_TYPE.GUIDE,
        title: "무료 발렛 파킹 서비스 도입 안내",
        description: "안내 내용",
        date: "2026.01.10",
    },
]

const NoticeCard = ({ notice, isOpen, onClick }: NoticeCardProps) => {
    return (
        <div
            onClick={onClick}
            className="w-full rounded-[20px] border border-[#F5F5F4] cursor-pointer transition-all duration-300"
        >
            {/* 상단 영역 */}
            <div className="flex items-center justify-between px-[45px] py-[28px]">
                <div className="flex items-center gap-[24px]">
                    <span className="inline-flex items-center h-[23px] px-[10px] py-[4px] rounded-full bg-[#F5F5F4] text-[10px] leading-none tracking-[0.12px]">
                        {notice.type}
                    </span>


                    <h3 className="text-[16px] font-bold tracking-[-0.31px]">
                        {notice.title}
                    </h3>
                </div>

                <span className="text-[12px] text-gray-400">
                    {notice.date}
                </span>
            </div>

            <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out
                            ${isOpen
                                ? "max-h-[200px]"
                                : "max-h-0"
                            }`
                }
            >
                <div className="px-[48px] pb-[32px]">
                    <p className="text-gray-600">
                        {notice.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export const NoticeSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="flex flex-col py-[107px] px-[330px] bg-white">
            <h2 className="text-[30px] font-serif mt-[30px] mb-[30px]">
                Notices
            </h2>

            <div className="flex flex-col gap-[32px]">
                {notices.map((notice, index) => (
                    <NoticeCard
                        key={index}
                        notice={notice}
                        isOpen={openIndex === index}
                        onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                        }
                    />
                ))}
            </div>
        </section>
    )
}