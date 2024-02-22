import Link from "next/link";

import { buttonVariants } from "./ui/button";

import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import MobileNav from "./mobile-nav";
import Image from "next/image";

const Navbar = async () => {
  return (
    <nav className="sticky h-20 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="  flex h-20 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <Image alt="logo" src="/logo.svg" width={150} height={150}/>
          </Link>

          <MobileNav />

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/paper"
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                })}
              >
                Paper Submission
              </Link>
              <Link
                href="/themes"
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                })}
              >

                Themes
                
              </Link>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
