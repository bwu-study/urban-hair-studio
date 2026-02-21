import profile1 from "@/assets/designer/profile1.jpeg";
import profile2 from "@/assets/designer/profile2.jpeg";
import profile3 from "@/assets/designer/profile3.jpeg";
import profile4 from "@/assets/designer/profile4.jpeg";
import profile5 from "@/assets/designer/profile5.jpeg";

type Designer = {
  profile: string;
  title: string;
  name: string;
  description: string;
};
const designers: Designer[] = [
  {
    profile: profile1,
    title: "profile1",
    name: "이현아 대표원장",
    description: "오랜 경력을 바탕으로 맞춤 스타일을 완성해 드립니다.",
  },
  {
    profile: profile2,
    title: "profile2",
    name: "미애 (보람) 원장",
    description:
      "전문적인 상담과 섬세한 손길로\n 스타일을 업그레이드해 드립니다.",
  },
  {
    profile: profile3,
    title: "profile3",
    name: "하리 원장",
    description:
      "[트렌디한 감각 / 펌&컬러 전문]\n 1:1 작업을 상담과 마무리까지 섬세하고 편안하게 디자인해 드립니다.\n\n *주의사항 꼭 확인해주세요*",
  },
  {
    profile: profile4,
    title: "profile4",
    name: "정화 원장",
    description:
      " 샴푸부터 모든 시술을 인턴 없이, 중복 예약 없이 오직 한 분만을 위해 1:1로 정성껏 시술해 드립니다.\n\n 자세하고 정확한 상담을 통해 누구보다 고객님의 니즈를 섬세하게 파악하고, 가장 잘 어울리는 맞춤 디자인을 함께 찾아드립니다.\n (첫 방문 상담은 최소 15분 정도 소요됩니다.)\n\n 공장처럼 찍어내는 빠른 시술이 아닌, 고객님과 진심으로 소통하며 함께 디자인을 완성해 갑니다.\n\n 디테일의 한 끗 차이로 감동을 선물해 드리겠습니다. 네이버 예약이 불가할 경우, 카카오톡으로 문의주시면 예약을 도와드리겠습니다.",
  },
  {
    profile: profile5,
    title: 'profile5',
    name: '네일또와',
    description:'* 1:1 꼼꼼한 1인샵_유지력짱\n * 젤네일 / 젤페디 전문샵\n * 10년 이상 경력의 드릴전문샵',
  },
];

const DesignerCard = (service: Designer) => {
  return<div className="w-80">
        <div className="w-80 h-90 overflow-hidden rounded-2xl relative">
            <img className="h-full w-full object-cover" src={service.profile} alt={service.title} />
            <div className='absolute bottom-4 left-6 text-white text-2xl font-bold'>{service.name}</div>
        </div>
        <div>
            <p className='mt-5 ml-5 text-sm text-[#A6A09B] font-bold'>디자이너 소개</p>
            <p className='mt-3 ml-5 text-lg text-[#44403B] font-semibold whitespace-pre-line'>{service.description}</p>
        </div>
        <button className="px-6 py-3 mt-5 ml-5 bg-black text-white rounded-full font-semibold">예약하기</button>
    </div>
  ;
};

export const DesignerSection = () => {
  return (
    <section className="mt-30 mb-20">
      <div className="w-200 h-32 ml-30">
        <h2 className="text-5xl font-bold">Designer</h2>
        <br />
        <p className="text-[#79716B] text-xl">
          2개 층의 광활한 공간에서 각 분야 최고의 전문성을 가진 4인의 디자이너를
          만나보세요.
        </p>
      </div>
      <div className="flex gap-5 justify-center mt-10 w-full">
        {designers.map(DesignerCard)}
      </div>
    </section>
  );
};

