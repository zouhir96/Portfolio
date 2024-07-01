import React, { useState } from 'react'
import { SectionHeading } from '../../components'
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const contact = () => {
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [message, setMessage] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const handleChange = (event) => {
        setMessage(event.target.value);
        if (!isTouched) {
          setIsTouched(true);
        }
    };
  return (
    <div className="flex flex-col p-8 gap-7" id="contact">
        <SectionHeading
            title="Contact Us"
            subtitle="Get in Touch"
            description="If you have any questions or would like to work with me, feel free to reach out. <br> I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
        />
        <div className='flex flex-col gap-7 justify-around md:grid grid-cols-2 md:gap-0 px-6 mt-9'>
            <div className='flex flex-col gap-2'>
                <h6 className='font-bold text-sm'>Let's Connect</h6>
                <h2 className='text-3xl font-bold'>Reach Out</h2>
                <p className='font-semibold text-sm'>feel to contact me for any kind of queries, suggestions or collaborations.</p>
                <div className='flex items-center gap-3 mt-6'>
                    <IoMdMail className='text-xl mt-1' />
                    <p>rajdaouizouhir.pro@gmail.com</p>
                </div>
                <div className='flex items-center gap-3 mt-4'>
                    <MdLocalPhone className='text-xl mt-1' />
                    <p>+212-36451275</p>
                </div>
                <div className='flex items-center gap-3 mt-4'>
                    <FaLocationDot className='text-xl mt-1' />
                    <p>Paris, France</p>
                </div>
            </div>
            <form action="https://public.herotofu.com/v1/d19abc40-2a94-11ef-baa4-2f3d60870fc4" method="post" accept-charset="UTF-8" className='flex flex-col items-start gap-5'>
                <div className='flex flex-col gap-3 w-full'>
                    <label htmlFor="name"> Name</label>
                    <input type="text" name="name" id="name" className='border border-[#3C5065] p-2 rounded-lg' />

                    <label htmlFor="email"> Email</label>
                    <input type="email" name="email" id="email" className='border border-[#3C5065] p-2 rounded-lg' />

                    <label htmlFor="message"> Message</label>
                    <textarea name="message" rows={5} placeholder='Type your message' id="message" onChange={handleChange} className='border border-[#3C5065] p-2 rounded-lg' />
                    {isTouched && !message && <p className="text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> message is required!</p>}

                </div>
                <div className='flex items-center mt-4'>
                    <input type="checkbox" id="terms" name='terms' className='mr-2' onChange={(e) => setAcceptTerms(e.target.checked)} />
                    <label htmlFor="terms">I accept the terms</label>
                </div>
                <button className={`bg-[#3C5065] text-white rounded-xl p-2 px-6 ${!acceptTerms || !message ? 'opacity-70' : ''}`} disabled={!acceptTerms || !message}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default contact
