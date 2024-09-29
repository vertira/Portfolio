import Words from "@/components/ui/hero/words-animation";
import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Text from "@components/ui/hero/heading-text";

export const Hero = () => {
  const [visible, setVisible] = useState(false);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 5500);
  });
  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="fixed left-0 top-0 flex min-h-full w-full items-center justify-center "
    >
      <Words />
      {visible ? (
        <Text
          words=" Hi I'm Krystian Grala Front end Developer"
          color="neutral-200"
        />
      ) : (
        ""
      )}
    </motion.div>
  );
};
