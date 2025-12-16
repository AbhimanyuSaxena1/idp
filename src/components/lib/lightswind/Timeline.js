"use client";

import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const data = [
    {
      year: "2020",
      info: "Founded with a vision to revolutionize dealership payments and cross-border transactions.",
      image: "https://images.unsplash.com/photo-1751647670942-3fe932006357?w=600&auto=format&fit=crop&q=60",
    },
    {
      year: "2021",
      info: "Launched our first platform MVP and onboarded our initial set of users.",
      image: "https://images.unsplash.com/photo-1751647670942-3fe932006357?w=600&auto=format&fit=crop&q=60",
    },
    {
      year: "2022",
      info: "Expanded our team and introduced new features for enhanced security and transparency.",
      image: "https://images.unsplash.com/photo-1751647670942-3fe932006357?w=600&auto=format&fit=crop&q=60",
    },
    {
      year: "2023",
      info: "Reached 10,000+ users and established partnerships with global financial institutions.",
      image: "https://images.unsplash.com/photo-1751647670942-3fe932006357?w=600&auto=format&fit=crop&q=60",
    },
    {
      year: "2024",
      info: "Continuing to innovate and scale, making dealership payments seamless worldwide.",
      image: "https://images.unsplash.com/photo-1751647670942-3fe932006357?w=600&auto=format&fit=crop&q=60",
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      data.forEach((_, idx) => {
        const infoEl = `.timeline-info-${idx}`;
        const yearEl = `.timeline-year-${idx}`;
        const imgEl = `.timeline-img-${idx}`;

        gsap.from(infoEl, {
          x: idx % 2 === 0 ? 100 : -100,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: infoEl,
            start: "top 90%",
            end: "bottom 80%",
            scrub: true,
            markers:true,
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(yearEl, {
          x: idx % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: yearEl,
            start: "top 90%",
            end: "bottom 80%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(imgEl, {
          y: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imgEl,
            start: "top 90%",
            end: "bottom 80%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div className="mil-timeline-container !text-white">
      <div className="mil-timeline-item">
        {data.map((item, idx) => (
          <div key={item.year} className="relative flex items-center mb-12 last:mb-0 h-[20vw]">
            <div className="absolute left-1/2 top-0 h-full w-1 bg-[#FFC400] -translate-x-1/2 z-0"></div>

            {idx % 2 === 0 ? (
              <div className="right-container flex w-full items-center">
                <div className="w-1/2 flex justify-end pr-8 z-10">
                  <div className={`bg-[#FFC400] text-white px-4 py-2 rounded-full font-bold shadow-lg timeline-year-${idx}`}>
                    {item.year}
                  </div>
                </div>
                <div className="w-0 flex flex-col !mx-10 items-center z-10">
                  <div className="w-5 h-5 bg-[#FFC400] rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-1/2 flex flex-col  justify-center pl-8 z-10 relative">
                  <div className={`backdrop-blur-xs bg-[rgba(255, 255, 255, 0.225)] !px-6 z-10 !py-4 rounded-xl shadow-md  timeline-info-${idx}`}>
                    {item.info}
                  </div>
                  <img
                    src={item.image}
                    alt="timeline-left"
                    className={`absolute top-[-30%] right-5 z-0 w-[50%] h-[fit-content] object-cover rounded timeline-img-${idx}`}
                  />
                </div>
              </div>
            ) : (
              <div className="left-container relative flex w-full items-center">
                <div className="w-1/2 flex flex-col justify-end pr-8 z-10 relative">
                  <div className={`backdrop-blur-xs z-10 bg-[rgba(255, 255, 255, 0.225)] !px-6 !py-4 rounded-xl shadow-md  timeline-info-${idx}`}>
                    {item.info}
                  </div>
                  <img
                    src={item.image}
                    alt="timeline-right"
                    className={`absolute top-[-30%]  z-0 left-5 w-[50%] h-[fit-content] object-cover rounded timeline-img-${idx}`}
                  />
                </div>
                <div className="w-0 flex flex-col !mx-10 items-center z-10">
                  <div className="w-5 h-5 bg-[#FFC400] rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-1/2 pl-8 z-10 flex">
                  <div className={`bg-[#FFC400] text-white px-4 py-2 rounded-full font-bold shadow-lg timeline-year-${idx}`}>
                    {item.year}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
