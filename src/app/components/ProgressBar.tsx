import { motion } from "motion/react";

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="w-full px-[2px] pt-[2px] pb-[2px]">
      <div className="flex items-center gap-[5px] w-full">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-[4px] rounded-full overflow-hidden"
            style={{ backgroundColor: "rgba(19,59,52,0.1)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: "#b4f02d" }}
              initial={{ width: 0 }}
              animate={{ width: i < currentStep ? "100%" : "0%" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
