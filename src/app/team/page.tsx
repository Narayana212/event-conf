import React from 'react';
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Team() {
  return (
    <MaxWidthWrapper className="pt-8 pb-8 w-screen">
      <main className="flex flex-col items-center gap-8 w-full md:flex-row">
        <section className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-5xl md:text-3xl text-[#CD1739] font-semibold mb-4">OUR TEAM</h1>

          <div className="text-lg leading-relaxed">
            <p className="mb-2">
              <strong>Convenor:</strong> Dr Partha Chatterjee
            </p>
            <p className="mb-2">
              <strong>Co-Convenors:</strong> Dr Shabana Mitra, Dr Ankur Mehra, Dr Ajit Kumar, Dr Balamurugan Balusamy
            </p>
            <p className="mb-2">
              <strong>Student Chair:</strong> Aneesh Kandrakota
            </p>
            <p className="mb-2">
              <strong>Website Developer:</strong> Narayana Raavi
            </p>
            <p className="mb-2">
              <strong>Curation Leads:</strong> Joella Jose, Devansh Asthana
            </p>
            <p className="mb-2">
              <strong>Design Leads:</strong> Aryaman Sen, Mahitha Prasanna
            </p>
            <p className="mb-2">
              <strong>Content Leads:</strong> Suditi Sundaram, Manasvi Vedanta
            </p>
            <p className="mb-2">
              <strong>Marketing & PR Leads:</strong> Noor Walia, Sanskriti Garg
            </p>
            <p className="mb-2">
              <strong>Curation Panelists:</strong> Rudraksh Jawade, Sreelakshmi, Diwakar G, Malaika Dara
            </p>
          </div>
        </section>
      </main>
    </MaxWidthWrapper>
  );
}
