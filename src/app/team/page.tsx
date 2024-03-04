import React from 'react'
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Team() {
  return (
    <MaxWidthWrapper className="pt-5 pb-5 w-screen ">
      <main className=" gap-5 w-full md:flex-row">
        <section className=" flex flex-col  items-center justify-center space-y-3">
          <h1 className="text-lg md:text-2xl text-[#CD1739]">OUR TEAM</h1>

          <p>Team Members</p>
        </section>
      </main>
    </MaxWidthWrapper>
  );
}
