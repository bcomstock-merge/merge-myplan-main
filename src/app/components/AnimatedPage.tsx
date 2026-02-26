import { motion } from "motion/react";
import { type ReactNode } from "react";

type AnimatedPageProps = {
  children: ReactNode;
  className?: string;
};

export default function AnimatedPage({ children, className = "" }: AnimatedPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
      className={className}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </motion.div>
  );
}

type StaggerChildProps = {
  children: ReactNode;
  index?: number;
  className?: string;
};

export function StaggerChild({ children, index = 0, className = "" }: StaggerChildProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1 + index * 0.08,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
