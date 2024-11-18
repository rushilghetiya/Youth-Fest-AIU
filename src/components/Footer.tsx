import React from "react";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-footer-bg">
      <div className="m-auto flex flex-wrap justify-around gap-4 py-4 font-poppins text-sm font-semibold text-black md:max-w-7xl">
        <div className="flex items-center justify-center gap-2">
          <HiOutlineMail size={20} />
          <span>Srmsigaram@srmist.edu.in</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <BsTelephoneFill size={18} />
          <span>+91 8838747629</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <HiLocationMarker size={20} />
          <span className="sm:text-md text-center">
            SRM INSTITUTE OF SCIENCE AND TECHNOLOGY, CHENNAI{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};
