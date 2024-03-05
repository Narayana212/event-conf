import React from 'react';
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Team() {
  return (
    <MaxWidthWrapper className="pt-5 pb-5 w-screen">
      <main className="gap-5 w-full md:flex-row">
        <section className="flex flex-col items-center justify-center space-y-3">
          <h1 className="md;text-4xl text-2xl text-[#CD1739] font-bold">OUR TEAM</h1>

          <p className=" text-base leading-relaxed">
            Team Members:
            <br />Student Chair: Aneesh Kandrakota
            <br />Website Developer: Narayana Raavi
            <br />Curation Leads: Joella Jose, Devansh Asthana
            <br />Design Leads: Aryaman Sen, Mahitha Prasanna
            <br />Content Leads: Suditi Sundaram, Manasvi Vedanta
            <br />Marketing & PR Leads: Noor Walia, Sanskriti Garg
            <br />Curation Panelists: Rudraksh Jawade, Sreelakshmi, Diwakar G, Malaika Dara
          </p>
        </section>
      </main>
    </MaxWidthWrapper>
  );
}
