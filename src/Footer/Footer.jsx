import React from "react";
import "./Footer.css";
import { CiFacebook, CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <div className="footer_cont">
        <div className=" container mx-auto">
          <div className="flex py-2 justify-center items-center">
            <a
              href="https://www.facebook.com/Sourav.patnaik.33/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white hover:text-yellow-400"
            >
              <div className="footer_logo_div mx-3 lg:mx-5">
                <CiFacebook className="logo_main text-3xl " />
              </div>
            </a>
            <a
              href="https://www.instagram.com/sourav_patnaik_/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white hover:text-yellow-400"
            >
              <div className="footer_logo_div mx-3 lg:mx-5">
                <CiInstagram className="logo_main text-3xl " />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sourav-patnaik-b371822ba"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-white hover:text-yellow-400"
            >
              <div className="footer_logo_div mx-3 lg:mx-5">
                <CiLinkedin className="logo_main text-3xl " />
              </div>
            </a>

            <a
              href="mailto:patnaiksouravofficial@gmail.com
            "
              className=" text-white hover:text-yellow-400"
            >
              <div className="footer_logo_div mx-3 lg:mx-5">
                <CiMail className="logo_main text-3xl " />
              </div>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <hr className="w-full border-t border-gray-700" />
            <div className="flex justify-center items-center  py-2">
              <p className="foot_text text-white  text-center">
                &#169; Copyright 2024-
                <span className="mustang glow">MUSTANG</span>
                <span className="text-yellow-400">Evolution</span> by Sourav
                Patnaik
              </p>
              <a
                href="/"
                className="foot_text ml-4 text-white hover:text-yellow-400  text-center inline-block"
              >
                Home
              </a>
              <a
                href="/Credits"
                className="foot_text ml-4 text-white hover:text-yellow-400  text-center inline-block"
              >
                Credits
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
