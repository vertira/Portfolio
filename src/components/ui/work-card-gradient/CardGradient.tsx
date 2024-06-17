import React from "react";
import { motion } from "framer-motion";

interface CardGradientProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  color?: string;
}

export const CardGradient: React.FC<CardGradientProps> = ({
  children,
  animate = true,
  color,
}: CardGradientProps) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className="group relative p-[4px]">
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={`absolute inset-0 z-[1] rounded-3xl opacity-30 blur-xl transition duration-300 will-change-transform group-hover:opacity-60 ${color}`}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className="absolute inset-0 z-[1] rounded-3xl"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
