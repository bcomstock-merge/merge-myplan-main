import clsx from "clsx";
import svgPaths from "./svg-vboffwl5bq";
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("flex flex-col items-center justify-center size-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-center justify-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[28px] py-[12px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}

function PillsHelper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <div className="content-stretch flex items-center justify-center relative size-full">{children}</div>
    </Wrapper1>
  );
}
type PillsHelperProps = {
  additionalClassNames?: string;
};

function PillsHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<PillsHelperProps>) {
  return (
    <div className={clsx("relative rounded-[35px] shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#1b0fff] border-solid inset-0 pointer-events-none rounded-[35px]" />
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

export default function Screen03Interests() {
  return (
    <div className="bg-[#eeedff] relative size-full" data-name="Screen 03 - Interests">
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col gap-[24px] h-[750px] items-start left-1/2 overflow-clip px-[16px] py-[12px] rounded-[10px] shadow-[0px_0px_15px_0px_rgba(0,30,145,0.15)] top-[78px] w-[380px]" data-name="Contents">
        <div className="relative shrink-0 w-full" data-name="Header">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between relative w-full">
              <div className="h-[33px] relative shrink-0 w-[120px]" data-name="myplan_logo">
                <Wrapper3>
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
                </Wrapper3>
              </div>
              <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b0fff] text-[16px] text-right">{"STEP 2 OF 4"}</p>
            </div>
          </div>
        </div>
        <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#001e91] text-[20px] w-[346px] whitespace-pre-wrap">Choose a few topics or concerns that are relevant to you. We’ll use this information to connect you to personalized benefits.</p>
        <div className="content-start flex flex-wrap gap-[19px] items-start relative shrink-0 w-[346px]" data-name="Pills">
          <PillsHelper additionalClassNames="bg-white">
            <PillsHelper1>
              <div className="aspect-[15.004324913024902/13.394854545593262] flex-[1_0_0] min-h-px min-w-px relative" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.2837">
                  <path d={svgPaths.pe7e6780} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </PillsHelper1>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black">Heart health</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-[#eeedff]">
            <div className="relative shrink-0 w-[16px]" data-name="SmIcon-Pediatrics-Color">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                  <div className="h-[14px] relative shrink-0 w-[10px]" data-name="Layer_1">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
                      <g clipPath="url(#clip0_1_801)" id="Layer_1">
                        <path d={svgPaths.p13e97080} fill="var(--fill-0, #33CCCC)" id="Vector" />
                        <path d={svgPaths.p351632f0} fill="var(--fill-0, #33CCCC)" id="Vector_2" />
                        <g id="Group">
                          <path d={svgPaths.p1d7b8170} fill="var(--fill-0, black)" id="Vector_3" />
                          <path d={svgPaths.p3ee16480} fill="var(--fill-0, black)" id="Vector_4" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_801">
                          <rect fill="white" height="14" width="10" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#001e91] text-[16px]">Pediatrics</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-white">
            <PillsHelper1>
              <div className="aspect-[12.40999984741211/14.010000228881836] flex-[1_0_0] min-h-px min-w-px relative" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
                  <path d={svgPaths.p39eaea80} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </PillsHelper1>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black">Diabetes</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-[#eeedff]">
            <div className="min-h-[14px] relative shrink-0 w-[16px]" data-name="SmIcon-Dental-Color">
              <div className="flex flex-col items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] relative w-full">
                  <div className="h-[15px] relative shrink-0 w-[13.13px]" data-name="Layer_1">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.13 15">
                      <g clipPath="url(#clip0_1_783)" id="Layer_1">
                        <path d={svgPaths.p11736200} fill="var(--fill-0, white)" id="Vector" />
                        <path d={svgPaths.p2d987080} fill="var(--fill-0, black)" id="Vector_2" />
                        <path d={svgPaths.pe36800} fill="var(--fill-0, black)" id="Vector_3" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_783">
                          <rect fill="white" height="15" width="13.13" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#001e91] text-[16px]">Dental care</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-white">
            <div className="relative shrink-0 w-[16px]" data-name="SmIcon-Joints">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative w-full">
                  <div className="h-[14px] relative shrink-0 w-[13.73px]" data-name="Layer_1">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.73 14">
                      <g clipPath="url(#clip0_1_766)" id="Layer_1">
                        <path d={svgPaths.p1b1cc900} fill="var(--fill-0, black)" id="Vector" />
                        <path d={svgPaths.p3e155cf0} fill="var(--fill-0, black)" id="Vector_2" />
                        <path d={svgPaths.p83ae800} fill="var(--fill-0, black)" id="Vector_3" />
                        <path d={svgPaths.p2a43c440} fill="var(--fill-0, black)" id="Vector_4" />
                        <path d={svgPaths.p19420700} fill="var(--fill-0, black)" id="Vector_5" />
                        <path d={svgPaths.p355ced00} fill="var(--fill-0, black)" id="Vector_6" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_766">
                          <rect fill="white" height="14" width="13.73" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black">Joint issues</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-white">
            <PillsHelper1>
              <div className="flex-[1_0_0] h-[13.242px] min-h-px min-w-px relative" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0145 13.2419">
                  <path d={svgPaths.p198d1f0} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </PillsHelper1>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black">Staying active</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-white">
            <PillsHelper1>
              <div className="h-[14px] relative shrink-0 w-[9.054px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.0537 14">
                  <g id="Frame 33">
                    <path d={svgPaths.p1fdc4200} fill="var(--fill-0, black)" id="Vector" />
                    <path d={svgPaths.p1e3fff80} fill="var(--fill-0, black)" id="Vector_2" />
                  </g>
                </svg>
              </div>
            </PillsHelper1>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black">{`Pregnancy & Fertility`}</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-white">
            <PillsHelper1>
              <div className="h-[13px] relative shrink-0 w-[11.89px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.89 13">
                  <g id="Frame 35">
                    <path d={svgPaths.pff29900} fill="var(--fill-0, black)" id="Vector" />
                  </g>
                </svg>
              </div>
            </PillsHelper1>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black">Aging</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-[#eeedff]">
            <Wrapper1>
              <div className="content-stretch flex items-center justify-center px-[2px] relative size-full">
                <div className="h-[14px] relative shrink-0 w-[11.66px]" data-name="Layer_1">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.66 14">
                    <g clipPath="url(#clip0_1_757)" id="Layer_1">
                      <path d={svgPaths.pae07a80} fill="var(--fill-0, #FCEE21)" id="Vector" />
                      <g id="Group">
                        <path d={svgPaths.p1011b000} fill="var(--fill-0, black)" id="Vector_2" />
                        <path d={svgPaths.p8731100} fill="var(--fill-0, black)" id="Vector_3" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_757">
                        <rect fill="white" height="14" width="11.66" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Wrapper1>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#001e91] text-[16px]">Mental Health</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-white">
            <Wrapper1>
              <div className="content-stretch flex items-center justify-center p-px relative size-full">
                <div className="flex-[1_0_0] h-[13.985px] min-h-px min-w-px relative" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.985">
                    <path d={svgPaths.p2f43ca80} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
            </Wrapper1>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black">Medication</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-white">
            <PillsHelper1>
              <div className="h-[14px] relative shrink-0 w-[11.947px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9472 14">
                  <g id="Frame 34">
                    <path d={svgPaths.p3b500b00} fill="var(--fill-0, black)" id="Vector" />
                  </g>
                </svg>
              </div>
            </PillsHelper1>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black">Neurological</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-[#eeedff]">
            <PillsHelper1>
              <div className="h-[14px] relative shrink-0 w-[13.65px]" data-name="Layer_1">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.65 14">
                  <g clipPath="url(#clip0_1_748)" id="Layer_1">
                    <path d={svgPaths.p2bd7b500} fill="var(--fill-0, #B3C6D5)" id="Vector" />
                    <g id="Group">
                      <path d={svgPaths.p2d4bc100} fill="var(--fill-0, black)" id="Vector_2" />
                      <path d={svgPaths.p29dbd700} fill="var(--fill-0, black)" id="Vector_3" />
                    </g>
                    <path d={svgPaths.p38507e80} fill="var(--fill-0, white)" id="Vector_4" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_748">
                      <rect fill="white" height="14" width="13.65" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </PillsHelper1>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#001e91] text-[16px]">{`Diet & Weight`}</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-[#eeedff]">
            <div className="relative shrink-0 size-[16px]" data-name="SmIcon-Gynecology-Color">
              <Wrapper3 additionalClassNames="overflow-clip rounded-[inherit]">
                <div className="h-[9.98px] relative shrink-0 w-[13.97px]" data-name="Layer_1">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.97 9.98">
                    <g clipPath="url(#clip0_1_742)" id="Layer_1">
                      <path d={svgPaths.pf1e0bf0} fill="var(--fill-0, #FAF2E5)" id="Vector" />
                      <path d={svgPaths.p34822b00} fill="var(--fill-0, #FAF2E5)" id="Vector_2" />
                      <path d={svgPaths.p2c794100} fill="var(--fill-0, #FACFE5)" id="Vector_3" />
                      <path d={svgPaths.p34bfda00} fill="var(--fill-0, black)" id="Vector_4" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_742">
                        <rect fill="white" height="9.98" width="13.97" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Wrapper3>
            </div>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#001e91] text-[16px]">{`Women's Health`}</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-white">
            <div className="max-h-[14px] relative shrink-0 w-[16px]" data-name="SmIcon-EyeCare">
              <div className="flex flex-row items-center justify-center max-h-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-center max-h-[inherit] py-[3px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip relative" data-name="Eye Streamline Bootstrap">
                    <div className="h-[10px] relative shrink-0 w-[14px]" data-name="Layer_1">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
                        <g clipPath="url(#clip0_1_790)" id="Layer_1">
                          <path d={svgPaths.pfbe9cc0} fill="var(--fill-0, black)" id="Vector" />
                          <path d={svgPaths.p1664da00} fill="var(--fill-0, black)" id="Vector_2" />
                          <path d={svgPaths.p32b55000} fill="var(--fill-0, black)" id="Vector_3" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_790">
                            <rect fill="white" height="10" width="14" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black">Eye care</p>
          </PillsHelper>
          <PillsHelper additionalClassNames="bg-white">
            <div className="relative shrink-0 size-[16px]" data-name="SmIcon-TobaccoCessation">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="h-[10.96px] relative shrink-0 w-[14px]" data-name="Layer_1">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10.96">
                      <g clipPath="url(#clip0_1_774)" id="Layer_1">
                        <path d={svgPaths.p2344ae80} fill="var(--fill-0, black)" id="Vector" />
                        <path d={svgPaths.p1efba400} fill="var(--fill-0, black)" id="Vector_2" />
                        <path d={svgPaths.p2335f880} fill="var(--fill-0, black)" id="Vector_3" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_774">
                          <rect fill="white" height="10.96" width="14" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-black">Quitting tobacco</p>
          </PillsHelper>
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-end justify-between min-h-px min-w-px py-[2px] relative w-full" data-name="Next Step">
          <div className="bg-white relative rounded-[10px] shrink-0 w-[155px]" data-name="Prev step button">
            <Wrapper2>
              <Wrapper>
                <path d={svgPaths.p3b463e00} fill="var(--stroke-0, #1B0FFF)" id="Arrow 1" />
              </Wrapper>
              <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1b0fff] text-[16px]">Previous</p>
            </Wrapper2>
            <div aria-hidden="true" className="absolute border border-[#1b0fff] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <div className="bg-[#1b0fff] relative rounded-[10px] shrink-0 w-[155px]" data-name="Next step button">
            <Wrapper2>
              <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white">Next step</p>
              <Wrapper>
                <path d={svgPaths.p39ccd2b2} fill="var(--stroke-0, white)" id="Arrow 1" />
              </Wrapper>
            </Wrapper2>
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