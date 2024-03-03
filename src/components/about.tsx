import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { about } from "../../content/about";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <MaxWidthWrapper className="pt-5 pb-5 w-screen">
      <main className="flex flex-col gap-5 w-full md:flex-row">
        <section className="md:w-[65%] space-y-3">
          <h1 className="text-lg md:text-2xl text-[#CD1739]">
            ABOUT THE CONFERENCE
          </h1>

          <p> {about}</p>
        </section>
        <section className="md:w-[35%] space-y-4">
          <h1 className="text-lg md:text-2xl text-[#CD1739]">
            {" "}
            IMPORTANT DATES
          </h1>
          <div>
            {" "}
            Paper Submission Deadline:{" "}
            <span className="font-bold">15th March, 2024</span>
            <hr className="w-0" />
            Notification of Acceptance:{" "}
            <span className="font-bold">15th April, 2024 </span>{" "}
            <hr className="w-0" />
            Camera Ready Deadline:{" "}
            <span className="font-bold">30th June, 2024</span>
            <hr className="w-0" />
            Conference Dates:
            <span className="font-bold"> 29-31, August, 2024</span>
          </div>
          <h1 className="text-lg md:text-xl text-[#CD1739]"> LOCATION</h1>

          <Link target="_blank" href="https://www.google.com/maps/place/Shiv+Nadar+University/@28.5266241,77.5732972,17.3z/data=!4m14!1m7!3m6!1s0x390c94db9a81fb91:0xf5f4d7686cc71561!2sShiv+Nadar+University+Research+Annexe!8m2!3d28.5274142!4d77.5782609!16s%2Fg%2F1tfdbvfb!3m5!1s0x390ceb4eaaaaaaab:0x321412756718874c!8m2!3d28.5267298!4d77.575363!16s%2Fm%2F0k8ylqf?entry=ttu">
            <Image className="rounded-md border border-[#CD1739]" alt="map" src="/map.png" width="300" height="100" />
          </Link>
        </section>
      </main>
    </MaxWidthWrapper>
  );
}
