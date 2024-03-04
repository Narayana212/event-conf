import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import {date, org, title} from "../../content/home"

export default function Hero() {
  return (
    <div className=" h-[60vh] md:h-[70vh]  w-screen hero-back">
      <MaxWidthWrapper className="pt-5 w-screen flex gap-x-5  items-start ">
        <div className="w-[100%] md:w-[50%] mt-5 rounded-md bg-white p-5 bg-opacity-65">
        <h1 className="text-[#CD1739]  m font-semibold md:text-2xl text-base">
         {title}
        </h1>

        <p className=" text-lg md:text-3xl   font-bold w-[100%] md:w-[50%]">
          {date}
        </p>
        <div className="flex items-center gap-x-5 ">
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
        </div>
        <div className="hidden md:block">
         <Image alt="logo" src='/finallogo.png' className="" width={"500"} height="500"/>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
