import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-gjon98q4g0";
import ProgressBar from "../components/ProgressBar";

type GoalState = {
  id: string;
  selected: boolean;
};

type GoalCardProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  width?: string;
};

function GoalCard({ label, selected, onClick, icon, width = "w-[100px]" }: GoalCardProps) {
  return (
    <button
      onClick={onClick}
      className={`min-w-[100px] relative shrink-0 ${width} cursor-pointer hover:opacity-80 active:scale-95 transition-transform`}
    >
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative w-full">
          <div className={`content-stretch flex flex-col gap-[2px] items-center py-[8px] relative shrink-0 w-[88px] h-[88px] justify-center ${selected ? "bg-[#e8f5d9] rounded-[5px]" : ""}`}>
            {icon}
            <p className={`leading-[normal] relative shrink-0 text-[#133b34] text-[12px] text-center whitespace-pre-wrap w-[88px] font-[Sofia_Pro,sans-serif] ${selected ? "font-semibold" : "font-normal"}`}>
              {label}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function HealthGoalsScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedInterests = (searchParams.get("interests") || "").split(",").filter(Boolean);

  const [goals, setGoals] = useState<GoalState[]>([
    { id: "stop-smoking", selected: false },
    { id: "increase-activity", selected: false },
    { id: "diet-program", selected: false },
    { id: "better-sleep", selected: false },
    { id: "meditating", selected: false },
    { id: "nutrition", selected: false },
    { id: "mammogram", selected: false },
    { id: "colonoscopy", selected: false },
    { id: "dental", selected: false },
    { id: "menopause", selected: false },
    { id: "mental-health", selected: false },
    { id: "physical-therapy", selected: false },
  ]);

  const toggleGoal = (id: string) => {
    setGoals((prev) =>
      prev.map((goal) => (goal.id === id ? { ...goal, selected: !goal.selected } : goal))
    );
  };

  const getGoalState = (id: string) => goals.find((g) => g.id === id)?.selected || false;

  // Map interests to relevant goal sections
  const showGetHealthier = selectedInterests.some(i =>
    ["staying-active", "diet-weight", "mental-health", "heart-health", "quitting-tobacco"].includes(i)
  );
  const showScreenings = selectedInterests.some(i =>
    ["womens-health", "dental-care", "aging", "heart-health"].includes(i)
  );
  const showConditions = selectedInterests.some(i =>
    ["womens-health", "mental-health", "joint-issues", "neurological", "medication"].includes(i)
  );
  // If no interests selected, show everything
  const showAll = selectedInterests.length === 0;

  const handlePrevious = () => {
    navigate("/onboarding/holly/interests");
  };

  const handleNextStep = () => {
    // Navigate to set up care screen
    navigate("/onboarding/holly/set-up-care");
  };

  return (
    <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="bg-[#eae8e3] relative size-full" data-name="Screen 4 - Health Goals">
      <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[720px] items-start left-[7px] overflow-clip px-[16px] py-[12px] rounded-[10px] shadow-[0px_0px_15px_0px_rgba(19,59,52,0.12)] top-[59px] w-[371px]" data-name="Contents">
        <div className="relative shrink-0 w-full" data-name="Header">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between relative w-full">
              <div className="h-[33px] relative shrink-0 w-[120px] cursor-pointer" data-name="myplan_logo" onClick={() => navigate("/")}>
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="myplan">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 33">
                        <g clipPath="url(#clip0_1_477)" id="myplan">
                          <path d={svgPaths.p34a6dd00} fill="var(--fill-0, #133b34)" id="Vector" />
                          <path d={svgPaths.p2fb35d20} fill="var(--fill-0, #133b34)" id="Vector_2" />
                          <path d={svgPaths.p17d46b80} fill="var(--fill-0, #133b34)" id="Vector_3" />
                          <path d={svgPaths.p1edf6900} fill="var(--fill-0, #133b34)" id="Vector_4" />
                          <path d={svgPaths.p23214fc0} fill="var(--fill-0, #133b34)" id="Vector_5" />
                          <path d={svgPaths.p3dceb5f0} fill="var(--fill-0, #133b34)" id="Vector_6" />
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
              <p className='font-[Sofia_Pro,sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#133b34] text-[16px] text-right'>
                {"STEP 3 OF 4"}
              </p>
            </div>
          </div>
        </div>
        <ProgressBar currentStep={3} totalSteps={4} />
        <p className='font-[Sofia_Pro,sans-serif] font-normal leading-[normal] relative shrink-0 text-[#133b34] text-[20px] w-[346px] whitespace-pre-wrap'>
          What health goals would you like to accomplish this year?
        </p>
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 overflow-y-auto max-h-[540px]" data-name="Health Goals">
          {(showAll || showGetHealthier) && (
          <div className="relative rounded-[5px] shrink-0 w-[346px]" data-name="Get healthier">
            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
              <div className='flex flex-col font-[Sofia_Pro,sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black text-center w-full'>
                <p className="leading-[normal] whitespace-pre-wrap">{`Get healthier through activities & habits`}</p>
              </div>
              <div className="content-start flex flex-wrap gap-[11px] items-start justify-center max-w-[322px] relative shrink-0 w-full" data-name="Get healthier">
                <GoalCard
                  label="Stop smoking"
                  selected={getGoalState("stop-smoking")}
                  onClick={() => toggleGoal("stop-smoking")}
                  icon={
                    <div className="relative shrink-0 size-[46.87px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
                        <g clipPath={getGoalState("stop-smoking") ? "url(#clip0_smoking_selected)" : "url(#clip0_smoking)"} id="Stop Smoking icon">
                          <path d={getGoalState("stop-smoking") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #eae8e3)" id="Vector" stroke={getGoalState("stop-smoking") ? "var(--stroke-0, #133b34)" : undefined} />
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
                          <clipPath id={getGoalState("stop-smoking") ? "clip0_smoking_selected" : "clip0_smoking"}>
                            <rect fill="white" height="46.87" width="46.87" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  }
                />
                <GoalCard
                  label="Increase my activity level"
                  selected={getGoalState("increase-activity")}
                  onClick={() => toggleGoal("increase-activity")}
                  icon={
                    <div className="relative shrink-0 size-[46.87px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
                        <g clipPath={getGoalState("increase-activity") ? "url(#clip0_activity_selected)" : "url(#clip0_activity)"} id="Increase my activity level icon">
                          <path d={getGoalState("increase-activity") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #D3EDFF)" id="Vector" stroke={getGoalState("increase-activity") ? "var(--stroke-0, #133b34)" : undefined} />
                          <g id="Group">
                            <path d={svgPaths.pbae9c00} fill="var(--fill-0, #FCEE21)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={svgPaths.p3d34e00} fill="var(--fill-0, #FCEE21)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <path d="M14.68 42.44H31.46" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                          <clipPath id={getGoalState("increase-activity") ? "clip0_activity_selected" : "clip0_activity"}>
                            <rect fill="white" height="46.87" width="46.87" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  }
                />
                <GoalCard
                  label="Start a diet program"
                  selected={getGoalState("diet-program")}
                  onClick={() => toggleGoal("diet-program")}
                  icon={
                    <div className="relative shrink-0 size-[46.87px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
                        <g clipPath={getGoalState("diet-program") ? "url(#clip0_diet_selected)" : "url(#clip0_diet)"} id="Start a diet program icon">
                          <path d={getGoalState("diet-program") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #DEF7EE)" id="Vector" stroke={getGoalState("diet-program") ? "var(--stroke-0, #133b34)" : undefined} />
                          <path d={svgPaths.p29149700} fill="var(--fill-0, #eae8e3)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
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
                          <clipPath id={getGoalState("diet-program") ? "clip0_diet_selected" : "clip0_diet"}>
                            <rect fill="white" height="46.87" width="46.87" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  }
                />
                <GoalCard
                  label="Get better sleep"
                  selected={getGoalState("better-sleep")}
                  onClick={() => toggleGoal("better-sleep")}
                  icon={
                    <div className="relative shrink-0 size-[46.87px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
                        <g clipPath={getGoalState("better-sleep") ? "url(#clip0_sleep_selected)" : "url(#clip0_sleep)"} id="Sleep icon">
                          <path d={getGoalState("better-sleep") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #DBE1F1)" id="Vector" stroke={getGoalState("better-sleep") ? "var(--stroke-0, #133b34)" : undefined} />
                          <path d={svgPaths.p133f6f80} fill="var(--fill-0, #FCEE21)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d={svgPaths.p26bf1b80} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d={svgPaths.p4bf19c0} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d={svgPaths.p2c283580} id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d={svgPaths.p2b68d480} fill="var(--fill-0, #3FA9F5)" id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M29.67 28.94V34.86" id="Vector_7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                          <clipPath id={getGoalState("better-sleep") ? "clip0_sleep_selected" : "clip0_sleep"}>
                            <rect fill="white" height="46.87" width="46.87" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  }
                />
                <GoalCard
                  label="Start meditating"
                  selected={getGoalState("meditating")}
                  onClick={() => toggleGoal("meditating")}
                  icon={
                    <div className="relative shrink-0 size-[46.87px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
                        <g clipPath={getGoalState("meditating") ? "url(#clip0_meditation_selected)" : "url(#clip0_meditation)"} id="Meditation icon">
                          <path d={getGoalState("meditating") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #F9EAF4)" id="Vector" stroke={getGoalState("meditating") ? "var(--stroke-0, #133b34)" : undefined} />
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
                          <clipPath id={getGoalState("meditating") ? "clip0_meditation_selected" : "clip0_meditation"}>
                            <rect fill="white" height="46.87" width="46.87" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  }
                />
                <GoalCard
                  label="Improve my nutrition"
                  selected={getGoalState("nutrition")}
                  onClick={() => toggleGoal("nutrition")}
                  icon={
                    <div className="overflow-clip relative shrink-0 size-[46.87px]" data-name="Nutrition icon">
                      <div className="absolute inset-[0_0.02%_0.02%_0]" data-name="Nutrition">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.86 46.86">
                          <g id="Nutrition">
                            <path d={getGoalState("nutrition") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #FFF0E6)" id="Vector" stroke={getGoalState("nutrition") ? "var(--stroke-0, #133b34)" : undefined} />
                            <path d={svgPaths.p228ce80} fill="var(--fill-0, #ED1C24)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={svgPaths.pd839500} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={svgPaths.p22daf300} fill="var(--fill-0, #39B54A)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#eae8e3] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
          </div>
          )}
          {(showAll || showScreenings) && (
          <div className="content-stretch flex flex-col gap-[13px] items-center p-[12px] relative rounded-[5px] shrink-0 w-[346px]" data-name="Screenings">
            <div aria-hidden="true" className="absolute border border-[#eae8e3] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
            <div className='flex flex-col font-[Sofia_Pro,sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-black text-center w-[min-content]'>
              <p className="leading-[normal] whitespace-pre-wrap">{`Important screenings & health checks`}</p>
            </div>
            <div className="content-start flex flex-wrap gap-[11px] items-start justify-center max-w-[322px] relative shrink-0 w-[322px]" data-name="Screenings">
              <GoalCard
                label="Get a mammogram"
                selected={getGoalState("mammogram")}
                onClick={() => toggleGoal("mammogram")}
                icon={
                  <div className="relative shrink-0 size-[46.87px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
                      <g clipPath={getGoalState("mammogram") ? "url(#clip0_mammogram_selected)" : "url(#clip0_mammogram)"} id="Breast Cancer Icon">
                        <path d={getGoalState("mammogram") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #FFEAFF)" id="Vector" stroke={getGoalState("mammogram") ? "var(--stroke-0, #133b34)" : undefined} />
                        <g id="Group">
                          <path d={svgPaths.p33e13480} fill="var(--fill-0, #FF7BAC)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                          <g id="Group_2">
                            <path d={svgPaths.p14abcd80} fill="var(--fill-0, #FF7BAC)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                            <path d={svgPaths.p1da06380} fill="var(--fill-0, #FF7BAC)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id={getGoalState("mammogram") ? "clip0_mammogram_selected" : "clip0_mammogram"}>
                          <rect fill="white" height="46.87" width="46.87" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                }
              />
              <GoalCard
                label="Get a colonoscopy"
                selected={getGoalState("colonoscopy")}
                onClick={() => toggleGoal("colonoscopy")}
                icon={
                  <div className="relative shrink-0 size-[46.87px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
                      <g clipPath={getGoalState("colonoscopy") ? "url(#clip0_colonoscopy_selected)" : "url(#clip0_colonoscopy)"} id="Colonoscopy icon">
                        <path d={getGoalState("colonoscopy") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #DDF2FF)" id="Vector" stroke={getGoalState("colonoscopy") ? "var(--stroke-0, #133b34)" : undefined} />
                        <g id="Vector_2">
                          <path d={svgPaths.p2fa87b40} fill="var(--fill-0, #FFE7F1)" />
                          <path d={svgPaths.p2fa87b40} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id={getGoalState("colonoscopy") ? "clip0_colonoscopy_selected" : "clip0_colonoscopy"}>
                          <rect fill="white" height="46.87" width="46.87" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                }
              />
              <GoalCard
                label="Get a dental cleaning"
                selected={getGoalState("dental")}
                onClick={() => toggleGoal("dental")}
                width="w-[85px]"
                icon={
                  <div className="relative shrink-0 size-[46.87px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
                      <g clipPath={getGoalState("dental") ? "url(#clip0_dental_selected)" : "url(#clip0_dental)"} id="Layer_1">
                        <path d={getGoalState("dental") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #DBE5FF)" id="Vector" stroke={getGoalState("dental") ? "var(--stroke-0, #133b34)" : undefined} />
                        <g id="Group">
                          <path d={svgPaths.p15189280} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d={svgPaths.p37b89f00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id={getGoalState("dental") ? "clip0_dental_selected" : "clip0_dental"}>
                          <rect fill="white" height="46.87" width="46.87" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                }
              />
            </div>
          </div>
          )}
          {(showAll || showConditions) && (
          <div className="content-stretch flex flex-col gap-[13px] items-center p-[12px] relative rounded-[5px] shrink-0 w-[346px]" data-name="Conditions">
            <div aria-hidden="true" className="absolute border border-[#eae8e3] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)]" />
            <div className='flex flex-col font-[Sofia_Pro,sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-black text-center w-[min-content]'>
              <p className="leading-[normal] whitespace-pre-wrap">Treat specific conditions</p>
            </div>
            <div className="content-start flex flex-wrap gap-[11px] items-start justify-center max-w-[322px] relative shrink-0 w-[322px]" data-name="Conditions">
              <GoalCard
                label="Menopause support"
                selected={getGoalState("menopause")}
                onClick={() => toggleGoal("menopause")}
                icon={
                  <div className="relative shrink-0 size-[46.87px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
                      <g clipPath={getGoalState("menopause") ? "url(#clip0_menopause_selected)" : "url(#clip0_menopause)"} id="Menopause icon">
                        <path d={getGoalState("menopause") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #F4E6F8)" id="Vector" stroke={getGoalState("menopause") ? "var(--stroke-0, #133b34)" : undefined} />
                        <path d={svgPaths.p25bfd600} fill="var(--fill-0, #FFE7F1)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="Group">
                          <path d={svgPaths.p3638ef00} fill="var(--fill-0, #DBAAC0)" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d={svgPaths.pef43680} fill="var(--fill-0, #DBAAC0)" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </g>
                      <defs>
                        <clipPath id={getGoalState("menopause") ? "clip0_menopause_selected" : "clip0_menopause"}>
                          <rect fill="white" height="46.87" width="46.87" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                }
              />
              <GoalCard
                label="Find mental health help"
                selected={getGoalState("mental-health")}
                onClick={() => toggleGoal("mental-health")}
                icon={
                  <div className="relative shrink-0 size-[46.87px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
                      <g clipPath={getGoalState("mental-health") ? "url(#clip0_mentalhealth_selected)" : "url(#clip0_mentalhealth)"} id="Mental health">
                        <path d={getGoalState("mental-health") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #DFF8D6)" id="Vector" stroke={getGoalState("mental-health") ? "var(--stroke-0, #133b34)" : undefined} />
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
                        <clipPath id={getGoalState("mental-health") ? "clip0_mentalhealth_selected" : "clip0_mentalhealth"}>
                          <rect fill="white" height="46.87" width="46.87" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                }
              />
              <GoalCard
                label="Find physical therapy"
                selected={getGoalState("physical-therapy")}
                onClick={() => toggleGoal("physical-therapy")}
                icon={
                  <div className="relative shrink-0 size-[46.87px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.87 46.87">
                      <g clipPath={getGoalState("physical-therapy") ? "url(#clip0_physical_selected)" : "url(#clip0_physical)"} id="Physical Therapy icon">
                        <path d={getGoalState("physical-therapy") ? svgPaths.p3f2c5700 : svgPaths.p361f3000} fill="var(--fill-0, #D6FAFF)" id="Vector" stroke={getGoalState("physical-therapy") ? "var(--stroke-0, #133b34)" : undefined} />
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
                        <clipPath id={getGoalState("physical-therapy") ? "clip0_physical_selected" : "clip0_physical"}>
                          <rect fill="white" height="46.87" width="46.87" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                }
              />
            </div>
          </div>
          )}
          {!showAll && !showGetHealthier && !showScreenings && !showConditions && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="font-[Sofia_Pro,sans-serif] font-normal text-[#133b34] text-[16px]">
                Select some interests in the previous step to see personalized health goals.
              </p>
            </div>
          )}
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-end justify-between min-h-px min-w-px py-[2px] relative w-full" data-name="Next Step">
          <button
            onClick={handlePrevious}
            className="bg-white relative rounded-[10px] shrink-0 w-[155px] hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
            data-name="Prev step button"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[28px] py-[12px] relative w-full">
                <div className="h-0 relative shrink-0 w-[15px]">
                  <div className="absolute inset-[-7.36px_-6.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14.7279">
                      <path d={svgPaths.p3b463e00} fill="var(--stroke-0, #133b34)" id="Arrow 1" />
                    </svg>
                  </div>
                </div>
                <p className='font-[Sofia_Pro,sans-serif] font-medium leading-[20px] relative shrink-0 text-[#133b34] text-[16px]'>
                  Previous
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#133b34] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </button>
          <button
            onClick={handleNextStep}
            className="bg-[#133b34] relative rounded-[10px] shrink-0 w-[155px] hover:bg-[#0d2b25] active:bg-[#082019] transition-colors cursor-pointer"
            data-name="Next step button"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[28px] py-[12px] relative w-full">
                <p className='font-[Sofia_Pro,sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white'>
                  Next step
                </p>
                <div className="h-0 relative shrink-0 w-[15px]">
                  <div className="absolute inset-[-7.36px_-6.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14.7279">
                      <path d={svgPaths.p39ccd2b2} fill="var(--stroke-0, white)" id="Arrow 1" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}