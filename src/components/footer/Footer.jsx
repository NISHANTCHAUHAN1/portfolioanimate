import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import SparklesCore from "../../ui/Sparkles";
import "./footer.css";

const SocialIcons = () => {
  const handleLinkedInClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/nishant-chauhan-b76371255/";
  };

  const handleGithubClick = () => {
    window.location.href = "https://github.com/NISHANTCHAUHAN1";
  };

  const handleInstagramClick = () => {
    window.location.href = "https://www.instagram.com/_.sky_14/";
  };

  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="text-white text-center">
        <h1 className="text-3xl ">👋</h1>
        <h1 className="text-3xl font-extrabold py-2">
          Thanks for checking my website!
        </h1>
        {/* <p className='text-2xl font-extrabold'>get in touch (Click to copy)</p> */}
        <p className=" text-xl font-extrabold">nishchaynish8gmail.com</p>
      </div>
      <ul className="wrapper">
        <li className="icon facebook" onClick={handleLinkedInClick}>
          <span className="tooltip">Linkdein</span>
          <FaLinkedin size="1.5em" />
        </li>
        <li className="icon twitter" onClick={handleGithubClick}>
          <span className="tooltip">Github</span>
          <FaGithub size="1.5em" />
        </li>
        <li className="icon instagram" onClick={handleInstagramClick}>
          <span className="tooltip">Instagram</span>
          <FaInstagram size="1.5em" />
        </li>
      </ul>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default SocialIcons;
