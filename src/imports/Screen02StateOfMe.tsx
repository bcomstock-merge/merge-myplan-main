import svgPaths from "./svg-j488q58h0t";

function Slider({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[24px] relative shrink-0 w-[340px]">
      <div className="absolute inset-[-4.17%_0_-12.5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 28">
          {children}
        </svg>
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex font-['Work_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-[#001e91] text-[14px] w-full whitespace-pre-wrap">
      <p className="relative shrink-0 w-[128px]">{text}</p>
      <p className="relative shrink-0 text-right w-[120px]">{text1}</p>
    </div>
  );
}

export default function Screen02StateOfMe() {
  return (
    <div className="bg-[#eeedff] relative size-full" data-name="Screen 02 - State of Me">
      <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[750px] items-start left-[11px] overflow-clip px-[16px] py-[12px] rounded-[10px] shadow-[0px_0px_15px_0px_rgba(0,30,145,0.15)] top-[78px] w-[380px]" data-name="Contents">
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
              <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b0fff] text-[16px] text-right">{"STEP 1 OF 4"}</p>
            </div>
          </div>
        </div>
        <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#001e91] text-[20px] w-[326px] whitespace-pre-wrap">Tell us a little about where you are on your health journey.</p>
        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0" data-name="Sliders">
          <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-[340px]" data-name="Slider 01">
            <div className="content-stretch flex font-['Work_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-[#001e91] text-[14px] w-full whitespace-pre-wrap">
              <p className="relative shrink-0 w-[120px]">I have a few health issues I’ve been putting off</p>
              <p className="relative shrink-0 text-right w-[120px]">I stay on top of all my health concerns</p>
            </div>
            <Slider>
              <g id="Slider">
                <rect fill="var(--fill-0, #C4C4E7)" height="10" id="Rectangle 26" rx="5" width="340" y="8" />
                <rect fill="var(--fill-0, #1B0FFF)" height="10" id="Rectangle 27" rx="5" width="108" y="8" />
                <g filter="url(#filter0_d_1_472)" id="Ellipse 1">
                  <circle cx="107" cy="13" fill="var(--fill-0, #1B0FFF)" r="12" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_d_1_472" width="28" x="94" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_472" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_472" mode="normal" result="shape" />
                </filter>
              </defs>
            </Slider>
          </div>
          <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[340px]" data-name="Slider 02">
            <Helper text="I need to schedule routine care and screenings" text1="I’m up to date on routine care and screenings" />
            <Slider>
              <g id="Slider">
                <rect fill="var(--fill-0, #C4C4E7)" height="10" id="Rectangle 26" rx="5" width="340" y="8" />
                <rect fill="var(--fill-0, #1B0FFF)" height="10" id="Rectangle 27" rx="5" width="196" y="8" />
                <g filter="url(#filter0_d_1_467)" id="Ellipse 1">
                  <circle cx="195" cy="13" fill="var(--fill-0, #1B0FFF)" r="12" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_d_1_467" width="28" x="182" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_467" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_467" mode="normal" result="shape" />
                </filter>
              </defs>
            </Slider>
          </div>
          <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[340px]" data-name="Slider 03">
            <Helper text="I need to find one or more new providers" text1="I have providers that I’d prefer to stay with" />
            <Slider>
              <g id="Slider">
                <rect fill="var(--fill-0, #C4C4E7)" height="10" id="Rectangle 26" rx="5" width="340" y="8" />
                <rect fill="var(--fill-0, #1B0FFF)" height="10" id="Rectangle 27" rx="5" width="72" y="8" />
                <g filter="url(#filter0_d_1_457)" id="Ellipse 1">
                  <circle cx="71" cy="13" fill="var(--fill-0, #1B0FFF)" r="12" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_d_1_457" width="28" x="58" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_457" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_457" mode="normal" result="shape" />
                </filter>
              </defs>
            </Slider>
          </div>
          <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[340px]" data-name="Slider 04">
            <div className="content-stretch flex font-['Work_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-[#001e91] text-[14px] w-full whitespace-pre-wrap">
              <p className="relative shrink-0 w-[128px]">I would like support reaching my health goals</p>
              <p className="relative shrink-0 text-right w-[129px]">I feel good about where I am on my health journey</p>
            </div>
            <Slider>
              <g id="Slider">
                <rect fill="var(--fill-0, #C4C4E7)" height="10" id="Rectangle 26" rx="5" width="340" y="8" />
                <rect fill="var(--fill-0, #1B0FFF)" height="10" id="Rectangle 27" rx="5" width="289" y="8" />
                <g filter="url(#filter0_d_1_462)" id="Ellipse 1">
                  <circle cx="287" cy="13" fill="var(--fill-0, #1B0FFF)" r="12" />
                </g>
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28" id="filter0_d_1_462" width="28" x="274" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dx="1" dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_462" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_462" mode="normal" result="shape" />
                </filter>
              </defs>
            </Slider>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px py-[2px] relative w-full" data-name="Next Step">
          <div className="bg-[#1b0fff] relative rounded-[10px] shrink-0 w-[155px]" data-name="Next step button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[28px] py-[12px] relative w-full">
                <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white">Next step</p>
                <div className="h-0 relative shrink-0 w-[15px]">
                  <div className="absolute inset-[-7.36px_-6.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14.7279">
                      <path d={svgPaths.p39ccd2b2} fill="var(--stroke-0, white)" id="Arrow 1" />
                    </svg>
                  </div>
                </div>
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