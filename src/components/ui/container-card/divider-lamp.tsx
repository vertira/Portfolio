import React from "react";
import { motion } from "framer-motion";

export function Divider({ title }: { title: string }) {
  return (
    <LampContainer>
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: -50 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="lamp z-20 mt-8 py-4 text-center font-monument text-4xl font-medium   tracking-tight text-neutral-800 dark:text-neutral-200 md:text-8xl"
      >
        {title}
      </motion.h2>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="relative z-10 flex h-[30vh] w-full flex-col items-center justify-center overflow-hidden bg-neutral-100 dark:bg-neutral-950 ">
      <div className="relative  z-20 flex w-full flex-1 scale-y-50 items-start justify-center ">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{ duration: 1, ease: "linear" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="lamp bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-cyan-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  bottom-0 left-0 z-10 h-40 w-[100%] bg-neutral-100 [mask-image:linear-gradient(to_top,white,transparent)] dark:bg-neutral-950" />
          <div className="absolute  bottom-0 left-0 z-10 h-[100%]  w-40 bg-neutral-100 [mask-image:linear-gradient(to_right,white,transparent)] dark:bg-neutral-950" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{ duration: 1, ease: "linear" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="lamp bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-cyan-500  [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  bottom-0 right-0 z-20 h-[100%]  w-40 bg-neutral-100 [mask-image:linear-gradient(to_left,white,transparent)] dark:bg-neutral-950" />
          <div className="absolute  bottom-0 right-0 z-20 h-40 w-[100%] bg-neutral-100 [mask-image:linear-gradient(to_top,white,transparent)] dark:bg-neutral-950" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl dark:bg-neutral-950"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem]  rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "2rem" }}
          whileInView={{ width: "10rem" }}
          transition={{ duration: 1, ease: "linear" }}
          className="lamp absolute inset-auto z-30 h-36 w-64  rounded-full bg-green-400 blur-2xl"
        ></motion.div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-neutral-100 dark:bg-neutral-950 "></div>
      </div>

      <div className="relative z-50 flex flex-col items-center px-5 text-9xl max-sm:-translate-y-12  ">
        {children}
      </div>
    </div>
  );
};
