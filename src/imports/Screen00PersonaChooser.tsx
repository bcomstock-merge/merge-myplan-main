import clsx from "clsx";
import svgPaths from "./svg-dwgfvo1ubx";
import imgImage6 from "figma:asset/95abb13a935b0bfcb7acb51b8925ea7070c52859.png";
import imgImage4 from "figma:asset/1da7cb17198fe89bcfbf8126d1410807c8256166.png";
import imgImage7 from "figma:asset/ba75834ddf5ddf93a766323cb9dc9d6e683df572.png";
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, text2, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("font-['Work_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[0px] text-black text-center whitespace-pre-wrap", additionalClassNames)}>
      <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold mb-0 text-[#1b0fff] text-[16px]">{text}</p>
      <p className="mb-0 text-[#001e91] text-[14px]">{text1}</p>
      <p className="text-[#001e91] text-[14px]">{text2}</p>
    </div>
  );
}

export default function Screen00PersonaChooser() {
  return (
    <div className="bg-[#eeedff] relative size-full" data-name="Screen 00 - Persona Chooser">
      <div className="absolute bg-white content-stretch flex flex-col gap-[10px] h-[750px] items-start left-[11px] overflow-clip px-[16px] py-[12px] rounded-[10px] shadow-[0px_0px_15px_0px_rgba(0,30,145,0.15)] top-[78px] w-[380px]" data-name="Contents">
        <div className="h-[33px] relative shrink-0 w-[120px]" data-name="myplan_logo">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative size-full">
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="myplan">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 33">
                  <g clipPath="url(#clip0_1_132)" id="myplan">
                    <path d={svgPaths.p34a6dd00} fill="var(--fill-0, #1B0FFF)" id="Vector" />
                    <path d={svgPaths.p2fb35d20} fill="var(--fill-0, #1B0FFF)" id="Vector_2" />
                    <path d={svgPaths.p17d46b80} fill="var(--fill-0, #001E91)" id="Vector_3" />
                    <path d={svgPaths.p1edf6900} fill="var(--fill-0, #001E91)" id="Vector_4" />
                    <path d={svgPaths.p23214fc0} fill="var(--fill-0, #001E91)" id="Vector_5" />
                    <path d={svgPaths.p3dceb5f0} fill="var(--fill-0, #001E91)" id="Vector_6" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_132">
                      <rect fill="white" height="33" width="120" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start pt-[24px] relative shrink-0">
          <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b0fff] text-[16px]">PERSONA LAUNCHER</p>
          <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#001e91] text-[24px] w-[339px] whitespace-pre-wrap">Choose a member persona to see their onboarding experience.</p>
          <div className="content-start flex flex-wrap gap-[14px_10px] items-start justify-center relative shrink-0 w-[350px]">
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[170px]" data-name="Holly">
              <div className="relative shrink-0 size-[125px]" data-name="image 6">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
              </div>
              <Helper text="Holly Smith, 47" text1="New member" text2="Self + family" additionalClassNames="w-[130px]" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[170px]" data-name="Pedro">
              <div className="relative shrink-0 size-[126px]" data-name="image 4">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
              </div>
              <Helper text="Pedro Barrio, 52" text1="New member" text2="Self only" additionalClassNames="w-[130px]" />
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[170px]" data-name="Natasha">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[125px]" data-name="image 6">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
                  </div>
                </div>
              </div>
              <Helper text="Natasha Carter, 27" text1="Existing member" text2="Self + one" additionalClassNames="w-[162px]" />
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