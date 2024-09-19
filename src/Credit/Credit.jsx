// Credits.js
import React from "react";
import Footer from "../Footer/Footer";
import credit_img from "../images/FORD-Mustang-Shelby.jpg"

const Credits = () => {
  return (
    <>
      <div
        className="target-section h-screen flex  justify-center items-center h-screen bg-fixed bg-center bg-cover  bg-no-repeat"
        style={{
         backgroundImage: `url(${credit_img})`
        }}
      >
        <div className=" inset-0 flex items-center justify-center p-4">
          <div className="bg-yellow-400 bg-opacity-30 rounded-lg p-6 md:w-8/12   mx-4">
            <h1 className={`md:text-xl text-xs text-center font-bold glow1 `}>
              Credits
            </h1>
            <p
              className={`md:text-xl text-xs text-center pt-6 font-semibold glow1 `}
            >
              Dedicated to the Mustang Enthusiasts
            </p>
            <p
              className={`md:text-xl text-xs text-center pt-6 font-semibold glow1 `}
            >
              A lot of the ideas were inspired by content from &nbsp;
              <a
                href="https://www.autoevolution.com/ford/mustang/"
                target="_blank"
                className="hover:underline"
              >
                https://www.autoevolution.com/
              </a>
              . Visit the site for more information on Ford Mustang.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Credits;
