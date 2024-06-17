import { SVGDesktop } from "./svg-dektop";
import { SVGMobile } from "./svg-mobile";
export const ContactSvg = () => {
  return (
    <div className="relative flex h-[50vh] items-center justify-center bg-transparent antialiased md:h-[60vh]">
      <button className="group relative z-40 inline-block h-[120px] cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 no-underline shadow-2xl shadow-zinc-900  dark:text-white lg:w-[320px]">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative z-10 flex h-[120px] w-[320px] items-center justify-center  space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 text-center ring-1 ring-white/10 ">
          <span className="inline-block bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-200 bg-clip-text text-4xl text-transparent md:text-4xl">
            CV
          </span>
        </div>
      </button>
      <div className="absolute inset-0 flex items-center justify-center">
        <SVGs />
      </div>
    </div>
  );
};

export const SVGs = () => {
  return (
    <div className="relative  flex flex-shrink-0 ">
      <SVGDesktop className="hidden md:flex " />
      <SVGMobile className="flex md:hidden" />
      <button>
        <a href="https://github.com/vertira" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 16 16"
            className="absolute left-[80px] top-[420px] animate-pulse cursor-pointer  fill-neutral-900 hover:fill-neutral-700 dark:fill-neutral-400 dark:hover:fill-neutral-50 md:left-[110px]"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </a>
      </button>
      <button className="focuc outline-slate-100 focus:outline-2">
        <a href="mailto:krystian.grala97@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="84"
            viewBox="0 0 24 24"
            className="absolute right-[70px] top-[412px] animate-pulse cursor-pointer  fill-neutral-900 hover:fill-neutral-700 dark:fill-neutral-400 dark:hover:fill-neutral-50 md:right-[90px]"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44" />
          </svg>
        </a>
      </button>
    </div>
  );
};
export const GradientColors = () => {
  return (
    <>
      <stop stopColor="#06b6d4" stopOpacity="0"></stop>
      <stop stopColor="#06b6d4"></stop>
      <stop offset="0.325" stopColor="#22c55e"></stop>
      <stop offset="1" stopColor="#22c55e" stopOpacity="0"></stop>
    </>
  );
};
