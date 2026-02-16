import heroBanner from '@/assets/home/hero_banner.jpeg';
import { ReservationBar } from '@/components/common/ReservationBar';

export const HeroSection = () => {
  return (
    <main className='h-[890px] w-full relative '>
      <div className='bg-[#1C191766] inset-0 absolute z-1'></div>
      <img className='h-full w-full object-cover' src={heroBanner} alt='hero banner' />
      <div className='absolute flex flex-col top-[190px] left-[70px] z-2'>
        <h1 className='flex flex-col text-[120px] leading-[102px] text-white'>
          <span>Perfectly</span>
          <span className='text-[#FEE685]'>Balanced</span>
          <span>Beauty</span>
        </h1>
        <p className='w-[722px] pt-10 font-light text-[#F5F5F4] font-light text-[24px] leading-[39px]'>
          어반헤어스튜디오는 고객 한 분 한 분에게 정성을 다해 최고의 서비스를 제공하기 위해 인턴 없이 시술하며 많은 경험과 기술을 겸비한 헤어 디렉터들이 고객님들을 기다리고 있습니다.
        </p>
        {/* <div className='flex items-center gap-[24px] pt-[47px]'>
          <button className='text-[#1C1917] rounded-[50px] bg-[#ffffff] py-[22px] px-[46px] font-black'>헤어 예약</button>
          <button className='text-[#ffffff] rounded-[50px] border-1 border-solid bg-trasparent py-[22px] px-[46px] font-black '>네일 예약</button>
        </div> */}
      </div>
      <ReservationBar />
    </main>
  );
};
