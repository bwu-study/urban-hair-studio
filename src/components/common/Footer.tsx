import { PHONE_NUMBER } from "@/constants/common";

const FooterLeft = () => {
  return (
    <div className="flex justify-between flex-col w-full md:w-[320px] h-[100%]">
      <div className="w-[100%] h-[40px]">
        <h4 className="text-[20px] font-bold ">URBAN HAIR STUDIO</h4>
        <p className="text-[8px] text-[#A6A09B]">HAIR & NAIL</p>
      </div>
      <div className="pr-[40px] h-[40px]">
        <p className="text-[12px] text-[#79716B] break-keep">
          2-3층 규모의 최고의 디자이너들과 함께하는 프리미엄 케어를 경험하세요.
        </p>
      </div>
    </div>
  );
};

const FooterRight = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full md:w-[447.3px] h-[100%] gap-6 md:gap-0 mt-6 md:mt-0">
      <div className="flex justify-between flex-col w-full md:w-[163.65px] h-[78.28px]">
        <h5 className="text-[10px] font-bold">INFOMATION</h5>
        <div className="text-[14px] text-[#79716B] whitespace-nowrap">
          <p>T.{PHONE_NUMBER}</p>
          <p>Insta. @urbanhairstudio.official</p>
        </div>
      </div>
      <div className="flex justify-between flex-col w-full md:w-[163.65px] h-[78.28px]">
        <h5 className="text-[10px] font-bold">LOCATION</h5>
        <div className="text-[14px] text-[#79716B] whitespace-nowrap">
          <p>서울 강북구 도봉로 10길</p>
          <p>어반헤어스튜디오 2, 3층</p>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center min-h-[225px] md:h-[225px] bg-[#F5F5F4] py-8 md:py-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-[100%] h-auto md:h-[96px] px-[30px] gap-6 md:gap-0">
        <FooterLeft />
        <FooterRight />
      </div>
    </footer>
  );
};
