"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Links = [
  { id: 0, href :"/", title: "Home" },
  { id: 1, href: "/themes", title: "Themes" },
  { id: 2, href: "/contact", title: "Contact Us" },
  { id: 3, href: "/team", title: "Team" },
];
const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className="sm:hidden">
      <Menu
        onClick={toggleOpen}
        className="relative z-50 h-5 w-5 text-zinc-700"
      />

      {isOpen ? (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <ul className="absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            {Links.map((item, index) => (
              <li key={index}>
                <div>
                  <Link
                    onClick={() => closeOnCurrent(item.href)}
                    className={`flex items-center w-full font-semibold ${
                      pathname === item.href ? "text-[#CD1739]" : ""
                    }`}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </div>
                {index < Links.length - 1 && (
                  <div className="my-3 h-px w-full bg-gray-300" />
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
