import { FooterPolicy } from "../ui/footer/footer-policy";
import { FooterTitle } from "../ui/footer/footer-title";

export const Footer = () => {
  return (
    <footer
      className="dark:glass glass-light absolute bottom-0  w-full font-monument"
      id="scrollFooter"
    >
      <div className="mx-auto my-2 w-full px-2 sm:px-6 lg:px-16 lg:pt-0">
        <div className="flex flex-row justify-between sm:mt-0 sm:flex sm:items-center lg:px-10">
          <FooterTitle />
          <FooterPolicy />
        </div>
      </div>
    </footer>
  );
};
