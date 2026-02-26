import { useNavigate } from "react-router";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-833eh19uq4";

export default function HollyOnboarding() {
  const navigate = useNavigate();

  const handleNextStep = () => {
    // Navigate to the State of Me screen
    navigate("/onboarding/holly/state-of-me");
  };

  const handleDoLater = () => {
    // Navigate back to persona chooser
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-[#eae8e3] relative size-full" data-name="Screen 01 - Welcome">
      <div className="absolute bg-white content-stretch flex flex-col gap-[10px] h-[720px] items-start left-[7px] overflow-clip px-[16px] py-[12px] rounded-[10px] shadow-[0px_0px_15px_0px_rgba(19,59,52,0.12)] top-[59px] w-[371px]" data-name="Contents">
        <div className="h-[33px] relative shrink-0 w-[120px] cursor-pointer" data-name="myplan_logo" onClick={() => navigate("/")}>
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative size-full">
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="myplan">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169.92 46.56">
                  <g clipPath="url(#clip0_1_104)" id="myplan">
                    <path d={svgPaths.p172e5780} fill="var(--fill-0, #133b34)" id="Vector" />
                    <path d={svgPaths.p394c5ec0} fill="var(--fill-0, #133b34)" id="Vector_2" />
                    <path d={svgPaths.p20bc7500} fill="var(--fill-0, #133b34)" id="Vector_3" />
                    <path d={svgPaths.pe364080} fill="var(--fill-0, #133b34)" id="Vector_4" />
                    <path d={svgPaths.p2eacd030} fill="var(--fill-0, #133b34)" id="Vector_5" />
                    <path d={svgPaths.p2e2e1500} fill="var(--fill-0, #133b34)" id="Vector_6" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_104">
                      <rect fill="white" height="46.56" width="169.92" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start leading-[normal] pt-[24px] relative shrink-0">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-[Sofia_Pro,sans-serif] font-semibold relative shrink-0 text-[#133b34] text-[16px]">WELCOME, HOLLY!</motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="font-[Sofia_Pro,sans-serif] font-normal relative shrink-0 text-[#133b34] text-[24px] w-[348px] whitespace-pre-wrap">Let's get you set up with your new plan. This will take about 5 minutes.</motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-center min-h-px min-w-px relative w-full">
          <div className="overflow-clip relative shrink-0 size-[232px]" data-name="Welcome Streamline Bangalore">
            <div className="absolute inset-[2.74%_4.53%_2.74%_4.31%]" data-name="Interface-Welcome-01">
              <div className="absolute inset-[-0.23%_0_-0.23%_-0.24%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 211.989 220.299">
                  <g id="Interface-Welcome-01">
                    <circle cx="109.989" cy="117.15" fill="var(--fill-0, #eae8e3)" id="Ellipse 2" r="102" />
                    <path d={svgPaths.p30eef200} fill="var(--fill-0, white)" id="Vector 1" />
                    <g id="color 2">
                      <path d={svgPaths.p25c57cf0} fill="var(--fill-0, #FFFCD9)" fillOpacity="0.7" id="Vector" />
                      <path d={svgPaths.pce85ef0} fill="var(--fill-0, #FFFCD9)" fillOpacity="0.7" id="Vector_2" />
                      <path d={svgPaths.p350c5b00} fill="var(--fill-0, #FFFCD9)" fillOpacity="0.7" id="Vector_3" />
                      <path d={svgPaths.p18885000} fill="var(--fill-0, #FFFCD9)" fillOpacity="0.7" id="Vector_4" />
                      <path d={svgPaths.p23647380} fill="var(--fill-0, #FFFCD9)" fillOpacity="0.7" id="Vector_5" />
                      <path d={svgPaths.p242b6880} fill="var(--fill-0, #FFFCD9)" fillOpacity="0.7" id="Vector_6" />
                    </g>
                    <g id="color 1">
                      <path d={svgPaths.p2abcc140} fill="var(--fill-0, #b4f02d)" id="Vector_8" />
                      <path d={svgPaths.p11f31400} fill="var(--fill-0, #b4f02d)" id="Vector_9" />
                      <path d={svgPaths.p22e06c00} fill="var(--fill-0, #b4f02d)" id="Vector_10" />
                      <path d={svgPaths.p93ff690} fill="var(--fill-0, #b4f02d)" id="Vector_11" />
                      <path d={svgPaths.p3a4647c0} fill="var(--fill-0, #b4f02d)" id="Vector_12" />
                      <path d={svgPaths.p2da557f0} fill="var(--fill-0, #b4f02d)" id="Vector_13" />
                      <path d={svgPaths.p14f16000} fill="var(--fill-0, #b4f02d)" id="Vector_14" />
                      <path d={svgPaths.p68e6400} fill="var(--fill-0, #b4f02d)" id="Vector_15" />
                      <path d={svgPaths.p3574a400} fill="var(--fill-0, #b4f02d)" id="Vector_16" />
                    </g>
                    <g id="outlines">
                      <path d={svgPaths.p14352e00} id="Vector_17" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p2b030800} id="Vector_18" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p217c4fb8} id="Vector_19" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.pdde0580} id="Vector_20" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.pa67ec00} id="Vector_21" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3b8c3b00} id="Vector_22" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3af64e80} id="Vector_23" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.pd032b00} id="Vector_24" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p1607a500} id="Vector_25" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p2047b00} id="Vector_26" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p9be4d00} id="Vector_27" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p1a737b80} id="Vector_28" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p35610d00} id="Vector_29" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p16e2000} id="Vector_30" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3cf8a100} id="Vector_31" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p34bc4640} id="Vector_32" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p21a87d80} id="Vector_33" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p1f8d7600} id="Vector_34" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p5563600} id="Vector_35" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.peb2a580} id="Vector_36" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3f3ca900} id="Vector_37" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p143d6400} id="Vector_38" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p1d0df200} id="Vector_39" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p5a607c0} id="Vector_40" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p1236ba00} id="Vector_41" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p2d0cd00} id="Vector_42" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.pa186700} id="Vector_43" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.pbe06780} id="Vector_44" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p2c2324c0} id="Vector_45" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p2e4a2900} id="Vector_46" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p25159100} id="Vector_47" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.pf2f8580} id="Vector_48" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.pc361300} id="Vector_49" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p2a6cf850} id="Vector_50" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p6cf45a0} id="Vector_51" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p37df6a80} id="Vector_52" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p35ce5700} id="Vector_53" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p9c0cac0} id="Vector_54" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p19e45080} id="Vector_55" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3584a080} id="Vector_56" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p30798100} id="Vector_57" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3fa30300} id="Vector_58" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3b85700} id="Vector_59" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p6609dc0} id="Vector_60" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p13942c0} id="Vector_62" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p1321c80} id="Vector_63" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p8cb9d00} id="Vector_64" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p1ba75600} id="Vector_65" stroke="var(--stroke-0, #133b34)" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
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
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px py-[2px] relative">
            <button
              onClick={handleDoLater}
              className="bg-[#d8d6d1] relative rounded-[10px] shrink-0 hover:bg-[#c5c2bc] active:bg-[#b2afa9] transition-colors cursor-pointer"
            >
              <div className="content-stretch flex items-center justify-center overflow-clip pl-[28px] pr-[30px] py-[12px] relative rounded-[inherit]">
                <p className="font-[Sofia_Pro,sans-serif] font-normal leading-[20px] relative shrink-0 text-[#5a5a56] text-[16px]">I'll do this later</p>
              </div>
              <div aria-hidden="true" className="absolute border border-[#d8d6d1] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}