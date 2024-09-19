import React, { useRef, useState, useEffect } from "react";
import audio from "../Audio/car_audio.mp3";
import video from "../Video/mustang_background.mp4";
import "./home.css";
import { IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";

const AudioPlayer = ({ onStart }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const handleStartExperience = () => {
    handlePlay();
    if (onStart) onStart(); // Notify parent that experience has started
    document.body.classList.remove("no-scroll"); // Allow scrolling
  };

  useEffect(() => {
    // Add no-scroll class initially
    document.body.classList.add("no-scroll");
  }, []);

  return (
    <div className="home relative">
      <div className="video-background relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-screen object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="content absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4 text-center z-20">
          <h1 className="title-text text-white text-4xl lg:text-6xl font-bold mb-4">
            <span className="mustang glow">MUSTANG</span>
            <span className="text-yellow-400">Evolution</span>
          </h1>
          <h3 className="text-white text-base lg:text-lg mb-1 glow">
            Turn up the volume to enjoy the full experience
          </h3>

          <button
            onClick={handleStartExperience}
            className="playbutton bg-transparent border border-yellow-400  text-white font-bold py-2 -mt-2 px-4 rounded hover:bg-yellow-400  hover:text-stone-950 transition duration-300 z-30"
          >
            Let The Experience Begin!
          </button>
        </div>
      </div>

      <div className="text-center z-20 relative">
        <audio
          ref={audioRef}
          src={audio}
          loop
          onEnded={() => setIsPlaying(false)}
        />
        <button
          onClick={toggleMute}
          className="mute_button text-yellow-400 rounded"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <IoVolumeMuteOutline size={24} />
          ) : (
            <IoVolumeHighOutline size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
