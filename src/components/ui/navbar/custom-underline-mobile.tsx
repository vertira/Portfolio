import { motion } from "framer-motion";

export default function CustomUnderLineMobile({
  positionLeft,
  width,
}: {
  positionLeft: string;
  width: number;
}) {
  return (
    <motion.div
      className={`absolute -bottom-[2px] ${positionLeft} stroke right-0 h-[1px]`}
    >
      <svg width="100%" height="12" viewBox="0 0 50 8" fill="none">
        <defs>
          <motion.linearGradient
            animate={{ x1: "0%", x2: "100%" }}
            initial={{ x1: "0%", x2: "0%" }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
            id="gradient"
          >
            <stop stopColor="#06b6d4" stopOpacity="0"></stop>
            <stop stopColor="#06b6d4"></stop>
            <stop offset="0.5" stopColor="#22c55e"></stop>
          </motion.linearGradient>
        </defs>
        <motion.path
          d={`M 1 5.3997 C 7.4856 -1.0859 6.4484 -0.1283 8.3364 6.4799 C 8.3481 6.5207 11.6019 2.7287 12.3422 2.3391 C 13.8991 1.5197 16.6594 2.9692 18.3734 2.9692 C 21.665 2.9692 23.1972 1.6976 26.745 2.7892 C 29.7551 3.7154 32.6954 3.7794 ${width} 4`}
          strokeDasharray={width}
          strokeDashoffset={width}
          stroke="url(#gradient)"
          strokeWidth="1.2"
          className="animate-svgpath"
        />
      </svg>
    </motion.div>
  );
}
