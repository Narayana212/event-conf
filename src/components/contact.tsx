import React from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import { CircleUser, Mail, PhoneCall } from 'lucide-react';
import { contact } from '../../content/contact';

export default function Contact() {
  const { name, gmail } = contact;

  const contacts = [
    { icon: <CircleUser className='h-14 w-14 border rounded-full p-3' />, label: 'Student POC:', value: name },
    { icon: <Mail className='h-14 w-14 border rounded-full p-3' />, label: 'Email:', value: gmail },
    { icon: <Mail className='h-14 w-14 border rounded-full p-3' />, label: 'Dr. Shabana Mitra', value: 'shabana.mitra@snu.edu.in' },
    { icon: <Mail className='h-14 w-14 border rounded-full p-3' />, label: 'Dr. Balamurugan Balusamy', value: 'balamurguan.balusamy@snu.edu.in' },
  ];

  return (
    <div id="contact" className='w-screen bg-[#CD1739]'>
      <MaxWidthWrapper className='w-full pb-10 rounded-md text-gray-100 bg-[#CD1739] '>
        <h1 className='text-center font-semibold pt-3 text-xl md:text-3xl'>CONTACT US</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 p-3'>
          {contacts.map((contact, index) => (
            <div key={index} className='flex flex-col justify-center items-center'>
              {contact.icon}
              <p className='font-semibold text-sm'>{contact.label}</p>
              <hr className='w-2/3 my-1 border-t border-gray-300' />
              <p className='font-normal'>{contact.value}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
