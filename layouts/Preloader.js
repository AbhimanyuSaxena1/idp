"use client";
import { plaxUtility } from "@/utility";
import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    plaxUtility.preloader();
  }, []);

  return (
    <div className="mil-preloader">
      <div className="mil-load" />
      <p className="h2 mil-mb-30">
        <span className="mil-light mil-counter animate-bounce" data-number={100}>
          0
        </span>
        <span className="mil-light">%</span>
      </p>
    </div>
  );
};
export default Preloader;
