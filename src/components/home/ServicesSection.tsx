import hairDesign from '@/assets/home/hair-design.svg'
import nailArt from '@/assets/home/nail-art.svg'
import totalStyling from '@/assets/home/total-styling.svg'

type Service = { icon: string; title: string; description: string };
const services: Service[] = [
  {
    icon: hairDesign,
    title: 'Hair Design (2/3F)',
    description:'각 층별 전담 디자이너가 상주하며 차별화된 시술 경험과 결과를 보장합니다.',
  },
  {
    icon: nailArt,
    title: 'Nail Art (3F)',
    description:'프라이빗한 3층 네일 룸에서 고감도의 아트와 세심한 케어를 약속합니다.',
  },
  {
    icon: totalStyling,
    title: 'Total Styling',
    description:'헤어부터 네일까지, 동선을 최소화한 통합 시스템으로 프리미엄의 가치를 더합니다.',
  },
];

const ServiceCard = (service: Service ) => {
  return <div className="flex flex-col gap-[24px] ">
    <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#FAFAF9] rounded-[32px]">
      <img src={service.icon} alt={service.title} />
    </div>
    <h4 className="text-[#0A0A0A] leading-[36px] font-bold text-[30px]">{service.title}</h4>
    <p className="text-[#79716B] text-[20px] leading-[32.5px]">{service.description}</p>
  </div>

}

export const ServicesSection = () => {
  return <section className="flex items-center py-[107px] px-[330px] gap-[96px] bg-white">
    {services.map(ServiceCard)}
  </section>
}
