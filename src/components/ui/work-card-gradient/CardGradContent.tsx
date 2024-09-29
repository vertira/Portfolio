interface CardGradContentProps {
  src: string;
  title: string;
  description: string;
  codeUrl?: string;
  liveUrl?: string;
  hide?: boolean;
}
export const CardGradContent = ({
  src,
  title,
  codeUrl,
  liveUrl,
  description,
  hide,
}: CardGradContentProps) => {
  return (
    <div className="font-monument">
      <img
        src={src}
        alt={title}
        height="400"
        width="400"
        className="mx-auto rounded-[22px] object-contain"
      />
      <p className="mb-2 mt-4 text-base text-neutral-100 sm:text-xl">{title}</p>

      <p className="text-sm font-light text-neutral-200">{description}</p>
      {!hide ? (
        <div className="flex flex-row gap-9">
          <button
            aria-label="Code repo link button"
            className="mt-5 inline-flex h-12 w-full animate-shimmer rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-light  text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <a
              href={codeUrl}
              target="_blank"
              className="flex h-full w-full items-center justify-center max-sm:px-6"
              aria-label="Check out my github repo with this project"
            >
              Code
            </a>
          </button>
          <button
            aria-label="Live website link button"
            className="mt-5 inline-flex h-12 w-full animate-shimmer  rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-light text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <a
              aria-label="Check out my website live"
              href={liveUrl}
              target="_blank"
              className="flex h-full w-full items-center justify-center max-sm:px-6"
            >
              Live Preview
            </a>
          </button>
        </div>
      ) : (
        <div className="flex justify-end">
          <button
            aria-label="Live website link button"
            className="mt-5 inline-flex h-12 w-full animate-shimmer  rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-light text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <a
              aria-label="Check out my website live"
              href={liveUrl}
              target="_blank"
              className="flex h-full w-full items-center justify-center max-sm:px-6"
            >
              Live Preview
            </a>
          </button>
        </div>
      )}
    </div>
  );
};
