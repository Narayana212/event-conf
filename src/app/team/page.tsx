import React from 'react'
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Team() {
  return (
    <MaxWidthWrapper className="pt-5 pb-5 w-screen ">
      <main className=" gap-5 w-full md:flex-row">
        <section className=" flex flex-col  items-center justify-center space-y-3">
          <h1 className="text-lg md:text-2xl text-[#CD1739]">OUR TEAM</h1>

          <p>Team Members:<br>Student Chair: Aneesh Kandrakota<br>Website Developer: Narayana Ravi
          <br>Curation Leads: Joella Jose, Devansh Asthana<br>Design Leads: Aryaman Sen, Mahitha Prasanna<br>
          Content Leads: Suditi Sundaram, Manasvi Vedanta<br>Marketing & PR Leads: Noor Walia, Sanskriti Garg
          <br>Curation Panelists: Rudraksh Jawade, Sreelakshmi, Diwakar G, Malaika Dara</p>
        </section>
      </main>
    </MaxWidthWrapper>
  );
}
