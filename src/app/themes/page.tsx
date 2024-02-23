import MaxWidthWrapper from "@/components/max-width-wrapper";
import { ThemeAcc } from "@/components/theme-acc";
import React from "react";

export default function Theme() {
  return (
    <MaxWidthWrapper className="pt-5 pb-5 w-screen ">
      <main className=" gap-5 w-full md:flex-row">
        <section className=" flex flex-col  items-center justify-center space-y-3">
          <h1 className="text-lg md:text-2xl text-[#CD1739]">ABOUT THEMES</h1>

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
      </main>


      <ThemeAcc/>
    </MaxWidthWrapper>
  );
}
