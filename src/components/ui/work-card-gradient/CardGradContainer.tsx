import { CardGradient } from "./CardGradient";
import { CardGradContent } from "./CardGradContent";

export const CardGradContainer = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-20 px-10 lg:flex-row lg:items-center lg:justify-around xl:h-[70vh]">
      <div className="min-h-[520px] max-w-lg rounded-[22px] bg-zinc-900 p-4 sm:p-10 ">
        <CardGradient color="custom-gradient2">
          <CardGradContent
            src="/assistant.webp"
            title="Asystent Fachowca App"
            description="A construction scheduling and employee management app built with Next.js, Prisma, and TailwindCSS. The interface features smooth, intuitive animations powered by Framer Motion for a modern user experience."
            liveUrl="https://asystent-fachowca.vercel.app/"
            codeUrl="https://github.com/vertira/asystent-fachowca"
            hide={false}
          />
        </CardGradient>
      </div>
      <div className="min-h-[520px]  max-w-lg rounded-[22px] bg-zinc-900 p-4 sm:p-10 ">
        <CardGradient color="custom-gradient1">
          <CardGradContent
            src="/link.webp"
            title="Sprawdź link"
            liveUrl="https://sprawdz-link.vercel.app/"
            description="A link analysis and verification application that uses artificial intelligence to check and assess domain risk. Integrates CERT, VirusTotal and WhoIs databases."
            hide={true}
          />
        </CardGradient>
      </div>
      <div className="min-h-[520px] max-w-lg rounded-[22px]  bg-zinc-900 p-4 sm:p-10 ">
        <CardGradient color="custom-gradient3">
          <CardGradContent
            src="/groomka.webp"
            title="Groomka Landing Page"
            description="Groomka is a landing page built using Astro, React, TypeScript, and TailwindCSS. This project is designed to provide a modern, fast, and responsive user experience."
            liveUrl="https://groomka.pl/"
            codeUrl="https://github.com/vertira/groomka"
            hide={false}
          />
        </CardGradient>
      </div>
    </div>
  );
};
