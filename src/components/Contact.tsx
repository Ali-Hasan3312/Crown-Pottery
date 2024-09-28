import { forwardRef } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const Contact =  forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  return (
    <>
 
        <div ref={ref} className=" py-12 bg-aboutbg">
        <h1 className=" text-2xl uppercase font-semibold text-center pb-4 tracking-wider text-black">Get In Touch</h1>
        <div className=" h-[600px] grid grid-cols-[70%_30%] w-[80%] mx-auto shadow-lg mt-4">
        <div className=" bg-white">
            <div className=" w-[80%] mx-auto mt-8">
            <h1 className=" text-lg font-medium">Send Us A Message</h1>
            <div className="grid grid-cols-2">
                <div className="h-[100px] w-[280px] mt-4">
                    <label className=" text-gray-400">Name *</label>
                    <input type="text" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600" placeholder="Your name" />
                    
                </div>
                <div className="h-[100px] w-[280px] mt-4">
                    <label className=" text-gray-400">Email *</label>
                    <input type="text" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600" placeholder="Your email" />
                    
                </div>
                <div className="h-[100px] w-[280px] mt-4">
                    <label className=" text-gray-400">Phone *</label>
                    <input type="text" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-2 placeholder:text-gray-600" placeholder="Phone #" />
                </div>
            </div>
            <div className="h-[100px] w-full mt-4">
                    <label className=" text-gray-400">Message *</label>
                    <input type="text" className=" h-[30px] w-full border-b-[1px] outline-none focus:border-black mt-6 placeholder:text-gray-600" placeholder="Write your message" />
                </div>
                <button className=" h-12 w-44 mt-4 hover:opacity-70 transition-all duration-300 text-white bg-blue-900 ">Send Message</button>
            </div>
        </div>
        <div className=" bg-blue-900">
            <div className=" w-[80%] mx-auto text-gray-400 flex flex-col gap-4 mt-8">
            <h1 className=" text-xl text-white">Contact Information</h1>
            <p>We will be happy to help with any questions you might have about the Crown Pottery!</p>
            <div className="flex items-start gap-4 mt-8">
                <FaLocationDot className=" text-white text-xl" />
                <p>Pilgrims Way, Crown Pottery, Kent, DA1 1QZ</p>
            </div>
            <div className="flex items-start gap-4 mt-8">
                <IoCall className=" text-white text-xl" />
                <p>+(92) 3023342784</p>
            </div>
            <div className="flex items-start gap-4 mt-8">
                <IoMdMail className=" text-white text-xl" />
                <p>info@crownpottery.com</p>
            </div>
            </div>
        </div>
        </div>
        
        </div>
    
    </>
  )
})

export default Contact