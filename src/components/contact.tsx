import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import { CircleUser, Mail, PersonStanding, Phone, PhoneCall } from 'lucide-react'

import {contact } from '../../content/contact'
export default function Contact() {
    const {name,gmail,phone} =contact
  return (
    <div id="contact " className='w-screen bg-[#CD1739]'>
        <MaxWidthWrapper  className='  w-full pb-10 rounded-md text-gray-100 bg-[#CD1739] '>
        <h1 className='text-center font-semibold pt-3 text-xl md:text-3xl '>CONTACT US</h1>

        <div className='flex flex-col md:flex-row w-full justify-evenly gap-10 mt-10 items-center p-3'>
            <div className='flex flex-col justify-center items-center'>
                <CircleUser className='h-14 w-14 border rounded-full p-3'/>
                <p className='font-semibold text-sm'>Student POC: </p>
                <hr />
                <p className='font-normal'>{name}</p>
            </div>
           
            <div className='flex flex-col  gap-y-1 justify-center items-center'>
                <Mail className='h-14 w-14 border rounded-full p-3'/>
                <p className='text-sm'>{gmail}</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <PhoneCall className='h-14 w-14 border rounded-full p-3'/>
                <p className='text-sm'>{phone}</p>
            </div>
        </div>
    </MaxWidthWrapper>
    </div>
  )
}
