import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navbar/navigation-menu";
import { Button } from "@/components/ui/buttons/button";
import { Sheet, SheetContent } from "@/components/ui/navbar/sheet";
import CustomUnderLineMobile from "../ui/navbar/custom-underline-mobile";
import { MenuIcon } from "lucide-react";
import { ThemeButton } from "../ui/buttons/theme-button";
import CustomUnderLineDesktop from "../ui/navbar/custom-underline-desktop";
import { navigation } from "@data/constants";

export default function NavBar() {
  const [isDelay, setIsDelay] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isHover, setIsHover] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      setIsNavbarVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  useEffect(() => {
    setTimeout(() => {
      setIsDelay(false);
    }, 5500);
  });
  return (
    <header
      className={`fixed top-0 z-50 h-16 w-full shrink-0 items-center justify-center px-4 font-monument transition-all duration-300 ease-in-out md:px-6 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div
        className={`flex h-full w-full items-center  justify-end lg:justify-center ${isDelay ? "opacity-0" : "opacity-90"}`}
      >
        <NavigationMenu className="dark:glass glass-light mt-10 hidden justify-center rounded-md p-3 text-neutral-200 dark:text-neutral-100/60 lg:flex  ">
          <NavigationMenuList>
            {navigation.map((item) => {
              const isSelected = item.name === isHover;
              return (
                <NavigationMenuLink asChild key={item.name}>
                  <li className="list-none" role="button">
                    <a
                      aria-label={`Link to section ${item.name}`}
                      href={`#${item.name}`}
                      className="group relative flex h-12 w-max items-center justify-center rounded-lg px-6 text-lg no-underline hover:text-neutral-400  dark:hover:text-neutral-50  "
                      onMouseEnter={() => setIsHover(item.name)}
                      onMouseLeave={() => setIsHover("")}
                    >
                      {item.name.toUpperCase()}
                      {isSelected ? (
                        <CustomUnderLineDesktop
                          positionLeft={item.desktop.positionLeft}
                          width={item.desktop.width}
                        />
                      ) : (
                        ""
                      )}
                    </a>
                  </li>
                </NavigationMenuLink>
              );
            })}
          </NavigationMenuList>
          <ThemeButton height={6} width={6} className="mx-5 rounded-full" />
        </NavigationMenu>
        <div className=" flex items-center gap-4">
          <Button
            aria-label="Hamburger Menu"
            variant="ghost"
            size="icon"
            className={`h-max w-max  bg-neutral-200/90 dark:bg-neutral-900/90 lg:hidden ${isMenuOpen ? "opacity-0" : "opacity-90"} ${isDelay ? "opacity-0" : "opacity-90"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-12 w-12 stroke-black dark:stroke-white" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent
          side="left"
          className="glassOverlay flex h-full flex-col justify-center p-6 font-monument text-3xl text-neutral-200 transition-all duration-300 ease-in-out"
        >
          <ThemeButton
            height={12}
            width={12}
            className="absolute left-[1.3rem] top-[1.35rem] rounded-full opacity-70 "
          />
          <nav className="h-3/4">
            <ul className="flex h-full flex-col justify-between">
              {navigation.map((item) => {
                return (
                  <li key={item.name}>
                    <a
                      aria-label={`Link to section ${item.name}`}
                      href={`#${item.name}`}
                      className="relative flex items-center justify-center font-medium hover:underline"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      {item.name.toUpperCase()}
                      <CustomUnderLineMobile
                        positionLeft={item.mobile.positionLeft}
                        width={item.mobile.width}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
