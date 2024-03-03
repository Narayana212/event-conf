import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import {about} from '../../content/about'

export default function About() {
  return (
    <MaxWidthWrapper className="pt-5 pb-5 w-screen">
      <main className="flex flex-col gap-5 w-full md:flex-row">
        <section className="md:w-[65%] space-y-3">
          <h1 className="text-lg md:text-2xl text-[#CD1739]">
            ABOUT THE CONFERENCE
          </h1>

          <p>
            {" "}
            {about}
          </p>
        </section>
        <section className="md:w-[35%] space-y-4">
          <h1 className="text-lg md:text-2xl text-[#CD1739]">
            {" "}
            IMPORTANT DATES
          </h1>
        <div>  Paper Submission Deadline:{" "}
          <span className="font-bold">23rd March, 2024</span>
          <hr className="w-0" />
          Registration Deadline:{" "}
          <span className="font-bold">1st April, 2024</span>
          <hr className="w-0" />
          Conference Date:
          <span className="font-bold"> 20th April, 2024</span></div>
        </section>
      </main>
    </MaxWidthWrapper>
  );
}
