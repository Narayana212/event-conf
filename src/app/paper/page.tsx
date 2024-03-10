import React from "react";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Guidelines from "@/components/guidelines";

export default async function Paper() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col h-[calc(100vh-5rem)] justify-center items-center  gap-6    ">
        <h1 className="text-black lg:text-7xl text-4xl font-[600] text-center">
          Paper Submission
        </h1>

        <div className="flex gap-3  pt-5 items-center">
          <Link
            href="https://cmt3.research.microsoft.com/SUMMIT2024"
            target="_blank"
          >
            <Button>Submit Paper</Button>
          </Link>

          <Link
            href="/paper#guidelines"
            className={cn(
              buttonVariants({ variant: "link" }),
              "flex items-center gap-2 font-semibold group"
            )}
          >
            View Guidelines{" "}
            <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-all " />
          </Link>
        </div>
      </div>

      <Guidelines />
    </MaxWidthWrapper>
  );
}
