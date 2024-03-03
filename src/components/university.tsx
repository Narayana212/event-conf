import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { aboutUni } from "../../content/about";

export default function University() {
  return (
    <MaxWidthWrapper className="bg-gray-100 flex  flex-col md:flex-row gap-5 w-screen pt-5 pb-5">
      <section className="md:w-[50%] w-full space-y-3">
        <h1 className="text-lg md:text-2xl text-[#CD1739]">
          ABOUT THE UNIVERSITY
        </h1>

        <p> {aboutUni}</p>
      </section>
      <Image
        alt="university"
        src="/uni.jpg"
        width={100}
        height={100}
        quality={100}
        className=" md:w-[50%] w-full rounded-md"
      />
    </MaxWidthWrapper>
  );
}
