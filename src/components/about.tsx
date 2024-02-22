import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            dolorem atque ad nemo, non delectus. Harum, iure tempora deleniti
            vel nisi corrupti. Mollitia accusamus quas temporibus quibusdam
            natus voluptas consequuntur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nihil deserunt alias officia architecto, quaerat
            rerum tenetur eum voluptatum reprehenderit officiis quod aspernatur
            iusto incidunt debitis, laboriosam saepe ex cum? Excepturi. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ratione cumque
            consectetur beatae quidem odio voluptatem doloremque autem empora
            magnam porro maiores rem eum vel aspernatur ipsam, reiciendis
            voluptate officiis voluptates. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Pariatur esse ducimus vel porro
            impedit quidem minus repellendus optio, obcaecati modi mollitia
            cumque recusandae quibusdam. Exercitationem illum nisi adipisci
            consequuntur eligendi! Dolorem dolore, illo laudantium officia ut
            provident expedita autem similique amet numquam excepturi qui
            ducimus quas impedit libero tempore? Dolore corporis nesciunt magni
            repellendus ullam officia unde repellat deleniti nam. Ut molestias,
            vitae autem repudiandae, harum qui saepe beatae cumque nam fugiat
            explicabo delectus tempora voluptates ducimus quidem animi
            consectetur ipsam accusantium assumenda non aliquid corporis libero!
            Repellat, provident totam? Rem, fuga! Quam unde natus deleniti sit
            magni sed sequi quibusdam delectus hic harum. Eos a libero,
            voluptatem deserunt repellat necessitatibus totam quas nobis
            voluptate veritatis omnis, quibusdam amet minus? Labore magnam,
            laborum odio deserunt possimus, fuga mollitia eum non ab accusamus
            repellendus vero illum eveniet vel sint beatae necessitatibus dolore
            esse cum maxime autem? Totam repudiandae consequuntur asperiores
            earum. Modi aperiam aliquam maxime suscipit cupiditate mollitia?
            Necessitatibus aliquam suscipit perspiciatis, harum laborum, at
            inventore dolor possimus veniam dolorem nisi laudantium sint
            temporibus illo similique eveniet. Nostrum maxime ab asperiores.
            Ipsum quisquam sed amet unde. Molestias soluta temporibus nulla
            earum beatae dolorem iure asperiores tempore provident fuga, illum
            magnam veritatis similique? Quo ratione eum temporibus hic ea vitae
            totam tempore! Asperiores dolores dignissimos in nesciunt quidem,
            quaerat itaque iste corrupti quae accusantium sed? Fuga, officia
            aliquam sint nostrum, maiores qui placeat veniam ullam amet
            excepturi neque saepe, aliquid quas molestias? Reprehenderit error
            aperiam odio, soluta veniam veritatis iure asperiores ab labore at
            reiciendis ullam quo excepturi quis, omnis perspiciatis doloribus
            quam deserunt vel, ratione earum modi! Commodi distinctio
            necessitatibus nemo. Dolorum nemo, odio sunt eius nulla
            necessitatibus incidunt architecto hic! Libero corporis officia
            assumenda accusantium temporibus doloremque neque asperiores nemo
            laudantium architecto, sint, aliquid quibusdam ducimus sed. Saepe,
            eveniet similique?
          </p>
        </section>
        <section className="md:w-[35%] space-y-4">
          <h1 className="text-lg md:text-2xl text-[#CD1739]">
            {" "}
            IMPORTANT DATES
          </h1>
        <p>  Paper Submission Deadline:{" "}
          <span className="font-bold">15th March, 2024</span>
          <hr className="w-0" />
          Notification of Acceptance:{" "}
          <span className="font-bold">15th April, 2024 </span>{" "}
          <hr className="w-0" />
          Camera Ready Deadline:{" "}
          <span className="font-bold">30th June, 2024</span>
          <hr className="w-0" />
          Conference Dates:
          <span className="font-bold"> 29-31, August, 2024</span></p>
        </section>
      </main>
    </MaxWidthWrapper>
  );
}
