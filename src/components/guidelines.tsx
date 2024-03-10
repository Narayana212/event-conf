import React from "react";
import { conferenceGuidelines, eligibility } from "../../content/paper";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const Guidelines = () => {
  const renderGuidelines = (guidelinesArray: { id: React.Key | null | undefined; point: any; }[]) => {
    return guidelinesArray.map((guidelines: { id: React.Key | null | undefined; point: any; }) => (
      <li key={guidelines.id} dangerouslySetInnerHTML={{ __html: guidelines.point }} />
    ));
  };

  const renderEligibilityPoints = () => {
    return eligibility.map((guidelines) => (
      <li key={guidelines.id} dangerouslySetInnerHTML={{ __html: guidelines.point }} />
    ));
  };

  return (
    <main id="guidelines" className="pb-10">
      <h1 className="text-[#CD1739] text-lg">Guidelines</h1>
      <ul className="mt-3 flex flex-col justify-center list-disc marker:text-[#CD1739] ">
        {renderGuidelines(conferenceGuidelines)}
      </ul>

      <h1 className="text-[#CD1739] text-lg mt-5">Paper Format</h1>
      <ul className="mt-3 flex flex-col justify-center list-disc marker:text-[#CD1739] ">
        {renderEligibilityPoints()}
      </ul>

      <h1 className="text-[#CD1739] text-lg mt-5">Submission</h1>

      <div className="flex gap-x-5 mt-3 items-center">
        <Link href="https://cmt3.research.microsoft.com/SUMMIT2024" target="_blank">
          <Button size={"sm"}>Submit Paper</Button>
        </Link>

        <Link href="/SUMMIT-Conference-template-a4.docx" download className={buttonVariants({ variant: "secondary", size: "sm" })}>
          Download Template
        </Link>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSd10u-Rvd945GeY3XzTNwNbwq0xBOsiBNOsIQ4eP9o9Lq-5LQ/closedform"
          className={buttonVariants({ variant: "outline" })}
          target="_blank"
        >
          Registration
        </Link>
      </div>
    </main>
  );
};

export default Guidelines;

