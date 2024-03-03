import MaxWidthWrapper from "@/components/max-width-wrapper";
import { ThemeAcc } from "@/components/theme-acc";
import React from "react";
import { aboutTheme } from "../../../content/about";

export default function Theme() {
  return (
    <MaxWidthWrapper className="pt-5 pb-5 w-screen ">
      <main className=" gap-5 w-full md:flex-row">
        <section className=" flex flex-col  items-center justify-center space-y-3">
          <h1 className="text-lg md:text-2xl text-[#CD1739]">ABOUT THEMES</h1>

          <p>{aboutTheme}</p>
        </section>
      </main>

      <ThemeAcc />
    </MaxWidthWrapper>
  );
}
