"use client";

import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const containerRef = useRef(null);
  const arrowRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline();

    // Number animation
    tl.to('.number', {
      transform: "translateY(0%)",
      opacity: 1,
      ease: "linear",
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.number',
        start: "top 80%", 
        scrub: true,
        end: "top 70%",
      },
    });

    // Email animation
    tl.to('.email', {
      transform: "translateY(0%)",
      opacity: 1,
      ease: "linear",
      stagger: 0.2, 
      scrollTrigger: {
        trigger: '.email',
          start: "top 80%",
        scrub: true,
        end: "top 75%",
      }
    }, "-=1.5"); // Start at the same time as previous animation

    // Address animation
    tl.to('.address', {
      transform: "translateY(0%)",
      opacity: 1,
      ease: "linear",
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.address',
        start: "top 90%",
        scrub: true,
        end: "top 80%",
      }
    }, "-=1.5"); // Start at the same time as previous animation

    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slide");
      // Add any additional slide animations here if needed
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PlaxLayout bg={false}>
      <div
        ref={containerRef}
        className="contain w-full !text-black shrink-0 overflow-hidden"
      >
        {/* Slide 1: Banner */}
        <div className="relative slide !bg-[#CFE1E5] flex relative items-center px-16 justify-center w-[100vw] h-[100vh]">
         
          <div className="flex !py-10 gap-5 sm:gap-20 md:gap-20 xl:gap-20">
          
          <div className="flex justify-center top-[40%] left-[50%] translate-x-[-50%] absolute gap-4 md:pt-10 xl:pt-20 items-center flex-col">
          <h1 className="xl:!text-[7rem] !text-black text-center">Contact Us</h1>

         <p className="md:w-[40vw] w-[90vw] text-center">lorem ealmdaewfm poa fmespmf s efsmpom poesme omseom  ealmdaewfm poa fmespmf s efsmpom poesme   m eo a wiajio awihioh aublm awnxwaion </p>
       
          </div>
          </div>

        <div className="absolute w-[70vw] md:w-[60vw] flex items-center md:items-start py-0 md:!py-6 justify-center h-[10vh] md:h-[20vh] bg-white -bottom-10 md:-bottom-15 rounded-r-full left-0">
<div className="flex gap-5 md:gap-20 lg:gap-30 xl:gap-40">
       <a href="https://instagram.com/indhanpay" target="_blank" rel="noopener noreferrer">
         <FaInstagram className="!text-[2rem] !text-black !text-center hover:!text-gray-600 transition-colors"/>
       </a>
       <a href="https://www.linkedin.com/company/indhan-paygate/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
         <FaLinkedin className="!text-[2rem] !text-black !text-center hover:!text-gray-600 transition-colors"/>
       </a>
       <a href="https://youtube.com/@indhanpay" target="_blank" rel="noopener noreferrer">
         <FaYoutube className="!text-[2rem] !text-black !text-center hover:!text-gray-600 transition-colors"/>
       </a>
       <a href="https://facebook.com/indhanpay" target="_blank" rel="noopener noreferrer">
         <FaFacebook className="!text-[2rem] !text-black !text-center hover:!text-gray-600 transition-colors"/>
       </a>
       </div>
        </div>
        
        </div>

        {/* Slide 2: Contact Form */}
        <div className="slide w-[100vw] h-auto  ">
      
      
      
        <div className="container  mx-auto  px-4 !pt-30">
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mil-mb-30">
                      <input
                        className="mil-input shadow-lg !bg-[#CFE1E5] !rounded-full !text-black mil-up w-full"
                        type="text"
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                    <div className="mil-mb-30">
                      <input
                        className="mil-input !bg-[#CFE1E5] shadow-lg !rounded-full !text-black mil-up w-full"
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    <div className="md:col-span-2 mil-mb-30">
                      <input
                        className="mil-input !bg-[#CFE1E5] shadow-lg !rounded-full !text-black mil-up w-full"
                        type="tel"
                        placeholder="Telephone number"
                        name="tel"
                      />
                    </div>
                    <div className="md:col-span-2 mil-mb-30">
                      <textarea
                        cols={30}
                        rows={10}
                        className="mil-input !bg-[#CFE1E5] shadow-lg !p-4 !px-7 !text-black mil-up w-full"
                        placeholder="Message"
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="mil-checkbox-frame !ml-10 !rounded-full !text-black mil-mb-30 mil-up">
                    <div className="mil-checkbox">
                      <input
                        type="checkbox"
                        id="checkbox"
                        name="checkmark"
                        defaultChecked={false}
                      />
                      <label htmlFor="checkbox" />
                    </div>
                    <p className="mil-text-xs !text-black mil-soft">
                      I agree that the data submitted, collected and stored *
                    </p>
                  </div>
                  <div className="mil-up">
                    <button type="submit" className="mil-btn !bg-[#659092] shadow-lg !rounded-full !text-white mil-m">
                      Send Message
                    </button>
                  </div>
                </form>

                <div className="alert-success" style={{ display: "none" }}>
                  <h5>Thanks, your message is sent successfully.</h5>
                </div>

                <div className="flex md:flex-row !px-10  flex-col  w-auto !mt-25 md:h-[15rem] min-h-[20rem] h-auto justify-center gap-10 items-center">
                 <div className="number bg-[#6F9EA0]  translate-y-[100%] shadow-lg opacity-0 w-full md:w-1/3 flex  min-h-[18rem] rounded-lg  justify-center items-center">
                   <div className="flex flex-col  justify-start  items-start w-full h-full p-4">
                    <h3 className="md:text-2xl !text-white font-bold mb-2">Phone</h3>
                     <p className="md:text-lg !text-white">+91 1234567890</p>
                   </div>
                 </div>
                 <div className="email translate-y-[100%] shadow-lg !bg-[#CFE1E5] opacity-0 w-full md:w-1/3 flex  min-h-[18rem] rounded-lg  justify-center items-center"> 
                   <div className="flex flex-col   justify-start  items-start w-full h-full p-4">
                     <h3 className="md:text-2xl !text-black font-bold mb-2">Email</h3>
                     <p className="md:text-lg !text-black">info@indhanpay.com</p>
                   </div>
                 </div>
                 <div className="address translate-y-[100%] opacity-0 w-full md:w-1/3 flex  min-h-[18rem] rounded-lg bg-white shadow-lg  justify-center items-center">
                   <div className="flex flex-col  justify-start  items-start w-full h-full p-4">
                     <h3 className="md:text-2xl !text-black font-bold mb-2">Address</h3>
                     <p className="md:text-lg !text-black">InDhanPay,CIDI Office, SGSITS Campus, 23 Sir M. Visvesvaraya Marg, Vallabh Nagar ,Indore, Madhya Pradesh 452003, INDIA
                     </p>
                   </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:h-[30vw] h-[20vh] max-w-screen-lg !mt-20 rounded-lg overflow-hidden  mx-auto h-auto !p-10 w-full ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14720.25185373121!2d75.870462!3d22.725901000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdb0c36711e1%3A0x58a3936ef5853443!2sInDhanPay!5e0!3m2!1sen!2sin!4v1752129440009!5m2!1sen!2sin"
                className="w-full h-full !rounded-2xl shadow-xl "
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
      </div>
    </PlaxLayout>
  );
};

export default Page;
