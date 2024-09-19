// TargetSection.js
import React from "react";
import "./TargetSection.css"

const TargetSection = ({
  id,
  backgroundUrl,
  headingText,
  paragraphText,
  textColor,
}) => {
  return (
    <div
      id={id}
      className="target-section h-screen flex  justify-center items-center h-screen bg-fixed bg-center bg-cover  bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className=" inset-0 flex items-center justify-center p-4">
        <div className="bg-yellow-400 bg-opacity-30 rounded-lg p-6 md:w-8/12   mx-4">
          <h1 className={`md:text-xl text-xs text-center font-bold glow1 ${textColor}`}>
            {headingText}
          </h1>
          <p className={`md:text-xl text-xs text-center pt-6 font-semibold glow1 ${textColor}`}>
            {paragraphText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TargetSection;
