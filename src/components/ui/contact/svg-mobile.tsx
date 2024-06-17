import { motion } from "framer-motion";
import { grad1, grad2 } from "@/data_files/constants";
import { GradientColors } from "./contact-svg";

export const SVGMobile = ({ className }: { className: string }) => {
  return (
    <svg
      width="100%"
      height="423"
      viewBox="0 0 423 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-min-screen w-full ${className}`}
    >
      <path
        d="M180 220V307C180 326 180 326 144 327 105 328 105 328 105 360V425"
        stroke="#1e293b"
        strokeWidth="2"
      />
      <path
        d="M250 220V307C249 326 249 326 288 327 319 327 319 327 319 360V425"
        stroke="#1e293b"
        strokeWidth="2"
      />
      <path
        d="M180 220V307C180 326 180 326 144 327 105 328 105 328 105 360V425"
        stroke="url(#grad3)"
        strokeWidth="2"
      />
      <path
        d="M250 220V307C249 326 249 326 288 327 319 327 319 327 319 360V425"
        stroke="url(#grad4)"
        strokeWidth="2"
      />
      <defs>
        <motion.linearGradient
          variants={grad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad3"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad2}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad4"
        >
          <GradientColors />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
