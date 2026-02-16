import logo from '@/assets/header/logo.svg';
import calendar from '@/assets/header/calendar.svg';
import { Link, useLocation } from 'react-router-dom';
import { RESERVATION_URL } from '@/utils/constants';

const navItems: { name: string; path: string }[] = [
  { name: '홈', path: '/' },
  { name: '디자이너', path: '/designer' },
  { name: '네일아트(3F)', path: '/nail-art' },
  { name: '가격안내', path: '/pricing' },
  { name: '시술갤러리', path: '/gallery' },
  { name: '오시는길', path: '/location' },
  { name: '공지사항', path: '/notice' },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className='fixed top-0 left-0 right-0 h-[96px] flex px-[37px] items-center justify-between bg-white/[0.95] z-50'>
      <Link to='/'>
        <h1>
          <img src={logo} alt='Urban Hair Studio' className='block w-[130.72px] h-[54.01px]' />
        </h1>
      </Link>
      <nav>
        <ul className='flex gap-[37px] text-[14px] leading-[28px] font-bold'>
          {navItems.map((item) => {
            const isActive: boolean = location.pathname === item.path;
            const textColor: string = isActive ? '#1C1917' : '#A6A09B';
            const borderStyle: string = isActive ? 'border-b-2 border-[#1C1917]' : '';

            return (
              <li key={item.path} className='px-[10px] pt-[8px] rounded-[2px] transition-colors duration-[300ms] hover:bg-black/[0.051]'>
                <Link to={item.path} className={`block pb-[8px] text-[${textColor}] ${borderStyle}`}>
                  {item.name}
                </Link>
              </li>
            );
          })}
          <li>
            <a className='flex items-center justify-center w-[185.7px] h-[44px] bg-[#1C1917] rounded-[16777200px] gap-[8px] shadow-lg' href={RESERVATION_URL} target='_blank' rel='noopener noreferrer'>
              <img src={calendar} alt='예약하기' className='block w-[18px] h-[18px] mr-[8px]' />
              <span className='block text-white'>통합 예약 시스템</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
