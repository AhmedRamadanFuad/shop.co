import barsBlack from "@/assets/icons/bars-black.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";

// type Links = {
//   name: string;
//   href: string;
// }[];

export function DrawerDemo() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Image
          src={barsBlack}
          alt="Bars Icon"
          className="lg:hidden cursor-pointer"
        />
      </DrawerTrigger>
      <DrawerContent className="left-0">
        <div className="hidden">
          <DrawerTitle>Drawer Panel Is Hidden</DrawerTitle>
        </div>
        <div className="mx-auto w-full max-w-sm px-5">
          <DrawerFooter>
            <DrawerClose asChild>
              <div className="flex items-center justify-between w-full ">
                <h2 className="text-xl uppercase font-bold font-oswald">
                  shop.co
                </h2>
                <button className="ml-auto text-black cursor-pointer">✕</button>
              </div>
            </DrawerClose>
          </DrawerFooter>

          <div className="p-4 pb-0"></div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
