import React, { useRef, useState } from 'react'
import { SectionHeading } from '../../components'
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const contact = () => {
    const [acceptTerms, setAcceptTerms] = useState(false);
    const name = useRef('');
    const email = useRef('');
    const [message, setMessage] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        setMessage(event.target.value);
        if (!isTouched) {
          setIsTouched(true);
        }
    };

    const handleSubmit = async (e) => {
        setIsLoading(true);
        setIsTouched(false);
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name.current.value);
        formData.append('email', email.current.value);
        formData.append('message', message);
        try {
            const response = await fetch('https://public.herotofu.com/v1/d19abc40-2a94-11ef-baa4-2f3d60870fc4', {
                method: 'POST',
                body: formData,
            });
                toast.success('Email sent successfully!');
                setMessage('');
        }catch(error) {
            toast.error('An error occurred while sending the email.');
            console.error(error);
        }finally {
            setIsLoading(false);
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
            <form accept-charset="UTF-8" className='flex flex-col items-start gap-5' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3 w-full'>
                    <label htmlFor="name"> Name</label>
                    <input type="text" name="name" id="name" ref={name} className='border border-[#3C5065] p-2 rounded-lg' disabled={isLoading} />

                    <label htmlFor="email"> Email</label>
                    <input type="email" name="email" id="email" ref={email} className='border border-[#3C5065] p-2 rounded-lg' disabled={isLoading}/>

                    <label htmlFor="message"> Message</label>
                    <textarea name="message" rows={5} placeholder='Type your message' id="message" value={message} onChange={handleChange} className='border border-[#3C5065] p-2 rounded-lg' disabled={isLoading} />
                    {isTouched && !message && <p className="text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oops!</span> message is required!</p>}

                </div>
                <div className='flex items-center mt-4'>
                    <input type="checkbox" id="terms" name='terms' className='mr-2' onChange={(e) => setAcceptTerms(e.target.checked)} />
                    <label htmlFor="terms">I accept the terms</label>
                </div>
                <button className={`bg-[#3C5065] text-white rounded-xl p-2 w-24 ${!acceptTerms || !message ? 'opacity-70' : ''}`} disabled={!acceptTerms || !message}>{isLoading ? 
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div> : 'Submit'} 
                </button>
            </form>
        </div>
    </div>
  )
}

export default contact
