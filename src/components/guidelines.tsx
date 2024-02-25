import React from 'react';
import {conferenceGuidelines} from "../../content/paper"


const Guidelines = () => {
  

  return (
    <main className=' h-screen' id="guidelines">
      <h1 className='text-[#CD1739] text-lg'>Guidelines</h1>
      <ul className=' mt-3 flex flex-col justify-center list-disc '  >
        {conferenceGuidelines.map((guidelines) =>(
          <li key={guidelines.id}>
            {guidelines.point}
          </li>
        ))}

        
      </ul>
    </main>
  );
};

export default Guidelines;
