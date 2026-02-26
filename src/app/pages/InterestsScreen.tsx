import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import svgPaths from "../../imports/svg-vboffwl5bq";
import ProgressBar from "../components/ProgressBar";

type InterestPill = {
  id: string;
  label: string;
  icon: React.ReactNode;
  selected: boolean;
};

type PillButtonProps = {
  label: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
};

function PillButton({ label, icon, selected, onClick }: PillButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative rounded-[35px] shrink-0 transition-colors cursor-pointer hover:opacity-80 active:scale-95",
        selected ? "bg-[#eae8e3]" : "bg-white"
      )}
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center pl-[12px] pr-[16px] py-[8px] relative">
          <div className="relative shrink-0 size-[16px]">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                {icon}
              </div>
            </div>
          </div>
          <p className={clsx(
            "font-[Sofia_Pro,sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px]",
            selected ? "text-[#133b34]" : "text-black"
          )}>
            {label}
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#133b34] border-solid inset-0 pointer-events-none rounded-[35px]" />
    </button>
  );
}

export default function InterestsScreen() {
  const navigate = useNavigate();
  
  const [interests, setInterests] = useState<InterestPill[]>([
    {
      id: "heart-health",
      label: "Heart health",
      selected: false,
      icon: (
        <div className="aspect-[15.004324913024902/13.394854545593262] flex-[1_0_0] min-h-px min-w-px relative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.2837">
            <path d={svgPaths.pe7e6780} fill="var(--fill-0, black)" />
          </svg>
        </div>
      ),
    },
    {
      id: "pediatrics",
      label: "Pediatrics",
      selected: false,
      icon: (
        <div className="h-[14px] relative shrink-0 w-[10px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
            <g clipPath="url(#clip0_1_801)">
              <path d={svgPaths.p13e97080} fill="var(--fill-0, #33CCCC)" />
              <path d={svgPaths.p351632f0} fill="var(--fill-0, #33CCCC)" />
              <g>
                <path d={svgPaths.p1d7b8170} fill="var(--fill-0, black)" />
                <path d={svgPaths.p3ee16480} fill="var(--fill-0, black)" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_801">
                <rect fill="white" height="14" width="10" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      id: "diabetes",
      label: "Diabetes",
      selected: false,
      icon: (
        <div className="aspect-[12.40999984741211/14.010000228881836] flex-[1_0_0] min-h-px min-w-px relative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
            <path d={svgPaths.p39eaea80} fill="var(--fill-0, black)" />
          </svg>
        </div>
      ),
    },
    {
      id: "dental-care",
      label: "Dental care",
      selected: false,
      icon: (
        <div className="h-[15px] relative shrink-0 w-[13.13px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.13 15">
            <g clipPath="url(#clip0_1_783)">
              <path d={svgPaths.p11736200} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2d987080} fill="var(--fill-0, black)" />
              <path d={svgPaths.pe36800} fill="var(--fill-0, black)" />
            </g>
            <defs>
              <clipPath id="clip0_1_783">
                <rect fill="white" height="15" width="13.13" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      id: "joint-issues",
      label: "Joint issues",
      selected: false,
      icon: (
        <div className="h-[14px] relative shrink-0 w-[13.73px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.73 14">
            <g clipPath="url(#clip0_1_766)">
              <path d={svgPaths.p1b1cc900} fill="var(--fill-0, black)" />
              <path d={svgPaths.p3e155cf0} fill="var(--fill-0, black)" />
              <path d={svgPaths.p83ae800} fill="var(--fill-0, black)" />
              <path d={svgPaths.p2a43c440} fill="var(--fill-0, black)" />
              <path d={svgPaths.p19420700} fill="var(--fill-0, black)" />
              <path d={svgPaths.p355ced00} fill="var(--fill-0, black)" />
            </g>
            <defs>
              <clipPath id="clip0_1_766">
                <rect fill="white" height="14" width="13.73" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      id: "staying-active",
      label: "Staying active",
      selected: false,
      icon: (
        <div className="flex-[1_0_0] h-[13.242px] min-h-px min-w-px relative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0145 13.2419">
            <path d={svgPaths.p198d1f0} fill="var(--fill-0, black)" />
          </svg>
        </div>
      ),
    },
    {
      id: "pregnancy-fertility",
      label: "Pregnancy & Fertility",
      selected: false,
      icon: (
        <div className="h-[14px] relative shrink-0 w-[9.054px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.0537 14">
            <path d={svgPaths.p1fdc4200} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1e3fff80} fill="var(--fill-0, black)" />
          </svg>
        </div>
      ),
    },
    {
      id: "aging",
      label: "Aging",
      selected: false,
      icon: (
        <div className="h-[13px] relative shrink-0 w-[11.89px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.89 13">
            <path d={svgPaths.pff29900} fill="var(--fill-0, black)" />
          </svg>
        </div>
      ),
    },
    {
      id: "mental-health",
      label: "Mental Health",
      selected: false,
      icon: (
        <div className="h-[14px] relative shrink-0 w-[11.66px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.66 14">
            <g clipPath="url(#clip0_1_757)">
              <path d={svgPaths.pae07a80} fill="var(--fill-0, #FCEE21)" />
              <g>
                <path d={svgPaths.p1011b000} fill="var(--fill-0, black)" />
                <path d={svgPaths.p8731100} fill="var(--fill-0, black)" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1_757">
                <rect fill="white" height="14" width="11.66" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      id: "medication",
      label: "Medication",
      selected: false,
      icon: (
        <div className="flex-[1_0_0] h-[13.985px] min-h-px min-w-px relative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.985">
            <path d={svgPaths.p2f43ca80} fill="var(--fill-0, black)" />
          </svg>
        </div>
      ),
    },
    {
      id: "neurological",
      label: "Neurological",
      selected: false,
      icon: (
        <div className="h-[14px] relative shrink-0 w-[11.947px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9472 14">
            <path d={svgPaths.p3b500b00} fill="var(--fill-0, black)" />
          </svg>
        </div>
      ),
    },
    {
      id: "diet-weight",
      label: "Diet & Weight",
      selected: false,
      icon: (
        <div className="h-[14px] relative shrink-0 w-[13.65px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.65 14">
            <g clipPath="url(#clip0_1_748)">
              <path d={svgPaths.p2bd7b500} fill="var(--fill-0, #B3C6D5)" />
              <g>
                <path d={svgPaths.p2d4bc100} fill="var(--fill-0, black)" />
                <path d={svgPaths.p29dbd700} fill="var(--fill-0, black)" />
              </g>
              <path d={svgPaths.p38507e80} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <clipPath id="clip0_1_748">
                <rect fill="white" height="14" width="13.65" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      id: "womens-health",
      label: "Women's Health",
      selected: false,
      icon: (
        <div className="h-[9.98px] relative shrink-0 w-[13.97px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.97 9.98">
            <g clipPath="url(#clip0_1_742)">
              <path d={svgPaths.pf1e0bf0} fill="var(--fill-0, #FAF2E5)" />
              <path d={svgPaths.p34822b00} fill="var(--fill-0, #FAF2E5)" />
              <path d={svgPaths.p2c794100} fill="var(--fill-0, #FACFE5)" />
              <path d={svgPaths.p34bfda00} fill="var(--fill-0, black)" />
            </g>
            <defs>
              <clipPath id="clip0_1_742">
                <rect fill="white" height="9.98" width="13.97" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      id: "eye-care",
      label: "Eye care",
      selected: false,
      icon: (
        <div className="h-[10px] relative shrink-0 w-[14px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
            <g clipPath="url(#clip0_1_790)">
              <path d={svgPaths.pfbe9cc0} fill="var(--fill-0, black)" />
              <path d={svgPaths.p1664da00} fill="var(--fill-0, black)" />
              <path d={svgPaths.p32b55000} fill="var(--fill-0, black)" />
            </g>
            <defs>
              <clipPath id="clip0_1_790">
                <rect fill="white" height="10" width="14" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      id: "quitting-tobacco",
      label: "Quitting tobacco",
      selected: false,
      icon: (
        <div className="h-[10.96px] relative shrink-0 w-[14px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10.96">
            <g clipPath="url(#clip0_1_774)">
              <path d={svgPaths.p2344ae80} fill="var(--fill-0, black)" />
              <path d={svgPaths.p1efba400} fill="var(--fill-0, black)" />
              <path d={svgPaths.p2335f880} fill="var(--fill-0, black)" />
            </g>
            <defs>
              <clipPath id="clip0_1_774">
                <rect fill="white" height="10.96" width="14" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
  ]);

  const toggleInterest = (id: string) => {
    setInterests(prev =>
      prev.map(interest =>
        interest.id === id ? { ...interest, selected: !interest.selected } : interest
      )
    );
  };

  const handlePrevious = () => {
    navigate("/onboarding/holly/state-of-me");
  };

  const handleNextStep = () => {
    const selectedIds = interests.filter(i => i.selected).map(i => i.id).join(",");
    navigate("/onboarding/holly/health-goals?interests=" + encodeURIComponent(selectedIds));
  };

  return (
    <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="bg-[#eae8e3] relative size-full" data-name="Screen 03 - Interests">
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
              <p className="font-[Sofia_Pro,sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#133b34] text-[16px] text-right">{"STEP 2 OF 4"}</p>
            </div>
          </div>
        </div>
        <ProgressBar currentStep={2} totalSteps={4} />
        <p className="font-[Sofia_Pro,sans-serif] font-normal leading-[normal] relative shrink-0 text-[#133b34] text-[20px] w-[346px] whitespace-pre-wrap">Choose a few topics or concerns that are relevant to you. We'll use this information to connect you to personalized benefits.</p>
        <div className="content-start flex flex-wrap gap-[19px] items-start relative shrink-0 w-[346px]" data-name="Pills">
          {interests.map((interest) => (
            <PillButton
              key={interest.id}
              label={interest.label}
              icon={interest.icon}
              selected={interest.selected}
              onClick={() => toggleInterest(interest.id)}
            />
          ))}
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-end justify-between min-h-px min-w-px py-[2px] relative w-full" data-name="Next Step">
          <AnimatePresence>
            {interests.filter(i => i.selected).length > 0 && (
              <motion.div
                key="selected-count"
                initial={{ opacity: 0, scale: 0.8, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="absolute -top-[28px] right-0 bg-[#133b34] text-white font-[Sofia_Pro,sans-serif] font-medium text-[12px] px-[10px] py-[3px] rounded-full"
              >
                {interests.filter(i => i.selected).length} selected
              </motion.div>
            )}
          </AnimatePresence>
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
                <p className="font-[Sofia_Pro,sans-serif] font-medium leading-[20px] relative shrink-0 text-[#133b34] text-[16px]">Previous</p>
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
                <p className="font-[Sofia_Pro,sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white">Next step</p>
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