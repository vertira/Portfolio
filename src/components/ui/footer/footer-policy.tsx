import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/footer/dialog";
import { Button } from "@/components/ui/buttons/button";
import { policy } from "@/data_files/constants";
export const FooterPolicy = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="lg:text-[12px] text-[9px] text-neutral-100">
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-neutral-900 text-neutral-100 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl lg:text-2xl">
            Privacy Policy
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 py-4">
          {policy.map((item) => {
            return (
              <div key={item.title}>
                <span className="text-md text-justify lg:text-xl">
                  {item.title}
                </span>
                <p className="text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <button className="relative inline-flex h-12 w-full overflow-hidden rounded-xl p-[1px] ">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#22c55e_50%,#06b6d4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-neutral-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Close
              </span>
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
