import ScissorsIcon from '../assets/prising/scissors.svg';
import NailIcon from '../assets/prising/nail.svg';

type Service = {
  name: string;
  price: number;
  note?: string | null;
};

type SectionData = {
  title: string;
  icon: string;
  services: Service[];
};

const priceData: { [key: string]: SectionData } = {
  hair: {
    title: 'HAIR',
    icon: ScissorsIcon,
    services: [
      { name: '여성컷', price: 28000, note: null },
      { name: '남성컷', price: 22000, note: null },
      { name: '남성펌', price: 77000, note: null },
      { name: '매직 OR 셋팅', price: 16000, note: null },
      { name: '로레알컬러 (단발기준)', price: 99000, note: null },
    ],
  },
  nail: {
    title: 'NAIL',
    icon: NailIcon,
    services: [
      { name: '손 젤네일', price: 40000, note: '작은 디자인 1~3개 추가 가능' },
      { name: '발 젤네일', price: 50000, note: '작은 디자인 1개, 썸네 추가 가능' },
      { name: '내장발톱', price: 50000, note: null },
    ],
  },
};

const formatPrice = (price: number) => `${price.toLocaleString()}원`;

function PricingSection({ section }: { section: SectionData }) {
  return (
    <div className='bg-white rounded-lg p-8'>
      <div className='flex items-center gap-3 mb-20 pb-4 border-b-2 border-gray-800'>
        <span className='icon-wrapper'>
          <img src={section.icon} alt={section.title.toLowerCase()} className='pricing-icon' />
        </span>
        <h3 className='text-[30px] font-bold'>{section.title}</h3>
      </div>
      <div className='flex flex-col gap-5 space-y-6'>
        {section.services.map((service, idx) => (
          <div key={idx} className='flex justify-between items-start'>
            <div>
              <p className='font-bold text-[24px]'>{service.name}</p>
              {service.note && <p className='text-[14px] text-gray-500 mt-1'>{service.note}</p>}
            </div>
            <p className='font-bold text-[30px] whitespace-nowrap ml-4'>{formatPrice(service.price)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
function Pricing() {
  return (
    <section className='mt-30 mb-20'>
      <div className='w-200 h-32 ml-30'>
        <h2 className='text-5xl font-bold'>가격표</h2>
      </div>
      <div className='mx-20 grid md:grid-cols-2 gap-8'>
        <PricingSection section={priceData.hair} />
        <PricingSection section={priceData.nail} />
      </div>
      <style>{`
        .pricing-icon {
          width: 32px;
          height: 32px;
          display: block;
        }
        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
        }
      `}</style>
    </section>
  );
}

export default Pricing;
