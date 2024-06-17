import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
interface TextProps {
  words: string;
  color?: string;
}
const Text = ({ words, color }: TextProps) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.4),
      },
    );
  }, [scope.current]);
  const scrollDown = () => {
    const element = document.querySelector("#skills");
    element?.scrollIntoView();
  };

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="opacity-0 ">
              {word} {idx === 1 || idx === 4 ? <br /> : ""}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="flex h-max w-full flex-col items-center justify-center overflow-hidden ">
      <h1
        className={`z-20 text-center text-4xl font-bold text-neutral-800 md:text-center dark:text-${color}  w-full font-monument font-light leading-[1.3] tracking-tighter text-neutral-100 md:text-7xl xl:text-8xl `}
      >
        {renderWords()}
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
        className="relative h-40 w-3/4"
      >
        <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm" />
        <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute inset-x-1/4 top-0 h-[5px] w-1/2 bg-gradient-to-r from-transparent via-green-500 to-transparent blur-sm" />
        <div className="absolute inset-x-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        onClick={scrollDown}
        className="z-100 inline-flex h-14 w-14 animate-bounce cursor-pointer overflow-hidden rounded-full p-[1px] "
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#22c55e_50%,#06b6d4_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
            className="rounded-full"
          >
            <path
              fill="#fafafa"
              d="M10 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.78-8.841a.75.75 0 0 0-1.06 0l-1.97 1.97V.75a.75.75 0 0 0-1.5 0v6.379l-1.97-1.97a.75.75 0 0 0-1.06 1.06l3.25 3.25L8 10l.53-.53l3.25-3.25a.75.75 0 0 0 0-1.061"
            />
          </svg>
        </span>
      </motion.button>
    </div>
  );
};
export default Text;
