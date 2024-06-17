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
    <div>
      <img
        src={src}
        alt={title}
        height="400"
        width="400"
        className="mx-auto rounded-[22px] object-contain"
      />
      <p className="mb-2 mt-4 text-base text-neutral-50 sm:text-xl">{title}</p>

      <p className="text-sm text-neutral-200">{description}</p>
      {!hide ? (
        <div className="flex flex-row gap-9">
          <button className="mt-5 inline-flex h-12 w-full animate-shimmer rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <a
              href={codeUrl}
              target="_blank"
              className="flex h-full w-full items-center justify-center max-sm:px-6"
            >
              Code
            </a>
          </button>
          <button className="mt-5 inline-flex h-12 w-full animate-shimmer  rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <a
              href={liveUrl}
              target="_blank"
              className="flex h-full w-full items-center justify-center max-sm:px-6"
            >
              Live Preview
            </a>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
