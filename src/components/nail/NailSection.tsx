import nail1 from '@/assets/nail/nail1.jpeg';
import nail2 from '@/assets/nail/nail2.jpeg';
import nail3 from '@/assets/nail/padi1.jpeg';
import nail4 from '@/assets/nail/padi2.jpeg';

type Nail = { description: string };
const services1: Nail[] = [
  { description:'1:1 맞춤 디자인 서비스' },
  { description:'임산부도 가능한 저자극 젤 사용' },
  { description:'꼼꼼한 습식 케어 및 영양관리' },
  { description:'이달의 아트 할인' },
]

type Profile = { profile: string, title: string };
const services2: Profile[] = [
  { profile:nail1, title:'nail1' },
  { profile:nail3, title:'nail2' },
  { profile:nail2, title:'nail3' },
  { profile:nail4, title:'nale4' },
]


const NailCard = (service1: Nail) => {
  return<div className='flex items-center gap-3 mb-5'>
          <svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#FE9A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.75 9L8.25 10.5L11.25 7.5" stroke="#FE9A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          {service1.description}
        </div>
}

const NailProfile = (service2: Profile) => {
  return<div className="w-70 h-90 overflow-hidden rounded-2xl relative">
            <img className="h-full w-full object-cover" src={service2.profile} alt={service2.title} />
        </div>
}

export const NailSection = () => {
  return <section className="flex justify-center">
    <div className='min-h-screen flex items-center'>
      <div className='w-230'>
        <div className='inline-block px-4 py-2 bg-[#FFFBEB] text-[#BB4D00] rounded-full text-[10px] tracking-widest font-bold'>3RD FLOOR EXCLUSIVE</div>
        <h2 className="text-5xl mt-10 mb-10">네일또와</h2>
        <p className='mb-8'>
          1:1로 꼼꼼하게 진행되는 프라이빗 1인샵입니다.<br/>
          젤네일 · 젤패디 전문으로, 10년 이상의 경력을 가진 드릴 전문 네일리스트가 시술합니다.<br/>
          헤어 시술을 받으시는 동안 또는 프라이빗하게 따로 방문하여<br/>
          손끝의 아름다움을 완성하실 수 있는 3층 네일 전용 공간입니다.
        </p>
        {services1.map(NailCard)}
        <button className="px-10 py-5 mt-5 bg-black text-white rounded-full font-semibold cursor-pointer">예약하기</button>
      </div>
    </div>
    <div>
      <div className="grid grid-cols-2 gap-5 mt-20">
          {services2.map((item, i) => (
            <div key={i} className={i % 2 === 1 ? "mt-5" : ""}>
              <NailProfile {...item} />
            </div>
          ))}
        </div>
    </div>
  </section>
}
