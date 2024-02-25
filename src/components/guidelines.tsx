import React from "react";
import { conferenceGuidelines, eligibility } from "../../content/paper";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const Guidelines = () => {
  return (
    <main id="guidelines" className="pb-10">
      <h1 className="text-[#CD1739] text-lg">Guidelines</h1>
      <ul className=" mt-3 flex flex-col justify-center list-disc marker:text-[#CD1739] ">
        {conferenceGuidelines.map((guidelines) => (
          <li key={guidelines.id}>{guidelines.point}</li>
        ))}
      </ul>

      <h1 className="text-[#CD1739] text-lg mt-5">Eligibility</h1>
      <ul className=" mt-3 flex flex-col justify-center list-disc marker:text-[#CD1739] ">
        {eligibility.map((guidelines) => (
          <li key={guidelines.id}>{guidelines.point}</li>
        ))}
      </ul>

      <h1 className="text-[#CD1739] text-lg mt-5">Submission</h1>

      <div className="flex gap-x-5 mt-3 items-center">
        <Button size={"sm"}>
          Submit Paper

        </Button>

        <Link href="/template.docx" download className={buttonVariants({variant:"secondary",size:"sm"})}>

          Download Template
        </Link>
       

      </div>
     
     
    </main>
  );
};

export default Guidelines;
