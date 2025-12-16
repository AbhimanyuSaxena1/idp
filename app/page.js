"use client";
import Banner from "@/components/Banner";
import { CallToAction1 } from "@/components/CallToAction";
import { Testimonials2 } from "@/components/Testimonials";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import { motion } from "motion/react";
import Shery from "sheryjs";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const direction = "left";
const page = () => {
  useEffect(() => {
    Shery.imageEffect(".images", {
      style: 5,
      // debug: true,
      gooey: true,
      
    });
   });

useEffect(()=>{
  // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
})
  return (
    <PlaxLayout>
      {/* banner */}
    <div className="container w-[100%] !text-black  bg-[#F2FAFA] h-[80vh] gap-2 flex flex-col !p-10 !mt-25 ">
        <div className="top h-[60vh] bg-[#F2FAFA] flex  justify-between  gap-10 rounded-lg">
<div className="Content w-[60%] h-full  ">
  <h1 className="!text-[3.5rem]  !text-black font-bold">
    Welcome to <span className="!text-black !text-[4.5rem]" ><span className="!text-[#FCB519]">InDhan</span>Pay!</span>
  </h1>
  <div className="text-sm w-[80%] flex flex-col gap-2 ">
  <p className="!text-[1rem] font-bold">
<br/>
With its robust ecosystem, this fintech solution has completely transformed the payments and management landscape of the fuel sector. Offering a secure payment gateway and convenient mobile payment options, InDhanPay streamlines the entire fuel station management process, making it an indispensable tool for petrol dealers and customers alike. Together, let's fuel the future of payments with InDhanPay!
  </p>
  </div>
</div>
<div className="Animation w-[30%] !p-5 h-full ">
  <img src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/common_file/indhan.gif" alt="Animation" className="w-full h-full object-cover" />
</div>
        </div>
        <div className="bottom  h-[20vh] flex items-center justify-center gap-5 w-full  rounded-lg">
          <button className="  !font-bold !p-2 !rounded-md  ">
            <Link style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} href="https://play.google.com/store/apps/details?id=com.indhanpay.app&pli=1" className=" overflow-hidden relative group group-hover:text-black  hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2  !text-lg bg-black !font-bold !px-4 !py-4  !rounded-md   !w-fit !h-fit">
              <img src="img/GooglePlayLogo.svg" alt="Google Play" className="w-7 z-10 h-7" />
              <h1 className="z-10 !text-white !text-lg !font-normal group-hover:!text-black transition-all duration-300">Android</h1>
              <div className="absolute z-1 top-0 left-0 w-[110%] h-full bg-white -translate-x-100  group-hover:translate-x-0  transition-all duration-300"></div> 
          </Link>
            </button>
          <button className="!text-white  !text-sm !font-bold !p-2 !rounded-md  ">
          <Link style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} href="/" className="!bg-black group overflow-hidden relative  flex items-center justify-center gap-4 hover:-translate-y-1 hover:scale-105  transition-all duration-300  !text-[1.2rem] !font-bold !px-4 !py-4  !rounded-md  !w-fit !h-fit">
                
<div className="relative w-7 h-7">
  <img src="img/AppleLogoDark.svg" alt="Apple Logo" className="w-7 h-7 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-0 left-0 z-10" />
  <img src="img/AppleLogo.svg" alt="Apple Logo" className="w-7 h-7 group-hover:opacity-0 transition-all duration-300 absolute top-0 left-0 z-0" />
</div>
               <h1 className="z-10 !text-white !text-lg !font-normal group-hover:!text-black transition-all duration-300">IOS</h1>
               <div className="absolute z-1 top-0 left-0 w-full h-full bg-white -translate-x-100  group-hover:translate-x-0  transition-all duration-300"></div> 

            </Link>
            </button>
        </div>
    </div>
      {/* banner end */}
    
      {/* features */}
      <div className="">
        {/* <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up select-text select-color-yellow">
                Your Work, Streamlined
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 select-text select-color-orange mil-up">
                At Indhan Pay, your operations come first. <br />
                Easily monitor transactions, employee performance, and pump
                activity with clear, real-time reports and visual dashboards
                that help you stay in control.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Reliable Support, Anytime</h5>
                    <p className="mil-text-m mil-soft">
                      Indhan Pay Global Service has you covered. Whether you're
                      managing a single station or multiple pumps across
                      locations, our dedicated support ensures smooth
                      operations—no matter where you are.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Rewards That Work for You</h5>
                    <p className="mil-text-m mil-soft">
                      Recognize and reward performance. Track employee
                      efficiency and offer tailored incentives. Indhan Pay’s
                      smart reward tools help motivate your team and boost
                      productivity, one transaction at a time.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="mil-image-frame select-none ">
                <img src="./img/indhanpay_logo.png" alt="image" className="mil-up" />
              </div>
            </div>
          </div>
        </div> */}
         <div className="container  !mt-25 !mb-20">
          <div className="flex !px-10 justify-between items-center !w-full ">
            <div className="col-xl-4 mil-sm-text-center flex flex-col items-center justify-center mil-mb-30 mil-up">
              <p className="h1 text-left !text-[5rem] !mb-2">
                <span className="!text-black" data-number="51">
                  51
                </span>
                <span className="mil-pale">M</span>
              </p>
              <h5 className="!text-black !text-[1.2rem] ">Registered Users</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center flex flex-col items-center justify-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number="1.6">
                  1.6
                </span>
                <span className="mil-pale">M</span>
              </p>
              <h5 className="!text-black !text-[1.2rem] ">Regular Users</h5>
            </div>
            <div className="col-xl-4 mil-sm-text-center flex flex-col items-center justify-center mil-mb-30 mil-up">
              <p className="h1 mil-display mil-mb-15">
                <span className="mil-accent mil-counter" data-number={170}>
                  170
                </span>
                <span className="mil-pale">+</span>
              </p>
              <h5>Countries with our coverage</h5>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
     
      {/* coming soon */}
      <div className=" container !mt-25 !mb-20 !h-[60vh]">
       <div className="overflow-hidden flex items-center justify-center w-full mb-10 p-2  h-[15vh] "> <div className="w-fit flex items-center justify-center  h-full border-black border-b-3 "> <h1 className= " h-auto cmg-container   !text-black !text-center !text-[5rem] !font-semibold capitalize">COMING SOON!!</h1></div></div>
          <div className="data-container flex h-full justify-between items-center !w-full">
          <div className="left w-[40%] h-full !px-10 !py-10">
            <img src="https://indhanpay-public.s3.ap-south-1.amazonaws.com/common_file/indhan.gif" alt="Animation" className="w-full h-full object-cover" />
          </div>
          <div className="right !py-10 w-[55%] h-full flex h-full flex-col items-center justify-start">
          <h1 className="!text-[3rem] !font-semibold capitalize !mb-5">E-Commerce Store</h1>
          <p className="!text-[1rem] !font-semibold capitalize !text-center">InDhanPay's e-commerce store is your one-stop shop for all the essential products and equipment needed to run a petrol pump efficiently. From nozzles to safety gear, staff uniforms and maintenance tools, we provide a comprehensive range of high-quality items. Our goal is to simplify procurement for petrol pump owners and operators.</p>
          <button className="!text-black !text-sm !font-bold !p-2 !rounded-md  ">
          <Link style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} href="https://store.indhanpay.com/" target="_blank" className="!text-black hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4 shadow-lg !text-[1.2rem] !font-bold !px-4 !py-4  !rounded-md !bg-white !w-fit !h-fit">
               <MdArrowOutward style={{fontSize: "1.rem",color:"black !important"}} />
               Checkout
            </Link>
            </button>
          </div>
      </div>
      </div>

      {/* coming soon end */}

      {/* icon boxes */}
      <div className="icon-boxes mil-p-160-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/1.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">Protect Every Purchase</h5>
                <p className="mil-text-s mil-soft mil-up">
                  Enjoy continuous protection against errors, disputes, and data
                  mismatches on all transactions made through Indhan
                  Pay—ensuring accuracy and trust in every purchase.
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/2.png"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">Manage Your Staff</h5>
                <p className="mil-text-s mil-soft mil-up">
                  Easily track employee attendance, shift performance, and daily
                  tasks—all from one dashboard. Indhan Pay simplifies staff
                  management so you can focus on running your station
                  efficiently.
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div className="mil-icon-box mil-with-bg mil-center mil-up">
                <img
                  src="img/home-2/icons/3.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-up">
                  Manage Your Stock with Confidence
                </h5>
                <p className="mil-text-s mil-soft mil-up">
                  Track, update, and optimize your inventory with ease. Indhan
                  Pay turns every stock entry into a step toward better control
                  and efficiency.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* icon boxes end */}
      {/* call to action */}
      {/* <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row align-items-end">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Innovation and Efficiency in Every Transaction at IndhanPay™
                </h2>
              </div>
              <div className="col-xl-4 mil-mb-80 mil-up">
                <Link
                  href="register"
                  className="mil-btn mil-m mil-add-arrow mil-adaptive-right"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Time Saving</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Instantly generate you transaction <br /> History
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Boost Up</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Connect with the employees through our <br />
                    employee management system to boost up <br />
                    their performance{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">Advanced Security</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Protect your assets with our robust <br />
                    security protocols and cutting-edge <br />
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* call to action end */}
      {/* features */}
      <div className="mil-features mil-p-160-80">
        <div className="container">
          <div className="flex md:flex-row flex-col gap-10 p-0 md:!p-10 items-center">
            <div className="!h-auto md:w-[55%] w-full">
              <h2 className="mil-mb-30 ">
                Grow Your <br /> Dealership with{" "}
              </h2>

              <ul className="mil-list-2 mil-type-2 mil-mb-60">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">
                      Our Employee Management System
                    </h5>
                    <p className="mil-text-m mil-soft">
                      IndhanPay monitors the employees working in your <br />
                      dealership. If we detect a employee with short attendace{" "}
                      <br />
                      we will notify you.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mil-up">
                <Link
                  href="/about"
                  className="mil-btn mil-button-transform mil-m mil-add-arrow"
                >
                  More Information
                </Link>
              </div>
            </div>
            <div className=" !h-full md:w-[45%] w-full">
              <img
                src="img/home-2/4.jpg"
                alt="image"
                className="mil-up !h-[20rem] !my-10 md:!my-0 md:!h-[30rem] w-[100%] rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* features */}
      <div className="mil-features mil-p-0-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Instant Alerts <br /> with{" "}
                <span className="!text-[#FFB200]">Indhan</span>Pay<sup>©</sup>{" "}
              </h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                Visualize your financial progress with detailed reports and
                graphs <br />
                that give you visual insights into your spending and saving
                habits.
              </p>
              <ul className="mil-list-2 mil-type-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Real time Inventory</h5>
                    <p className="mil-text-m mil-soft">
                      Notifications allow you to take immediate action in <br />
                      case of Low Inventory.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Security</h5>
                    <p className="mil-text-m mil-soft">
                      Keep track of your financial activities of your Dealership
                      safely <br />
                      because,Your security is our priority, are always one step
                      forward.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="goey col-xl-5 mil-mb-80">
              <img
                src="img/home-2/5.png"
                alt="image"
                className="block md:!hidden lg:!hidden xl:!hidden"
                style={{ width: "100%" }}
              />
              <div className="images hidden md:block lg:block xl:block w-full overflow-hidden mil-up flex flex-col gap-4 items-center">
                <img
                  src="https://images.unsplash.com/photo-1751569416992-57e47b9469bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
                  alt="Front"
                  className="w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1744168222804-2bed62b24f86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                  alt="Gooey"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* testimonials */}
      <div className="mil-testimonials mil-p-0-160">
        <div className="container">
          <Testimonials2 />
        </div>
      </div>
      {/* testimonials end */}
      {/* call to action */}
      {/* <CallToAction1 /> */}
        {/* brands */}
        <div className="mil-brands !mb-20">
        <div className="container select-none ">
          <h5 className="mil-text-center mil-soft mil-mb-60  mil-up">
            Our Partners
          </h5>
          <div className="row justify-content-center gap-none">
            <motion.div
              initial={{ x: direction === "left" ? "0" : "-100%" }}
              animate={{ x: direction === "left" ? "-100%" : "0" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              className="flex  flex-shrink-0 gap-12 xl:gap-20 md:gap-25 -mr-[8px] py-10 pr-40"
            >
              <div className="col-3 col-md-2 mil-text-center">
                <div className="mil-brand">
                  <img src="img/brands/1.png" alt="brand" className="mil-up w-30   h-30 mx-auto object-contain" />
                </div>
              </div>
              <div className="col-3  col-md-2 mil-text-center">
                <div className="mil-brand">
                  <img src="img/brands/2.png" alt="brand" className="mil-up w-30 h-30 mx-auto object-contain" />
                </div>
              </div>
              <div className="col-3 col-md-2 mil-text-center">
                <div className="mil-brand">
                  <img src="img/brands/3.png" alt="brand" className="mil-up w-30 h-30 mx-auto object-contain" />
                </div>
              </div>
              <div className="col-3 col-md-2">
                <div className="mil-brand mil-text-center">
                  <img src="img/brands/4.png" alt="brand" className="mil-up w-30 h-30 mx-auto object-contain" />
                </div>
              </div>
              <div className="col-3 col-md-2">
                <div className="mil-brand mil-text-center">
                  <img src="img/brands/5.png" alt="brand" className="mil-up w-30 h-30 mx-auto object-contain" />
                </div>
              </div>
              <div className="col-3 col-md-2">
                <div className="mil-brand mil-text-center">
                  <img src="img/brands/6.png" alt="brand" className="mil-up w-30 h-30 mx-auto object-contain" />
                </div>
              </div>
              <div className="col-3 col-md-2 mil-text-center">
                <div className="mil-brand">
                  <img src="img/brands/1.png" alt="brand" className="mil-up w-30 h-30 mx-auto object-contain" />
                </div>
              </div>
              <div className="col-3 col-md-2 mil-text-center">
                <div className="mil-brand">
                  <img src="img/brands/2.png" alt="brand" className="mil-up w-30 h-30 mx-auto object-contain" />
                </div>
              </div>
              <div className="col-3 col-md-2 mil-text-center">
                <div className="mil-brand">
                  <img src="img/brands/3.png" alt="brand" className="mil-up w-30 h-30 mx-auto object-contain" />
                </div>
              </div>
              <div className="col-3 col-md-2">
                <div className="mil-brand mil-text-center"> 
                  <img src="img/brands/4.png" alt="brand" className="mil-up w-30 h-30 mx-auto object-contain" />
                </div>
              </div>
              <div className="col-3 col-md-2">
                <div className="mil-brand mil-text-center">
                  <img src="img/brands/5.png" alt="brand" className="mil-up w-30 h-30 mx-auto object-contain" />
                </div>
              </div>
              <div className="col-3 col-md-2">
                <div className="mil-brand mil-text-center">
                  <img src="img/brands/6.png" alt="brand" className="mil-up w-30 h-30 mx-auto object-contain" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* brands end */}
       {/* Map */}
       {/* <div className=" ">
        <div className="container ">
          <div className="mil-out-frame mil-visible mil-illustration-fix ">
            <div className="flex justify-center flex-col items-center">
              <div className="!text-center">
                <h2 className="!mb-5 mil-up border-b">Office Location</h2>
              </div>
            </div>
           
          </div>
        </div>
      </div> */}
      {/* Map end */}
    </PlaxLayout>
  );
};  
export default page;
    