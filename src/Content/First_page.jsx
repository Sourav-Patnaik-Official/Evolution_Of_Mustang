import React, { useState, useRef } from "react";
import AudioPlayer from "../Audio_/Audio";
import TargetSection from "./TargetSection";
import sectionsData from "./Content";
import Footer from "../Footer/Footer";

function First_page() {
  const [hasStarted, setHasStarted] = useState(false);

  // Create refs for each section to enable programmatic scrolling
  const sectionRefs = useRef([]);

  // CSS-Based Smooth Scrolling
  const handleAudioStart = () => {
    setHasStarted(true);
    // Programmatically scroll to the first section
    handleScrollToSection(0);
  };

  // Scroll to specific section using scrollIntoView
  const handleScrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <div>
      {/* AudioPlayer triggers scroll when the audio starts */}
      <AudioPlayer onStart={handleAudioStart} />

      {/* Map over the sections and add refs for programmatic scrolling */}
      {hasStarted &&
        sectionsData.map((section, index) => (
          <div
            key={index}
            id={section.id} // For CSS-based smooth scrolling with anchor links
            ref={(el) => (sectionRefs.current[index] = el)} // For scrollIntoView
          >
            <TargetSection
              backgroundUrl={section.backgroundUrl}
              headingText={section.headingText}
              paragraphText={section.paragraphText}
              textColor={section.textColor}
            />
          </div>
        ))}
      <Footer />
    </div>
  );
}

export default First_page;
