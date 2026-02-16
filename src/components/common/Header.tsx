import logo from '@/assets/header/logo.svg';
import openingBracket from '@/assets/header/openingBracket.svg';
import closingBracket from '@/assets/header/closingBracket.svg';
import x from '@/assets/header/x.svg';
import hamburger from '@/assets/header/hamburger.svg';
import calendar from '@/assets/header/calendar.svg';
import { Link, useLocation } from 'react-router-dom';
import { RESERVATION_URL } from '@/utils/constants';
import { useEffect, useState } from 'react';

const navItems: { name: string; path: string }[] = [
  { name: '홈', path: '/' },
  { name: '디자이너', path: '/designer' },
  { name: '네일아트(3F)', path: '/nail-art' },
  { name: '가격안내', path: '/pricing' },
  { name: '시술갤러리', path: '/gallery' },
  { name: '오시는길', path: '/location' },
  { name: '공지사항', path: '/notice' },
];

const DesktopHeader = () => {
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

const MobileHeader = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className='fixed top-0 left-0 right-0 h-[59px] flex items-center justify-between p-[20px] bg-white z-50'>
        <Link to='/'>
          {location.pathname === '/' ? (
            <h1>
              <img src={logo} alt='Urban Hair Studio' className='block w-[86.72px] h-[35.83px]' />
            </h1>
          ) : (
            <img src={openingBracket} alt='뒤로가기' className='block w-[24px] h-[24px]' />
          )}
        </Link>
        <img src={isMenuOpen ? x : hamburger} alt='menu' className='block w-[24px] h-[24px] absolute right-[16px] cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-black/50 z-40' onClick={() => setIsMenuOpen(false)}>
          <nav>
            <ul className='absolute top-[59px] w-[100%] h-[calc(100vh-59px)] overflow-y-auto right-0 w-full bg-white flex flex-col items-start p-[20px] gap-[16px]'>
              {navItems.map((item) => {
                const isActive: boolean = location.pathname === item.path;

                return (
                  <li key={item.path} className='w-[100%] h-[59px]'>
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between w-[100%] h-[59px] text-[14px] leading-[59px] font-bold ${isActive ? 'text-[#1C1917]' : 'text-[#A6A09B]'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <p>{item.name}</p>
                      <img src={closingBracket} alt='moveIcon' className='block w-[24px] h-[24px]' />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export const Header = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1100;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1100);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};
