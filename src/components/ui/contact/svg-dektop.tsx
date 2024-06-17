import { motion } from "framer-motion";
import { grad1, grad2 } from "@/data_files/constants";
import { GradientColors } from "./contact-svg";

export const SVGDesktop = ({className} : {className:string}) => {
  return (
    <svg
      width="900"
      height="423"
      viewBox="0 0 900 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`relative w-full ${className}`}
    >
      <path
        d="M425.5 250V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="#1e293b"
        strokeWidth="2"
      />
      <path
        d="M493 250V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="#1e293b"
        strokeWidth="2"
      />
      <path
        d="M425.5 250V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="url(#grad1)"
        strokeWidth="2"
      />
      <path
        d="M493 250V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="url(#grad2)"
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
          id="grad1"
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
          id="grad2"
        >
          <GradientColors />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
