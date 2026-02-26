import svgPaths from "./svg-gjon98q4g0";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative">{children}</div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[46.87px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
      <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[28px] py-[12px] relative w-full">{children}</div>
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
type GoalPhysicalTherapyProps = {
  className?: string;
  property1?: "Find physical therapy" | "Find physical therapy - Selected";
};

function GoalPhysicalTherapy({ className, property1 = "Find physical therapy" }: GoalPhysicalTherapyProps) {
  const isFindPhysicalTherapy = property1 === "Find physical therapy";
  return (
    <div className={className || "min-w-[100px] relative w-[100px]"}>
      <Wrapper2>
        <div className={`content-stretch flex flex-col gap-[2px] items-center overflow-clip py-[4px] relative shrink-0 w-[88px] ${isFindPhysicalTherapy ? "" : "bg-[#f4f3fc] rounded-[5px]"}`}>
          <Wrapper3>
            <g clipPath={isFindPhysicalTherapy ? "url(#clip0_1_1443)" : "url(#clip0_1_1329)"} id="Physical Therapy icon">
              <path d={isFindPhysicalTherapy ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #D6FAFF)" id="Vector" stroke={property1 === "Find physical therapy - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
              <path d={svgPaths.p234e4b00} fill="var(--fill-0, #FCEE21)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <g id="Vector_3">
                <path d={svgPaths.p123bc680} fill="var(--fill-0, #FCEE21)" />
                <path d={svgPaths.p123bc680} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <path d={svgPaths.pf367100} fill="var(--fill-0, #FCEE21)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <g id="Vector_5">
                <path d={svgPaths.p1ac4fcc0} fill="var(--fill-0, #FCEE21)" />
                <path d={svgPaths.p1ac4fcc0} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <path d={svgPaths.p2a218400} fill="var(--fill-0, #FCEE21)" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id={isFindPhysicalTherapy ? "clip0_1_1443" : "clip0_1_1329"}>
                <rect fill="white" height="46.87" width="46.87" />
              </clipPath>
            </defs>
          </Wrapper3>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[100px] whitespace-pre-wrap ${isFindPhysicalTherapy ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Find physical therapy</p>
        </div>
      </Wrapper2>
    </div>
  );
}
type GoalMentalHealthProps = {
  className?: string;
  property1?: "Find Mental Health support" | "Find mental Health Support  - Selected";
};

function GoalMentalHealth({ className, property1 = "Find Mental Health support" }: GoalMentalHealthProps) {
  const isFindMentalHealthSupport = property1 === "Find Mental Health support";
  return (
    <div className={className || "min-w-[100px] relative w-[100px]"}>
      <Wrapper2>
        <div className={`content-stretch flex flex-col gap-[2px] items-center py-[4px] relative shrink-0 w-[88px] ${isFindMentalHealthSupport ? "" : "bg-[#f4f3fc] rounded-[5px]"}`}>
          <Wrapper3>
            <g clipPath={isFindMentalHealthSupport ? "url(#clip0_1_1277)" : "url(#clip0_1_1434)"} id="Mental health">
              <path d={isFindMentalHealthSupport ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #DFF8D6)" id="Vector" stroke={property1 === "Find mental Health Support  - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
              <g id="Vector_2">
                <path d={svgPaths.p3cb09300} fill="var(--fill-0, #FCEE21)" />
                <path d={svgPaths.p3cb09300} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <g id="Group">
                <path d={svgPaths.p351b4eb0} fill="var(--fill-0, #FF7BAC)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.43 18.67V26.33" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p2d7ad900} fill="var(--fill-0, #8CC63F)" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p3287ca80} fill="var(--fill-0, #8CC63F)" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            <defs>
              <clipPath id={isFindMentalHealthSupport ? "clip0_1_1277" : "clip0_1_1434"}>
                <rect fill="white" height="46.87" width="46.87" />
              </clipPath>
            </defs>
          </Wrapper3>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[100px] whitespace-pre-wrap ${isFindMentalHealthSupport ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Find mental health help</p>
        </div>
      </Wrapper2>
    </div>
  );
}
type GoalMenopauseProps = {
  className?: string;
  property1?: "Menopause support" | "Menopause support - Selected";
};

function GoalMenopause({ className, property1 = "Menopause support" }: GoalMenopauseProps) {
  const isMenopauseSupport = property1 === "Menopause support";
  return (
    <div className={className || "min-w-[100px] relative w-[100px]"}>
      <Wrapper2>
        <div className={`content-stretch flex flex-col gap-[2px] items-center py-[4px] relative shrink-0 w-[88px] ${isMenopauseSupport ? "" : "bg-[#f4f3fc] rounded-[5px]"}`}>
          <Wrapper3>
            <g clipPath={isMenopauseSupport ? "url(#clip0_1_1270)" : "url(#clip0_1_1413)"} id="Menopause icon">
              <path d={isMenopauseSupport ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #F4E6F8)" id="Vector" stroke={property1 === "Menopause support - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
              <path d={svgPaths.p25bfd600} fill="var(--fill-0, #FFE7F1)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <g id="Group">
                <path d={svgPaths.p3638ef00} fill="var(--fill-0, #DBAAC0)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.pef43680} fill="var(--fill-0, #DBAAC0)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            <defs>
              <clipPath id={isMenopauseSupport ? "clip0_1_1270" : "clip0_1_1413"}>
                <rect fill="white" height="46.87" width="46.87" />
              </clipPath>
            </defs>
          </Wrapper3>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[100px] whitespace-pre-wrap ${isMenopauseSupport ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Menopause support</p>
        </div>
      </Wrapper2>
    </div>
  );
}
type GoalDentalProps = {
  className?: string;
  property1?: "Dental" | "Dental - Selected";
};

function GoalDental({ className, property1 = "Dental" }: GoalDentalProps) {
  const isDental = property1 === "Dental";
  return (
    <div className={className || "min-w-[100px] relative w-[100px]"}>
      <Wrapper2>
        <div className={`content-stretch flex flex-col gap-[2px] items-center py-[4px] relative shrink-0 w-[88px] ${isDental ? "" : "bg-[#f4f3fc] rounded-[5px]"}`}>
          <Wrapper3>
            <g clipPath={isDental ? "url(#clip0_1_1286)" : "url(#clip0_1_1403)"} id="Layer_1">
              <path d={isDental ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #DBE5FF)" id="Vector" stroke={property1 === "Dental - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
              <g id="Group">
                <path d={svgPaths.p15189280} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p37b89f00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            <defs>
              <clipPath id={isDental ? "clip0_1_1286" : "clip0_1_1403"}>
                <rect fill="white" height="46.87" width="46.87" />
              </clipPath>
            </defs>
          </Wrapper3>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[85px] whitespace-pre-wrap ${isDental ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Get a dental cleaning</p>
        </div>
      </Wrapper2>
    </div>
  );
}
type GoalColonscopyProps = {
  className?: string;
  property1?: "Get a colonoscopy" | "Get a colonoscopy - Selected";
};

function GoalColonscopy({ className, property1 = "Get a colonoscopy" }: GoalColonscopyProps) {
  const isGetAColonoscopy = property1 === "Get a colonoscopy";
  return (
    <div className={className || "min-w-[100px] relative w-[100px]"}>
      <Wrapper2>
        <div className={`content-stretch flex flex-col gap-[2px] items-center py-[4px] relative shrink-0 w-[88px] ${isGetAColonoscopy ? "" : "bg-[#f4f3fc] rounded-[5px]"}`}>
          <Wrapper3>
            <g clipPath={isGetAColonoscopy ? "url(#clip0_1_1409)" : "url(#clip0_1_1314)"} id="Colonoscopy icon">
              <path d={isGetAColonoscopy ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #DDF2FF)" id="Vector" stroke={property1 === "Get a colonoscopy - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
              <g id="Vector_2">
                <path d={svgPaths.p2fa87b40} fill="var(--fill-0, #FFE7F1)" />
                <path d={svgPaths.p2fa87b40} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
            <defs>
              <clipPath id={isGetAColonoscopy ? "clip0_1_1409" : "clip0_1_1314"}>
                <rect fill="white" height="46.87" width="46.87" />
              </clipPath>
            </defs>
          </Wrapper3>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[100px] whitespace-pre-wrap ${isGetAColonoscopy ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Get a colonoscopy</p>
        </div>
      </Wrapper2>
    </div>
  );
}
type GoalMammogramProps = {
  className?: string;
  property1?: "Mammogram" | "Mammogram - Selected";
};

function GoalMammogram({ className, property1 = "Mammogram" }: GoalMammogramProps) {
  const isMammogram = property1 === "Mammogram";
  return (
    <div className={className || "min-w-[100px] relative w-[100px]"}>
      <Wrapper2>
        <div className={`content-stretch flex flex-col gap-[2px] items-center py-[4px] relative shrink-0 w-[88px] ${isMammogram ? "" : "bg-[#f4f3fc] rounded-[5px]"}`}>
          <Wrapper3>
            <g clipPath={isMammogram ? "url(#clip0_1_1292)" : "url(#clip0_1_1426)"} id="Breast Cancer Icon">
              <path d={isMammogram ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #FFEAFF)" id="Vector" stroke={property1 === "Mammogram - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
              <g id="Group">
                <path d={svgPaths.p33e13480} fill="var(--fill-0, #FF7BAC)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="Group_2">
                  <path d={svgPaths.p14abcd80} fill="var(--fill-0, #FF7BAC)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p1da06380} fill="var(--fill-0, #FF7BAC)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            </g>
            <defs>
              <clipPath id={isMammogram ? "clip0_1_1292" : "clip0_1_1426"}>
                <rect fill="white" height="46.87" width="46.87" />
              </clipPath>
            </defs>
          </Wrapper3>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[80px] whitespace-pre-wrap ${isMammogram ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Get a mammogram</p>
        </div>
      </Wrapper2>
    </div>
  );
}
type GoalNutritionProps = {
  className?: string;
  property1?: "Improve my nutrition" | "Improve my nutrition - Selected";
};

function GoalNutrition({ className, property1 = "Improve my nutrition" }: GoalNutritionProps) {
  const isImproveMyNutrition = property1 === "Improve my nutrition";
  return (
    <div className={className || "min-w-[100px] relative"}>
      <Wrapper4>
        <div className={`content-stretch flex flex-col gap-[2px] items-center py-[4px] relative shrink-0 w-[88px] ${isImproveMyNutrition ? "" : "bg-[#f4f3fc] rounded-[5px]"}`}>
          <div className="overflow-clip relative shrink-0 size-[46.87px]" data-name="Nutrition icon">
            <div className="absolute inset-[0_0.02%_0.02%_0]" data-name="Nutrition">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.86 46.86">
                <g id="Nutrition">
                  <path d={isImproveMyNutrition ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #FFF0E6)" id="Vector" stroke={property1 === "Improve my nutrition - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
                  <path d={svgPaths.p228ce80} fill="var(--fill-0, #ED1C24)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.pd839500} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p22daf300} fill="var(--fill-0, #39B54A)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </div>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[70px] whitespace-pre-wrap ${isImproveMyNutrition ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Improve my nutrition</p>
        </div>
      </Wrapper4>
    </div>
  );
}
type GoalMeditatingProps = {
  className?: string;
  property1?: "Start meditating" | "Start meditating - Selected";
};

function GoalMeditating({ className, property1 = "Start meditating" }: GoalMeditatingProps) {
  const isStartMeditating = property1 === "Start meditating";
  return (
    <div className={className || "min-w-[100px] relative"}>
      <Wrapper4>
        <div className={`content-stretch flex flex-col gap-[2px] items-center py-[4px] relative shrink-0 w-[88px] ${isStartMeditating ? "" : "bg-[#f4f3fc] rounded-[5px]"}`}>
          <Wrapper3>
            <g clipPath={isStartMeditating ? "url(#clip0_1_1395)" : "url(#clip0_1_1300)"} id="Meditation icon">
              <path d={isStartMeditating ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #F9EAF4)" id="Vector" stroke={property1 === "Start meditating - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
              <path d={svgPaths.p1d441e00} fill="var(--fill-0, #FCEE21)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <g id="Vector_3">
                <path d={svgPaths.p39ec6000} fill="var(--fill-0, #FCEE21)" />
                <path d={svgPaths.p39ec6000} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <g id="Vector_4">
                <path d={svgPaths.p100c3d00} fill="var(--fill-0, #FCEE21)" />
                <path d={svgPaths.p100c3d00} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <path d={svgPaths.p2b8d9f00} fill="var(--fill-0, #FCEE21)" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p109c51c0} fill="var(--fill-0, #FCEE21)" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id={isStartMeditating ? "clip0_1_1395" : "clip0_1_1300"}>
                <rect fill="white" height="46.87" width="46.87" />
              </clipPath>
            </defs>
          </Wrapper3>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[68px] whitespace-pre-wrap ${isStartMeditating ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Start meditating</p>
        </div>
      </Wrapper4>
    </div>
  );
}
type GoalBetterSleepProps = {
  className?: string;
  property1?: "Get better sleep" | "Get better sleep - Selected";
};

function GoalBetterSleep({ className, property1 = "Get better sleep" }: GoalBetterSleepProps) {
  const isGetBetterSleep = property1 === "Get better sleep";
  return (
    <div className={className || "min-w-[100px] relative w-[100px]"}>
      <Wrapper2>
        <div className={`content-stretch flex flex-col gap-[2px] items-center py-[4px] relative shrink-0 w-[88px] ${isGetBetterSleep ? "" : "bg-[#f4f3fc] rounded-[5px]"}`}>
          <Wrapper3>
            <g clipPath={isGetBetterSleep ? "url(#clip0_1_1379)" : "url(#clip0_1_1261)"} id="Sleep icon">
              <path d={isGetBetterSleep ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #DBE1F1)" id="Vector" stroke={property1 === "Get better sleep - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
              <path d={svgPaths.p133f6f80} fill="var(--fill-0, #FCEE21)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p26bf1b80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p4bf19c0} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p2c283580} id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p2b68d480} fill="var(--fill-0, #3FA9F5)" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M29.67 28.94V34.86" id="Vector_7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id={isGetBetterSleep ? "clip0_1_1379" : "clip0_1_1261"}>
                <rect fill="white" height="46.87" width="46.87" />
              </clipPath>
            </defs>
          </Wrapper3>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[68px] whitespace-pre-wrap ${isGetBetterSleep ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Get better sleep</p>
        </div>
      </Wrapper2>
    </div>
  );
}
type GoalDietProgramProps = {
  className?: string;
  property1?: "Start a diet program" | "Start a diet program - Selected";
};

function GoalDietProgram({ className, property1 = "Start a diet program" }: GoalDietProgramProps) {
  const isStartADietProgram = property1 === "Start a diet program";
  return (
    <div className={className || "min-w-[100px] relative w-[100px]"}>
      <Wrapper2>
        <div className={`content-stretch flex flex-col gap-[2px] items-center py-[4px] relative shrink-0 w-[88px] ${isStartADietProgram ? "" : "bg-[#f4f3fc] rounded-[5px]"}`}>
          <Wrapper3>
            <g clipPath={isStartADietProgram ? "url(#clip0_1_1318)" : "url(#clip0_1_1368)"} id="Start a diet program icon">
              <path d={isStartADietProgram ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #DEF7EE)" id="Vector" stroke={property1 === "Start a diet program - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
              <path d={svgPaths.p29149700} fill="var(--fill-0, #EEEDFF)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p2a2430f0} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <g id="Group">
                <path d="M23.43 11.63V12.21" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.74 12.48L18.93 13.03" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.13 12.48L27.93 13.03" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <path d="M23.36 17.22L25.25 13.35" id="Vector_7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.68 34.28H29.19" id="Vector_8" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id={isStartADietProgram ? "clip0_1_1318" : "clip0_1_1368"}>
                <rect fill="white" height="46.87" width="46.87" />
              </clipPath>
            </defs>
          </Wrapper3>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[68px] whitespace-pre-wrap ${isStartADietProgram ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Start a diet program</p>
        </div>
      </Wrapper2>
    </div>
  );
}
type GoalActivityLevelProps = {
  className?: string;
  property1?: "Increase my activity level" | "Increase my activity level - Selected";
};

function GoalActivityLevel({ className, property1 = "Increase my activity level" }: GoalActivityLevelProps) {
  const isIncreaseMyActivityLevel = property1 === "Increase my activity level";
  return (
    <div className={className || "min-w-[100px] relative w-[100px]"}>
      <Wrapper2>
        <div className={`content-stretch flex flex-col gap-[2px] items-center py-[4px] relative shrink-0 w-[88px] ${isIncreaseMyActivityLevel ? "" : "bg-[#f4f3fc] rounded-[5px]"}`} data-name="Increase my activity level">
          <Wrapper3>
            <g clipPath={isIncreaseMyActivityLevel ? "url(#clip0_1_1388)" : "url(#clip0_1_1337)"} id="Increase my activity level icon">
              <path d={isIncreaseMyActivityLevel ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #D3EDFF)" id="Vector" stroke={property1 === "Increase my activity level - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
              <g id="Group">
                <path d={svgPaths.pbae9c00} fill="var(--fill-0, #FCEE21)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p3d34e00} fill="var(--fill-0, #FCEE21)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <path d="M14.68 42.44H31.46" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id={isIncreaseMyActivityLevel ? "clip0_1_1388" : "clip0_1_1337"}>
                <rect fill="white" height="46.87" width="46.87" />
              </clipPath>
            </defs>
          </Wrapper3>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[88px] whitespace-pre-wrap ${isIncreaseMyActivityLevel ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Increase my activity level</p>
        </div>
      </Wrapper2>
    </div>
  );
}
type GoalStopSmokingProps = {
  className?: string;
  property1?: "Stop Smoking" | "Stop Smoking - Selected";
};

function GoalStopSmoking({ className, property1 = "Stop Smoking" }: GoalStopSmokingProps) {
  const isStopSmoking = property1 === "Stop Smoking";
  return (
    <div className={className || "min-w-[100px] relative w-[100px]"}>
      <Wrapper2>
        <div className={`content-stretch flex flex-col gap-[2px] items-center justify-center py-[4px] relative rounded-[5px] shrink-0 w-[88px] ${isStopSmoking ? "" : "bg-[#f4f3fc]"}`} data-name="Stop smoking selected">
          <Wrapper3>
            <g clipPath={isStopSmoking ? "url(#clip0_1_1344)" : "url(#clip0_1_1356)"} id="Stop Smoking icon">
              <path d={isStopSmoking ? svgPaths.p361f3000 : svgPaths.p3f2c5700} fill="var(--fill-0, #EEEDFF)" id="Vector" stroke={property1 === "Stop Smoking - Selected" ? "var(--stroke-0, #001E91)" : undefined} />
              <g id="Group">
                <path d={svgPaths.p3ca2ed00} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p231cf980} fill="var(--fill-0, #FBB03B)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <g id="Group_2">
                <path d={svgPaths.p31316a00} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p3cc34e00} fill="var(--fill-0, #ED1C24)" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <path d="M22.26 4.22L22.73 8.99" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.65 7.5L19.45 10.49" id="Vector_7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.22 9.52L27.87 5.98" id="Vector_8" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id={isStopSmoking ? "clip0_1_1344" : "clip0_1_1356"}>
                <rect fill="white" height="46.87" width="46.87" />
              </clipPath>
            </defs>
          </Wrapper3>
          <p className={`leading-[normal] relative shrink-0 text-[#001e91] text-[12px] text-center w-[68px] whitespace-pre-wrap ${isStopSmoking ? 'font-["Work_Sans:Regular",sans-serif] font-normal' : 'font-["Work_Sans:SemiBold",sans-serif] font-semibold'}`}>Stop smoking</p>
        </div>
      </Wrapper2>
    </div>
  );
}

export default function Screen4HealthGoals() {
  return (
    <div className="bg-[#eeedff] relative size-full" data-name="Screen 4 - Health Goals">
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
              <p className="font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1b0fff] text-[16px] text-right">{"STEP 3 OF 4"}</p>
            </div>
          </div>
        </div>
        <p className="font-['Work_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#001e91] text-[20px] w-[346px] whitespace-pre-wrap">What health goals would you like to accomplish this year?</p>
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Health Goals">
          <div className="relative rounded-[5px] shrink-0 w-[346px]" data-name="Get healthier">
            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
              <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center w-full">
                <p className="leading-[normal] whitespace-pre-wrap">{`Get healthier through activities & habits`}</p>
              </div>
              <div className="content-start flex flex-wrap gap-[11px] items-start justify-center max-w-[322px] relative shrink-0 w-full" data-name="Get healthier">
                <GoalStopSmoking className="min-w-[100px] relative shrink-0 w-[100px]" />
                <GoalActivityLevel className="min-w-[100px] relative shrink-0 w-[100px]" property1="Increase my activity level - Selected" />
                <GoalDietProgram className="min-w-[100px] relative shrink-0 w-[100px]" />
                <GoalBetterSleep className="min-w-[100px] relative shrink-0 w-[100px]" property1="Get better sleep - Selected" />
                <GoalMeditating className="min-w-[100px] relative shrink-0" property1="Start meditating - Selected" />
                <GoalNutrition className="min-w-[100px] relative shrink-0" />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
          </div>
          <div className="content-stretch flex flex-col gap-[13px] items-center p-[12px] relative rounded-[5px] shrink-0 w-[346px]" data-name="Screenings">
            <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
            <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-black text-center w-[min-content]">
              <p className="leading-[normal] whitespace-pre-wrap">{`Important screenings & health checks`}</p>
            </div>
            <div className="content-start flex flex-wrap gap-[11px] items-start justify-center max-w-[322px] relative shrink-0 w-[322px]" data-name="Screenings">
              <GoalMammogram className="min-w-[100px] relative shrink-0 w-[100px]" />
              <GoalColonscopy className="min-w-[100px] relative shrink-0 w-[100px]" property1="Get a colonoscopy - Selected" />
              <GoalDental className="min-w-[100px] relative shrink-0 w-[100px]" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[13px] items-center p-[12px] relative rounded-[5px] shrink-0 w-[346px]" data-name="Conditions">
            <div aria-hidden="true" className="absolute border border-[#eeedff] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
            <div className="flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-black text-center w-[min-content]">
              <p className="leading-[normal] whitespace-pre-wrap">Treat specific conditions</p>
            </div>
            <div className="content-start flex flex-wrap gap-[11px] items-start justify-center max-w-[322px] relative shrink-0 w-[322px]" data-name="Conditions">
              <GoalMenopause className="min-w-[100px] relative shrink-0 w-[100px]" />
              <GoalMentalHealth className="min-w-[100px] relative shrink-0 w-[100px]" />
              <GoalPhysicalTherapy className="min-w-[100px] relative shrink-0 w-[100px]" property1="Find physical therapy - Selected" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-end justify-between min-h-px min-w-px py-[2px] relative w-full" data-name="Next Step">
          <div className="bg-white relative rounded-[10px] shrink-0 w-[155px]" data-name="Prev step button">
            <Wrapper1>
              <Wrapper>
                <path d={svgPaths.p3b463e00} fill="var(--stroke-0, #1B0FFF)" id="Arrow 1" />
              </Wrapper>
              <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#1b0fff] text-[16px]">Previous</p>
            </Wrapper1>
            <div aria-hidden="true" className="absolute border border-[#1b0fff] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <div className="bg-[#1b0fff] relative rounded-[10px] shrink-0 w-[155px]" data-name="Next step button">
            <Wrapper1>
              <p className="font-['Work_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white">Next step</p>
              <Wrapper>
                <path d={svgPaths.p39ccd2b2} fill="var(--stroke-0, white)" id="Arrow 1" />
              </Wrapper>
            </Wrapper1>
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