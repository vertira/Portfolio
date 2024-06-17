import { CardGradient } from "./CardGradient";
import { CardGradContent } from "./CardGradContent";

export const CardGradContainer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-20 px-10 lg:flex-row lg:items-center lg:justify-around xl:h-[70vh]">
      <div className="max-w-lg rounded-[22px]   bg-zinc-900 p-4 sm:p-10 ">
        <CardGradient color="custom-gradient1">
          <CardGradContent
            src="/soon.webp"
            title="It’s a Secret! But Not for Long. Coming Soon!"
            description=""
            hide={true}
          />
        </CardGradient>
      </div>
      <div className="max-w-lg rounded-[22px]  bg-zinc-900 p-4 sm:p-10 ">
        <CardGradient color="custom-gradient2">
          <CardGradContent
            src="/1.jpg"
            title="Groomka Landing Page"
            description="Groomka is a landing page built using Astro, React, TypeScript, and TailwindCSS. This project is designed to provide a modern, fast, and responsive user experience."
            liveUrl="https://groomka.vercel.app/"
            codeUrl="https://github.com/vertira/groomka"
            hide={false}
          />
        </CardGradient>
      </div>
      <div className="max-w-lg rounded-[22px]  bg-zinc-900 p-4 sm:p-10 ">
        <CardGradient color="custom-gradient3">
          <CardGradContent
            src="/soon.webp"
            title="It’s a Secret! But Not for Long. Coming Soon!"
            description=""
            hide={true}
          />
        </CardGradient>
      </div>
    </div>
  );
};
