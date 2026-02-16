import calendar from "@/assets/reservationBar/calendar.svg";
import call from "@/assets/reservationBar/call.svg";
import { PHONE_NUMBER, RESERVATION_URL } from "@/constants/common";
import { useState } from "react";

// 버튼 컴포넌트는 링크/버튼 따로 따로 처리 하도록 수정 한 컴포넌트가 이상한 조건으로 렌더링
// 굳이 하나로 합칠 이유가 없음
const Button = ({
  to,
  bg,
  hoverBg,
  icon,
  children,
  onClick,
}: {
  to?: string;
  bg: string;
  hoverBg: string;
  icon: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (onClick) {
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="rounded-[32px] w-[319px] h-[96px] flex items-center justify-center flex-col text-white text-[12px] font-bold cursor-pointer transition-all duration-300"
        style={{ backgroundColor: isHovered ? hoverBg : bg }}
      >
        <img src={icon} alt="icon" className="w-[28px] h-[28px]" />
        {children}
      </button>
    );
  }

  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-[32px] w-[319px] h-[96px] flex items-center justify-center flex-col text-white text-[12px] font-bold transition-all duration-300"
      style={{ backgroundColor: isHovered ? hoverBg : bg }}
    >
      <img src={icon} alt="icon" className="w-[28px] h-[28px]" />
      {children}
    </a>
  );
};

export const ReservationBar = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyPhone = async () => {
    await navigator.clipboard.writeText(PHONE_NUMBER);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <aside className="absolute z-10 bottom-2 left-1/2 -translate-x-1/2 flex justify-between items-center w-[672px] h-[114px] bg-[#FFFFFF33]/[0.95] p-[8px] rounded-[40px]">
      <Button
        to={RESERVATION_URL}
        bg="#1C1917"
        hoverBg="#303030"
        icon={calendar}
      >
        Online Booking
      </Button>
      <div className="relative">
        {showTooltip && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#1C1917] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap animate-[fadeInUp_0.3s_ease-out]">
            전화번호가 복사되었습니다.
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1C1917] rotate-45"></div>
          </div>
        )}
        <Button
          bg="#E17100"
          hoverBg="#CA4300"
          icon={call}
          onClick={handleCopyPhone}
        >
          Direct Call
        </Button>
      </div>
    </aside>
  );
};
