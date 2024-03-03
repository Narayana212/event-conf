import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import {date, org, title} from "../../content/home"

export default function Hero() {
  return (
    <div className=" h-[60vh] md:h-[70vh]  w-screen hero-back">
      <MaxWidthWrapper className="pt-5 w-screen flex gap-y-5 flex-col items-start ">
        <h1 className="text-[#CD1739]  w-[100%] md:w-[50%] font-semibold md:text-2xl text-base">
         {title}
        </h1>

        <p className=" text-lg md:text-3xl font-bold w-[100%] md:w-[50%]">
          {date}
        </p>
        <div className="flex items-center gap-x-5 w-[100%] md:w-[50%]">
          <Image alt="logo" src="/logo.svg" width={150} height={150} />
          <div className="flex flex-col gap-y-3">
            <h3 className="font-semibold     text-sm md:text-lg">ORGANISED BY:</h3>
            <p>
              {org}
            </p>
          </div>
        </div>

        <Link
          href="/paper"
          className={buttonVariants({
            variant: "default",
            size: "lg",
          })}
        >
          Paper Submission
        </Link>
      </MaxWidthWrapper>
    </div>
  );
}
