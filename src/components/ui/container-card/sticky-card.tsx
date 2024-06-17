import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

export const StickyCard = ({ children }: { children: React.ReactNode }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        scale,
      }}
      ref={targetRef}
      className={`-z-1 sticky h-full overflow-hidden rounded-xl`}
    >
      <motion.div
        className="absolute inset-0 -z-10 h-full"
        style={{
          opacity,
        }}
      />
      {children}
    </motion.div>
  );
};
