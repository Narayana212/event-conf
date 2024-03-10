import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { date, org, title } from "../../content/home";
import { Calendar, CalendarDays, CalendarFold } from "lucide-react";

export default function Hero() {
  return (
    <div className=" h-[60vh] md:h-[70vh]  w-screen hero-back">
      <MaxWidthWrapper className="pt-10 w-screen flex flex-col gap-y-5  justify-center items-center ">
        <div className="flex items-center gap-x-5  divide-x-2 divide-red-500">
          <Image alt="logo" src="/finallogo.png" width="150" height={"150"} />
          <div className="flex flex-col gap-y-3 pl-10">
            <h3 className="font-semibold   text-sm ">ORGANISED BY:</h3>
            <Image alt="univer" src="/logo.svg" width="200" height="200" />
          </div>
        </div>

        <h1 className="text-[#CD1739] mt-7 text-center font-semibold md:text-[2rem] text-xl">
          {title}
        </h1>

        <p className=" font-bold flex items-center gap-x-2  ">
          <CalendarDays className="  w-5 h-5" />
          {date}
        </p>
        <div className="items-center flex gap-x-5">
          <Link
            href="/paper"
            className={buttonVariants({
              variant: "default",
              size: "lg",
            })}
          >
            Paper Submission
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSd10u-Rvd945GeY3XzTNwNbwq0xBOsiBNOsIQ4eP9o9Lq-5LQ/closedform"
            className={buttonVariants({
              variant: "secondary",
              size: "lg",
            })}
            target="_blank"

          >
            Registration
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
