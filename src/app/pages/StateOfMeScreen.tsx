import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-j488q58h0t";
import ProgressBar from "../components/ProgressBar";

type SliderProps = {
  value: number;
  onChange: (value: number) => void;
  leftLabel: string;
  rightLabel: string;
};

function InteractiveSlider({ value, onChange, leftLabel, rightLabel }: SliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const percentage = (value / 340) * 100;

  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[340px]">
      <div className="content-stretch flex font-[Sofia_Pro,sans-serif] font-normal items-center justify-between leading-[normal] relative shrink-0 text-[#133b34] text-[14px] w-full whitespace-pre-wrap">
        <p className="relative shrink-0 w-[128px]">{leftLabel}</p>
        <p className="relative shrink-0 text-right w-[120px]">{rightLabel}</p>
      </div>
      <div className="h-[24px] relative shrink-0 w-[340px]">
        <div className="absolute inset-[-4.17%_0_-12.5%_0]">
          {/* Background track */}
          <div className="absolute left-0 top-[8px] w-[340px] h-[10px] bg-[#C4C4E7] rounded-[5px]" />
          {/* Filled track */}
          <div 
            className="absolute left-0 top-[8px] h-[10px] bg-[#133b34] rounded-[5px] transition-all duration-150"
            style={{ width: `${value}px` }}
          />
          {/* Slider thumb */}
          <div
            className="absolute top-[1px] w-[24px] h-[24px] rounded-full bg-[#133b34] shadow-[1px_1px_2px_0px_rgba(0,0,0,0.2)] transition-all duration-150 pointer-events-none"
            style={{ left: `${value - 12}px` }}
          />
          {/* Input range */}
          <input
            type="range"
            min="12"
            max="328"
            value={value}
            onChange={handleChange}
            className="absolute left-0 top-[8px] w-[340px] h-[10px] opacity-0 cursor-pointer z-10"
            style={{ margin: 0 }}
          />
        </div>
      </div>
    </div>
  );
}

export default function StateOfMeScreen() {
  const navigate = useNavigate();
  const [slider1, setSlider1] = useState(107);
  const [slider2, setSlider2] = useState(195);
  const [slider3, setSlider3] = useState(71);
  const [slider4, setSlider4] = useState(287);

  const handleNextStep = () => {
    // Navigate to the interests screen
    navigate("/onboarding/holly/interests");
  };

  return (
    <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="bg-[#eae8e3] relative size-full" data-name="Screen 02 - State of Me">
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
              <p className="font-[Sofia_Pro,sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#133b34] text-[16px] text-right">{"STEP 1 OF 4"}</p>
            </div>
          </div>
        </div>
        <ProgressBar currentStep={1} totalSteps={4} />
        <p className="font-[Sofia_Pro,sans-serif] font-normal leading-[normal] relative shrink-0 text-[#133b34] text-[20px] w-[326px] whitespace-pre-wrap">Tell us a little about where you are on your health journey.</p>
        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0" data-name="Sliders">
          <InteractiveSlider
            value={slider1}
            onChange={setSlider1}
            leftLabel="I have a few health issues I've been putting off"
            rightLabel="I stay on top of all my health concerns"
          />
          <InteractiveSlider
            value={slider2}
            onChange={setSlider2}
            leftLabel="I need to schedule routine care and screenings"
            rightLabel="I'm up to date on routine care and screenings"
          />
          <InteractiveSlider
            value={slider3}
            onChange={setSlider3}
            leftLabel="I need to find one or more new providers"
            rightLabel="I have providers that I'd prefer to stay with"
          />
          <InteractiveSlider
            value={slider4}
            onChange={setSlider4}
            leftLabel="I would like support reaching my health goals"
            rightLabel="I feel good about where I am on my health journey"
          />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px py-[2px] relative w-full" data-name="Next Step">
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