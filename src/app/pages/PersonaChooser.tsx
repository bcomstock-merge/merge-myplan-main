import { useNavigate } from "react-router";
import { motion } from "motion/react";
import clsx from "clsx";
import svgPaths from "../../imports/svg-dwgfvo1ubx";
// Professional headshots
const imgImage6 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face";
const imgImage4 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
const imgImage7 = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face";

type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, text2, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("font-[Sofia_Pro,sans-serif] font-normal leading-[1.3] relative shrink-0 text-[0px] text-black text-center whitespace-pre-wrap", additionalClassNames)}>
      <p className="font-[Sofia_Pro,sans-serif] font-semibold mb-0 text-[#133b34] text-[16px]">{text}</p>
      <p className="mb-0 text-[#133b34] text-[14px]">{text1}</p>
      <p className="text-[#133b34] text-[14px]">{text2}</p>
    </div>
  );
}

type PersonaCardProps = {
  image: string;
  name: string;
  status: string;
  coverage: string;
  onClick: () => void;
  flipped?: boolean;
};

function PersonaCard({ image, name, status, coverage, onClick, flipped = false }: PersonaCardProps) {
  return (
    <div
      className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[170px] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 rounded-[16px] p-[8px] hover:shadow-[0_4px_24px_rgba(19,59,52,0.18),0_0_12px_rgba(180,240,45,0.12)]"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="relative shrink-0 size-[125px] rounded-full overflow-hidden">
        <img alt={name} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image} />
      </div>
      <Helper text={name} text1={status} text2={coverage} additionalClassNames={flipped ? "w-[162px]" : "w-[130px]"} />
    </div>
  );
}

export default function PersonaChooser() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-[#eae8e3] relative size-full" data-name="Screen 00 - Persona Chooser">
      <div className="absolute bg-white content-stretch flex flex-col gap-[10px] h-[720px] items-start left-[7px] overflow-clip px-[16px] py-[12px] rounded-[10px] shadow-[0px_0px_15px_0px_rgba(19,59,52,0.12)] top-[59px] w-[371px]" data-name="Contents">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-[33px] relative shrink-0 w-[120px] cursor-pointer" data-name="myplan_logo"
          onClick={() => navigate("/")}
        >
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center relative size-full">
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="myplan">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 33">
                  <g clipPath="url(#clip0_1_132)" id="myplan">
                    <path d={svgPaths.p34a6dd00} fill="var(--fill-0, #133b34)" id="Vector" />
                    <path d={svgPaths.p2fb35d20} fill="var(--fill-0, #133b34)" id="Vector_2" />
                    <path d={svgPaths.p17d46b80} fill="var(--fill-0, #133b34)" id="Vector_3" />
                    <path d={svgPaths.p1edf6900} fill="var(--fill-0, #133b34)" id="Vector_4" />
                    <path d={svgPaths.p23214fc0} fill="var(--fill-0, #133b34)" id="Vector_5" />
                    <path d={svgPaths.p3dceb5f0} fill="var(--fill-0, #133b34)" id="Vector_6" />
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
        </motion.div>
        <div className="content-stretch flex flex-col gap-[32px] items-start pt-[24px] relative shrink-0">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-[Sofia_Pro,sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#133b34] text-[16px]">PERSONA LAUNCHER</motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-[Sofia_Pro,sans-serif] font-normal leading-[normal] relative shrink-0 text-[#133b34] text-[24px] w-[339px] whitespace-pre-wrap">Choose a member persona to see their onboarding experience.</motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="content-start flex flex-wrap gap-[14px_10px] items-start justify-center relative shrink-0 w-[350px]">
            <PersonaCard
              image={imgImage6}
              name="Holly Smith, 47"
              status="New member"
              coverage="Self + family"
              onClick={() => navigate("/onboarding/holly")}
            />
            <PersonaCard
              image={imgImage4}
              name="Pedro Barrio, 52"
              status="New member"
              coverage="Self only"
              onClick={() => navigate("/onboarding/pedro")}
            />
            <PersonaCard
              image={imgImage7}
              name="Natasha Carter, 27"
              status="Existing member"
              coverage="Self + one"
              onClick={() => navigate("/onboarding/natasha")}
              flipped={true}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
