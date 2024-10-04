import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Chat = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const size = useWindowSize();
  const isMobile = size?.width ? size.width < 1024 : false;
  return (
    <motion.div
      initial={{ y: 335, x: 400 }}
      animate={isOpen ? { y: 0, x: 0 } : { y: isMobile ? 440 : 335, x: isMobile ? 160 : 400 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 right-0"
    >
      <div className="relative">
        <iframe
          src="http://localhost:3000/"
          width="600"
          height="400"
          className="h-[500px] w-[350px] rounded-xl md:h-[500px] md:w-[600px]"
        ></iframe>
        <div
          className={`swallow__icon absolute left-1/2 max-md:-translate-x-7 md:left-1/4 top-0 w-full translate-y-1/4`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <ChevronDown
            className={`h-10 w-10 shrink-0 text-white transition-transform duration-1000 ${isOpen ? "rotate-180" : "animate-pulse"} cursor-pointer`}
          />
        </div>
      </div>
    </motion.div>
  );
};
