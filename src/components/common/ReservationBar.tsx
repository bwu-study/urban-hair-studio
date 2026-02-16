import calendar from '@/assets/reservationBar/calendar.svg';
import call from '@/assets/reservationBar/call.svg';
import { RESERVATION_URL } from '@/utils/constants';
import { Link } from 'react-router-dom';

const Button = ({ to, bg, icon, children }: { to: string; bg: string; icon: string; children: React.ReactNode }) => {
  return (
    <Link to={to} className='rounded-[32px] w-[319px] h-[96px] flex items-center justify-center flex-col text-white text-[12px] font-bold' style={{ backgroundColor: bg }}>
      <img src={icon} alt='icon' className='w-[28px] h-[28px]' />
      {children}
    </Link>
  );
};

export const ReservationBar = () => {
  return (
    <aside className='absolute z-10 bottom-2 left-1/2 -translate-x-1/2 flex justify-between items-center w-[672px] h-[114px] bg-[#FFFFFF33]/[0.95] p-[8px] rounded-[40px]'>
      <Button to={RESERVATION_URL} bg='#1C1917' icon={calendar}>
        Online Booking
      </Button>
      <Button to='#' bg='#E17100' icon={call}>
        Direct Call
      </Button>
    </aside>
  );
};
