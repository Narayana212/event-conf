"use client";

import Link from "next/link";

import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import MobileNav from "./mobile-nav";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Links = [
  { id: 0, href: "/", title: "Home" },
  { id: 1, href: "/themes", title: "Themes" },
  { id: 2, href: "#contact", title: "Contact Us" },
  { id: 3, href: "/team", title: "Team" },
];

const Navbar = async () => {
  const pathname = usePathname();

  return (
    <nav className="sticky h-20 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="  flex h-20 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <Image alt="logo" src="/logo.svg" width={150} height={150} />
          </Link>

          <MobileNav />

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              {Links.map((link) => (
                <Link key={link.id} href={link.href}>
                  <p
                    className={`hover-link text-sm font-medium overflow-hidden relative  ${
                      pathname === link.href ? "active-link" : ""
                    }`}
                  >
                    {link.title}
                  </p>
                </Link>
              ))}

              <Link
                href="/paper"
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                })}
              >
                Paper Submission
              </Link>

              <Button disabled size={"sm"} variant={"secondary"}>
                Speakers & Schedule
              </Button>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
