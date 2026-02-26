import svgPaths from "./svg-go5gkpswy4";
import imgDoc1 from "figma:asset/556704267d1a24709a3a79f3bcba35e659b80d08.png";
import imgDoc2 from "figma:asset/a46fc268ef16fd99843c10ce64e857e4ab5ecfe3.png";
import imgDoc3 from "figma:asset/5707cdccd20b352ad8a17649e1b4020fb41a1c34.png";
import imgDoc4 from "figma:asset/d57938146adf7e92341438cd61cfc130806b1d7e.png";
import imgImage1 from "figma:asset/a66c9af929ca10903efc9e1cca48429432f40046.png";
import imgDoc5 from "figma:asset/3dc3c40d3534801130ab4ca251c844a27512a83e.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[10px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-0 relative shrink-0 w-[15px]">
      <div className="absolute inset-[-7.36px_-6.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14.7279">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Vector1() {
  return (
    <Wrapper1>
      <path clipRule="evenodd" d={svgPaths.p3c998800} fill="var(--fill-0, #FFB700)" fillRule="evenodd" id="Vector" />
    </Wrapper1>
  );
}
type StarStreamlineHeroiconsText2Props = {
  text: string;
};

function StarStreamlineHeroiconsText2({ text }: StarStreamlineHeroiconsText2Props) {
  return (
    <div className="content-stretch flex gap-[3px] items-start overflow-clip py-[2px] relative shrink-0">
      <Vector1 />
      <Vector1 />
      <Vector1 />
      <Vector1 />
      <Wrapper1>
        <path d={svgPaths.p3646bc80} id="Vector" stroke="var(--stroke-0, #FFB700)" />
      </Wrapper1>
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-black w-[15px]">
        <p className="leading-[normal] whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}
type StarStreamlineHeroiconsText1Props = {
  text: string;
};

function StarStreamlineHeroiconsText1({ text }: StarStreamlineHeroiconsText1Props) {
  return (
    <div className="content-stretch flex gap-[3px] items-start overflow-clip py-[2px] relative shrink-0">
      <Vector />
      <Vector />
      <Vector />
      <Vector />
      <div className="h-[10.313px] relative shrink-0 w-[11.001px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0006 10.3128">
          <path d={svgPaths.p2aa95400} fill="var(--fill-0, #FFB700)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-black whitespace-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

function LocationPin3NavigationMapMapsPinGpsLocation() {
  return (
    <div className="absolute inset-[3.57%]">
      <div className="absolute inset-[-3.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="location-pin-3--navigation-map-maps-pin-gps-location">
            <path d={svgPaths.pfe4b200} id="Vector" stroke="var(--stroke-0, #1B0FFF)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3265fd70} id="Vector_2" stroke="var(--stroke-0, #1B0FFF)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p31b07ac0} id="Vector_3" stroke="var(--stroke-0, #1B0FFF)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <div className="h-[10.313px] relative shrink-0 w-[11px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10.3128">
        <path d={svgPaths.p92ce80} fill="var(--fill-0, #FFB700)" id="Vector" />
      </svg>
    </div>
  );
}
type StarStreamlineHeroiconsTextProps = {
  text: string;
};

function StarStreamlineHeroiconsText({ text }: StarStreamlineHeroiconsTextProps) {
  return (
    <div className="content-stretch flex gap-[3px] items-start overflow-clip py-[2px] relative shrink-0">
      <Vector />
      <Vector />
      <Vector />
      <Vector />
      <div className="h-[10.313px] relative shrink-0 w-[11px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0002 10.3133">
          <path d={svgPaths.p27174a80} fill="var(--fill-0, #FFB700)" id="Vector" />
        </svg>
      </div>
      <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-black whitespace-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

function DocImage() {
  return (
    <div className="absolute left-[-10px] size-[100px] top-[-5px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-22.23%] max-w-none size-[155.77%] top-[-11.85%]" src={imgDoc1} />
      </div>
    </div>
  );
}
type IntroTextProps = {
  text: string;
  text1: string;
};

function IntroText({ text, text1 }: IntroTextProps) {
  return (
    <div className="content-stretch flex items-end justify-between leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal h-full justify-center relative shrink-0 text-[#001e91] text-[12px] w-[229px]">
        <p className="leading-[normal] whitespace-pre-wrap">{text}</p>
      </div>
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1b0fff] text-[10px] whitespace-nowrap">
        <p className="decoration-solid leading-[normal] underline">{text1}</p>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 12 11" className="absolute block size-full">
      <path d={svgPaths.p117a5400} fill="var(--fill-0, #1B0FFF)" id="Vector" />
    </svg>
  );
}
type CardButtonProps = {
  className?: string;
  callIcon?: boolean;
  cardButtonText?: string;
  state?: "Default" | "Selected";
};

function CardButton({ className, callIcon = true, cardButtonText = "Call", state = "Default" }: CardButtonProps) {
  const isDefault = state === "Default";
  const isSelected = state === "Selected";
  return (
    <div className={className || `relative rounded-[21px] ${isSelected ? "bg-[#1b0fff]" : ""}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[3px] items-center justify-center overflow-clip px-[12px] py-[5px] relative">
          {isDefault && callIcon && (
            <div className="h-[11px] relative shrink-0 w-[12px]" data-name="CallIcon">
              <Helper />
            </div>
          )}
          {isDefault && (
            <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b0fff] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[normal]">{cardButtonText}</p>
            </div>
          )}
          {isSelected && callIcon && (
            <div className="h-[11px] relative shrink-0 w-[12px]" data-name="CallIcon">
              <Helper />
            </div>
          )}
          {isSelected && (
            <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Call</p>
            </div>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1b0fff] border-solid inset-0 pointer-events-none rounded-[21px]" />
    </div>
  );
}

export default function Screen5SetUpCare() {
  return (
    <div className="bg-[#eeedff] relative size-full" data-name="Screen 5 - Set up care">
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[24px] h-[750px] items-start left-1/2 overflow-clip px-[16px] py-[12px] rounded-[10px] shadow-[0px_0px_15px_0px_rgba(0,30,145,0.15)] top-[78px] w-[380px]" data-name="Contents">
        <div className="relative shrink-0 w-full" data-name="Header">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between relative w-full">
              <div className="h-[33px] relative shrink-0 w-[120px]" data-name="myplan_logo">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="myplan">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 33">
                        <g clipPath="url(#clip0_1_477)" id="myplan">
                          <path d={svgPaths.p34a6dd00} fill="var(--fill-0, #1B0FFF)" id="Vector" />
                          <path d={svgPaths.p2fb35d20} fill="var(--fill-0, #1B0FFF)" id="Vector_2" />
                          <path d={svgPaths.p17d46b80} fill="var(--fill-0, #001E91)" id="Vector_3" />
                          <path d={svgPaths.p1edf6900} fill="var(--fill-0, #001E91)" id="Vector_4" />
                          <path d={svgPaths.p23214fc0} fill="var(--fill-0, #001E91)" id="Vector_5" />
                          <path d={svgPaths.p3dceb5f0} fill="var(--fill-0, #001E91)" id="Vector_6" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_477">
                            <rect fill="white" height="33" width="120" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b0fff] text-[16px] text-right">{"STEP 4 OF 4"}</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
          <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#001e91] text-[20px] w-[346px] whitespace-pre-wrap">Let’s get you set up with your primary care provider and other key healthcare team members.</p>
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="Find a PCP">
            <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-black w-[min-content]">
              <p className="leading-[normal] whitespace-pre-wrap">Find a primary care provider</p>
            </div>
            <IntroText text="We found three highly-rated PCPs within 15 miles of your zip code." text1="View all providers" />
            <div className="content-stretch flex gap-[13px] items-start overflow-clip relative shrink-0 w-full" data-name="Cards">
              <div className="content-stretch flex gap-[6px] items-start p-[7px] relative rounded-[5px] shrink-0 w-[230px]" data-name="Dr Wood Card">
                <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
                <div className="content-stretch flex flex-col items-center justify-between relative self-stretch shrink-0">
                  <div className="overflow-clip relative rounded-[40px] shrink-0 size-[80px]" data-name="Dr Wood">
                    <DocImage />
                  </div>
                  <CardButton className="relative rounded-[21px] shrink-0" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Dr Wood Details">
                  <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001e91] text-[12px] whitespace-nowrap">
                    <p className="leading-[normal]">Dr. Evelyn Wood, MD</p>
                  </div>
                  <StarStreamlineHeroiconsText text="4.0 (5)" />
                  <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                    <p className="mb-[2px]">Family Medicine</p>
                    <p>40 Avonwood Drive</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center py-[3px] relative shrink-0 w-full" data-name="Map-Marker Streamline Majesticons">
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                        <p className="leading-[normal]">1.7 miles away</p>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Location-Pin-3 Streamline Core">
                        <LocationPin3NavigationMapMapsPinGpsLocation />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0">
                    <CardButton callIcon={false} cardButtonText="Details" className="relative rounded-[21px] shrink-0" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start p-[7px] relative rounded-[5px] shrink-0 w-[240px]" data-name="Dr Hernandez Card">
                <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
                <div className="content-stretch flex flex-col items-center justify-between relative self-stretch shrink-0" data-name="Portrait">
                  <div className="overflow-clip relative rounded-[75px] shrink-0 size-[80px]">
                    <div className="absolute left-[-3px] size-[88px] top-[-2px]" data-name="Doc 2">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-[-45.37%] max-w-none size-[190.94%] top-[-11.54%]" src={imgDoc2} />
                      </div>
                    </div>
                  </div>
                  <CardButton className="relative rounded-[21px] shrink-0" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Dr Hernandez Details">
                  <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001e91] text-[12px] whitespace-nowrap">
                    <p className="leading-[normal]">Alonso Hernandez, NP</p>
                  </div>
                  <StarStreamlineHeroiconsText1 text="4.5 (8)" />
                  <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                    <p className="mb-[2px]">Internal Medicine</p>
                    <p>65 Dale St. Suite 300</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center py-[3px] relative shrink-0 w-full" data-name="Map-Marker Streamline Majesticons">
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                        <p className="leading-[normal]">2.3 miles away</p>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Location-Pin-3 Streamline Core">
                        <LocationPin3NavigationMapMapsPinGpsLocation />
                      </div>
                    </div>
                  </div>
                  <CardButton callIcon={false} cardButtonText="Details" className="relative rounded-[21px] shrink-0" />
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start p-[7px] relative rounded-[5px] shrink-0 w-[230px]" data-name="Dr Adebimpe Card">
                <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
                <div className="content-stretch flex flex-col items-center justify-between relative self-stretch shrink-0" data-name="Portrait">
                  <div className="overflow-clip relative rounded-[40px] shrink-0 size-[80px]" data-name="Dr Wood">
                    <DocImage />
                    <div className="absolute left-[-3px] size-[86px] top-0" data-name="Doc 3">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute h-[113.85%] left-[-54.05%] max-w-none top-[-0.49%] w-[208.13%]" src={imgDoc3} />
                      </div>
                    </div>
                  </div>
                  <CardButton className="relative rounded-[21px] shrink-0" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Dr Adebimpe Details">
                  <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001e91] text-[12px] whitespace-nowrap">
                    <p className="leading-[normal]">Nnedi Adebimpe, NP</p>
                  </div>
                  <StarStreamlineHeroiconsText text="4.0 (3)" />
                  <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                    <p className="mb-[2px]">General Medicine</p>
                    <p>62 Dale Rd., Ste 203</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center py-[3px] relative shrink-0 w-full" data-name="Map-Marker Streamline Majesticons">
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                        <p className="leading-[normal]">4.6 miles away</p>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Location-Pin-3 Streamline Core">
                        <LocationPin3NavigationMapMapsPinGpsLocation />
                      </div>
                    </div>
                  </div>
                  <CardButton callIcon={false} cardButtonText="Details" className="relative rounded-[21px] shrink-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#001e91] h-[3px] rounded-[3px] shrink-0 w-[348px]" data-name="Divider line" />
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="Find a dentist">
            <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black w-full">
              <p className="leading-[normal] whitespace-pre-wrap">Find a dentist</p>
            </div>
            <IntroText text="We found three highly-rated dentists within 15 miles of your zip code." text1="View all providers" />
            <div className="content-stretch flex gap-[13px] items-start overflow-clip relative shrink-0 w-full" data-name="Cards">
              <div className="content-stretch flex gap-[6px] items-start p-[7px] relative rounded-[5px] shrink-0 w-[230px]" data-name="Dr Two Card">
                <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
                <div className="content-stretch flex flex-col items-center justify-between relative self-stretch shrink-0" data-name="Portrait">
                  <div className="overflow-clip relative rounded-[75px] shrink-0 size-[80px]">
                    <div className="absolute left-[-34px] size-[122px] top-[-9px]" data-name="Doc 2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDoc4} />
                    </div>
                  </div>
                  <CardButton className="relative rounded-[21px] shrink-0" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Dr Wood Details">
                  <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001e91] text-[12px] whitespace-nowrap">
                    <p className="leading-[normal]">Dr. Eloise Carter, DMD</p>
                  </div>
                  <StarStreamlineHeroiconsText2 text="4.0" />
                  <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                    <p className="mb-[2px]">General Dentist</p>
                    <p>712 Scarborough Rd.</p>
                  </div>
                  <div className="content-stretch flex items-center py-[3px] relative shrink-0 w-full" data-name="Map-Marker Streamline Majesticons">
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                        <p className="leading-[normal]">6.2 miles away</p>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Location-Pin-3 Streamline Core">
                        <LocationPin3NavigationMapMapsPinGpsLocation />
                      </div>
                    </div>
                  </div>
                  <CardButton callIcon={false} cardButtonText="Details" className="relative rounded-[21px] shrink-0" />
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start p-[7px] relative rounded-[5px] shrink-0 w-[230px]" data-name="Dr Chen Card">
                <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
                <div className="content-stretch flex flex-col items-center justify-between relative self-stretch shrink-0" data-name="Portrait">
                  <div className="overflow-clip relative rounded-[40px] shrink-0 size-[80px]" data-name="Dr Chen">
                    <div className="absolute h-[133px] left-[-107px] top-[-4px] w-[244px]" data-name="image 1">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
                    </div>
                  </div>
                  <CardButton className="relative rounded-[21px] shrink-0" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Dr Chen Details">
                  <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#001e91] text-[12px] whitespace-nowrap">
                    <p className="leading-[normal]">Dr. James Chen, DMD</p>
                  </div>
                  <StarStreamlineHeroiconsText2 text="4.0" />
                  <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                    <p className="mb-[2px]">Dentist</p>
                    <p>12 Medical Blvd.</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center py-[3px] relative shrink-0 w-full" data-name="Map-Marker Streamline Majesticons">
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                        <p className="leading-[normal]">2.3 miles away</p>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Location-Pin-3 Streamline Core">
                        <LocationPin3NavigationMapMapsPinGpsLocation />
                      </div>
                    </div>
                  </div>
                  <CardButton callIcon={false} cardButtonText="Details" className="relative rounded-[21px] shrink-0" />
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-start p-[7px] relative rounded-[5px] shrink-0 w-[230px]" data-name="Dr Singh Card">
                <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
                <div className="content-stretch flex flex-col items-center justify-between relative self-stretch shrink-0" data-name="Portrait">
                  <div className="overflow-clip relative rounded-[75px] shrink-0 size-[80px]">
                    <div className="absolute left-[-46px] size-[122px] top-[-8px]" data-name="Doc 2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDoc5} />
                    </div>
                  </div>
                  <CardButton className="relative rounded-[21px] shrink-0" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Dr Singh Details">
                  <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#001e91] text-[12px] text-ellipsis w-[min-content] whitespace-nowrap">
                    <p className="leading-[normal] overflow-hidden">Dr. Harpreet Singh, DMD</p>
                  </div>
                  <StarStreamlineHeroiconsText1 text="4.5 (2)" />
                  <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[normal] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                    <p className="mb-[2px]">General Dentistry</p>
                    <p>312 Main St. Ste 102</p>
                  </div>
                  <div className="content-stretch flex items-center py-[3px] relative shrink-0 w-full" data-name="Map-Marker Streamline Majesticons">
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <div className="flex flex-col font-['Work_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#001e91] text-[10px] whitespace-nowrap">
                        <p className="leading-[normal]">1.3 miles away</p>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Location-Pin-3 Streamline Core">
                        <LocationPin3NavigationMapMapsPinGpsLocation />
                      </div>
                    </div>
                  </div>
                  <CardButton callIcon={false} cardButtonText="Details" className="relative rounded-[21px] shrink-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#001e91] h-[3px] rounded-[3px] shrink-0 w-[348px]" data-name="Divider line" />
          <CardButton callIcon={false} cardButtonText="Search for my existing providers" className="relative rounded-[21px] shrink-0" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-end justify-between min-h-px min-w-px py-[2px] relative w-full" data-name="Next Step">
          <div className="bg-white relative rounded-[10px] shrink-0 w-[155px]" data-name="Prev step button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[28px] py-[12px] relative w-full">
                <Wrapper>
                  <path d={svgPaths.p3b463e00} fill="var(--stroke-0, #1B0FFF)" id="Arrow 1" />
                </Wrapper>
                <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1b0fff] text-[16px]">Previous</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#1b0fff] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <div className="bg-[#1b0fff] relative rounded-[10px] shrink-0 w-[155px]" data-name="Next step button">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[12px] relative w-full">
                <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white">Finish</p>
                <Wrapper>
                  <path d={svgPaths.p39ccd2b2} fill="var(--stroke-0, white)" id="Arrow 1" />
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[874px] left-0 pointer-events-none top-0">
        <div className="h-[64px] pointer-events-auto sticky top-0 w-[402px]" data-name="Status Bar">
          <div className="absolute bg-[#eeedff] inset-0" />
          <div className="absolute inset-[40.63%_20.4%_35.94%_74.38%]" data-name="Network Signal / Light">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 15">
              <g id="Network Signal /Â Light">
                <path clipRule="evenodd" d={svgPaths.p2400e600} fill="var(--fill-0, #D1D1D6)" fillRule="evenodd" id="Path" />
                <path clipRule="evenodd" d={svgPaths.p5bd4330} fill="var(--fill-0, #D1D1D6)" fillRule="evenodd" id="Path_2" />
                <path clipRule="evenodd" d={svgPaths.p804d000} fill="var(--fill-0, #D1D1D6)" fillRule="evenodd" id="Path_3" />
                <path clipRule="evenodd" d={svgPaths.p1e07b1f0} fill="var(--fill-0, #3C3C43)" fillOpacity="0.18" fillRule="evenodd" id="Empty Bar" />
                <path clipRule="evenodd" d={svgPaths.p2400e600} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_4" />
                <path clipRule="evenodd" d={svgPaths.p5bd4330} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_5" />
                <path clipRule="evenodd" d={svgPaths.p804d000} fill="var(--fill-0, black)" fillRule="evenodd" id="Path_6" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[40.63%_14.93%_35.94%_80.85%]" data-name="WiFi Signal / Light">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
              <g id="WiFi Signal / Light">
                <path d={svgPaths.p3d050c00} fill="var(--fill-0, black)" id="Path" />
                <path d={svgPaths.p1ee01980} fill="var(--fill-0, black)" id="Path_2" />
                <path d={svgPaths.p24f67400} fill="var(--fill-0, #3C3C43)" fillOpacity="0.3" id="Path_3" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[42.19%_9.2%_37.5%_88.31%]" data-name="􀋦">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 13">
              <path d={svgPaths.p225f300} fill="var(--fill-0, black)" id="ô¦" />
            </svg>
          </div>
          <div className="absolute inset-[42.19%_7.46%_37.5%_86.32%]" data-name="Subtract">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
              <g id="Subtract">
                <path d={svgPaths.pa6e8100} fill="var(--fill-0, #3C3C43)" fillOpacity="0.6" />
                <path d={svgPaths.p6a891f0} fill="var(--fill-0, #3C3C43)" fillOpacity="0.6" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[48.44%_6.97%_45.31%_92.79%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4">
              <path d={svgPaths.p16442180} fill="var(--fill-0, #3C3C43)" fillOpacity="0.6" id="Rectangle 23" />
            </svg>
          </div>
          <div className="absolute inset-[45%_10.92%_41.34%_86.78%]" data-name="Battery">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.24047 8.74745">
              <g id="Battery">
                <path d={svgPaths.p2c9e7f00} fill="var(--fill-0, #34C759)" id="50" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[40.63%_82.84%_40.63%_9.45%]" data-name="9:41">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 12">
              <g id="9:41">
                <path d={svgPaths.pdfb0cf1} fill="var(--fill-0, black)" />
                <path d={svgPaths.pfede400} fill="var(--fill-0, black)" />
                <path d={svgPaths.p151a5680} fill="var(--fill-0, black)" />
                <path d={svgPaths.p2228fe00} fill="var(--fill-0, black)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}