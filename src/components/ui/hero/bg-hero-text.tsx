import React, { useEffect, useState } from "react";

export const HeroBgText = ({
  items,
  direction = "left",
  speed = "fast",
}: {
  items: {
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
      document.querySelector("body")?.classList.remove("overflow-hidden");
    }, 6000);
  });

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="scroller relative z-20 mb-24 w-full  overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]  lg:mb-0 "
    >
      <ul
        ref={scrollerRef}
        className={`${visible ? "animate-scroll" : ""} flex w-max min-w-full shrink-0 flex-nowrap gap-10`}
      >
        {items.map((item) => (
          <li
            className="relative w-max max-w-full flex-shrink-0 px-10 hover:text-neutral-50/20    dark:text-neutral-50/5 lg:px-24"
            key={item.name}
          >
            <h1 className="outline-text-light dark:outline-text select-none font-monument text-[10vh] font-extralight italic lg:text-[20vh]">
              {item.name}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
