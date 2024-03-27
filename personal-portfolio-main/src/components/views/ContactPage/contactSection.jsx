import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useRouter } from 'next/router';


export default function ContactSection() {

    const Links = {
        social: [
            {
                id:1,
                name: 'Linkedin',
                href: 'https://www.linkedin.com/in/jorris-nyange/',
                icon: (props) => (
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15" {...props}>
                    <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"/>
                    <path d="M3 5.012H0V15h3V5.012Z"/>
                  </svg>
                ),
            },
            {
                id:2,
                name: 'Github',
                href: 'https://github.com/Jorris-N',
                icon: (props) => (
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" {...props}>
                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                    </svg>
                ),
            },
            {
                id:3,
                name: 'X',
                href: 'https://twitter.com/JNCodeWorks',
                icon: (props) => (
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
                    <path stroke="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>
                  </svg>
                ),
            },
        ]
    }

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isSuccess, setIsSuccess] = useState(false);
      const [errorMessage, setErrorMessage] = useState('');
      const router = useRouter();
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            setIsSubmitting(true); //show submitting state
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.status === 200) {
              setIsSuccess(true);
              setErrorMessage('');
              setIsSubmitting(false);
              setFormData({
                full_name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
              });
            } else {
              const data = await response.json();
              setErrorMessage('We encountered an error while sending your message. Please try again later.');
              setIsSubmitting(false);
            }
          } catch (error) {
            console.error('Error:', error);
            setErrorMessage('We encountered an error while sending your message. Please try again later.');
            setIsSubmitting(false);
          }
        };
    
        const handleChange = (e) => {
            if (e.target) {
              // For regular input fields
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            } else {
              // For PhoneInput component
              setFormData({
                ...formData,
                phone: e, // e is the phone number value
              });
            }
          };

          if (isSuccess) {
            // Redirect to the success page
            router.push('/success');
          
            // Return null to prevent rendering the form
            return null;
          }

  return (
    <div className='bg-white'>
    <div className='lg:w-10/12 mx-auto px-6'>

<div className="container mx-auto">
            <div className="lg:flex">
                <div className="xl:w-2/5 lg:w-2/5 bg-white py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none ">
                    <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 className="xl:text-4xl text-3xl pb-4 text-[#0a0e27] font-bold">Get in Touch</h1>
                        <p className="text-[15px] text-neutral-600 pb-8 leading-relaxed font-normal lg:pr-4">Have questions or need assistance? I am here to help. Whether you wish to discuss new ideas or have a project for me, simply fill this form and I’ll get back to you soon.</p>
                        <div className='flex space-x-1 items-center pb-4'>
                                <Link href={"https://wa.me/message/XD4CUFFE6TZ7K1"} target={'_blank'} className="text-md ease-in-out text-neutral-600 duration-300 hover:cursor-pointer hover:text-[#c51b23] flex space-x-3 items-center leading-6"><span><svg id="my-float" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></span><span>+254 734 007 656</span></Link>
                                </div>
                                <div className={"flex space-x-3 pb-4"}>
                                   <Link href={"tel://+254723942143"} target={'_blank'} className="text-md text-neutral-600 ease-in-out duration-300 hover:cursor-pointer hover:text-[#c51b23] flex space-x-3 items-center leading-6"><span><svg className="w-6 h-6 tfill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg></span><span>+254 723 942 143</span></Link>
                               </div>
                               <div className='flex space-x-1 items-center pb-4'>
                                    <Link href={"mailto:nyangejorris@gmail.com"} target={'_blank'} className="text-md text-neutral-600 ease-in-out duration-300 hover:cursor-pointer hover:text-[#c51b23] flex space-x-3 items-center leading-6"> <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span><span>nyangejorris@gmail.com</span></Link>
                                </div>


                        <div className='space-y-2 pb-8'>
                            <h5 className={'capitalize font-semibold text-[#1f2e4e] text-lg'}>opening hours</h5>
                            <p className='text-neutral-600 text-base'> Monday - Friday, <br /> 07:00 - 18:00 </p>
                            {/* <p className='text-neutral-600 text-base'><strong>Time:</strong> 08:00 - 19:00</p> */}
                        </div>
                        <div className={'flex items-center space-x-8'}>
                            {Links.social.map((item) => (
                                <Link href={item.href} target={'_blank'} key={item.id} className={'h-10 w-10 flex items-center justify-center text-[#1f2e4e] hover:text-[#c51b23] eas-in-out duration-300'}>
                                    <item.icon className={'h-8 w-8'} aria-hidden={'true'}/>
                            </Link>
                            ))}
                        </div>

                       
                    </div>
                </div>
                <div className="xl:w-3/5 lg:w-3/5 bg-white h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                <div className='py-24  justify-center text-center items-center'>
                    <form onSubmit={handleSubmit} id="contact" className="bg-white border py-6 px-8 rounded-lg">
                        <h1 className="text-2xl text-[#0a0e27] font-bold mb-6">Leave your Message</h1>
                        <div className="grid md:grid-cols-2 w-full flex-wrap justify-between mb-6">
                            <div className="w-full max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="full_name" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Full Name
                                    </label>
                                    <input required id="full_name" value={formData.full_name} onChange={handleChange} name="full_name" type="text" className="focus:outline-none focus:border focus:border-[#1f2e4e] font-normal w-64 h-10 flex items-center pl-3 text-sm border-neutral-300 rounded border" placeholder />
                                </div>
                            </div>
                            <div className="w-full max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Email
                                    </label>
                                    <input required id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="focus:outline-none focus:border focus:border-[#1f2e4e] font-normal w-64 h-10 flex items-center pl-3 text-sm border-neutral-300 rounded border" placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 w-full flex-wrap justify-between mb-6">
                            <div className="w-full max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Phone
                                    </label>
                                    <PhoneInput name="visitor_phone" inputProps={{required: true, autoFocus: true, className: "focus:outline-none focus:border focus:border-[#1f2e4e] font-normal w-64 h-10 flex items-center pl-12 text-sm border-neutral-300 rounded border"}} value={formData.phone} onChange={handleChange} country={'ke'}/>
                                </div>
                            </div>
                            <div className="w-full max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label htmlFor="subject" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Subject
                                    </label>
                                    <input required id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} className="focus:outline-none focus:border focus:border-[#1f2e4e] font-normal w-64 h-10 flex items-center pl-3 text-sm border-neutral-300 rounded border" placeholder/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="flex flex-col pb-4">
                                <label className="text-sm  font-semibold text-neutral-600 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea placeholder  name="message" value={formData.message} onChange={handleChange} className="border-neutral-300 border mb-4 rounded py-2 w-64 md:w-full text-sm outline-none resize-none px-3 focus:border focus:border-[#1f2e4e]" rows={8} id="message" defaultValue={""} />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="focus:outline-none border-2 border-stone-500 text-stone-500 hover:bg-white ease-in-out duration-300 hover:text-[#c51b23] hover:border-[#c51b23] rounded px-8 py-3 text-sm leading-6">
                                 {isSubmitting ? (    <div className="flex flex-col items-center space-y-0.5 justify-center"> <span className='text-[#1f2e4e]'>Sending</span> <span className='loader'></span> </div>) : 'Send a Message'}
                            </button>
                            <div className='w-full mx-auto items-center text-center py-4 text-red-500 font-bold'>{errorMessage}</div>
                        </div>
                        
                    </form>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}