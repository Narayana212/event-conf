import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function University() {
  return (
    <MaxWidthWrapper className="bg-gray-100 flex  flex-col md:flex-row gap-5 w-screen pt-5 pb-5">
      <section className="md:w-[50%] w-full space-y-3">
        <h1 className="text-lg md:text-2xl text-[#CD1739]">
          ABOUT THE UNIVERSITY
        </h1>

        

        <p>
          {" "}
          The Shiv Nadar Institution of Eminence is a multidisciplinary,
          student-centric research university established in 2011 by Shiv Nadar,
          one of India&apos;s foremost philanthropists and a pioneer of
          technological revolution. It has four Schools, viz., Engineering,
          Natural Sciences, Humanities and Social Sciences, Management &
          Entrepreneurship, and the Academy of Continuing Education. We were the
          first university in the country to offer a 4-year multidisciplinary
          research degree. Today, we are continuing as trailblazers with new
          kinds of curriculum, championed by faculty drawn from some of the top
          institutions in the country and the world. With low faculty-student
          ratios, their in-depth attention to students lead to high levels of
          student success.
        </p>
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
