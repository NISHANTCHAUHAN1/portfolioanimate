/* eslint-disable react/no-unescaped-entities */
import "./profile.css"
// import nish from '../../assets/web-img.png'
import nish from '../../assets/portfolio-img3.webp';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import pdf from '../../assets/Resume.pdf'
const ProfileSection = () => {
  const handleResumeClick = () => {
    window.open(pdf);
  };


  const handleContactClick = () => {
    window.location.href = './#contact';
  };

  const handleLinkedInClick = () => {
    window.location.href = 'https://www.linkedin.com/in/nishant-chauhan-b76371255/';
  };

  const handleGithubClick = () => {
    window.location.href = 'https://github.com/NISHANTCHAUHAN1';
  };
  

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={nish} alt="profile picture" className='nishPic'/>
      </div>
      <div className="section__text">
        <p className="section__text__p1 text-slate-500 text-4xl">Hello, I'm</p>
        <h1 className="title text-white text-6xl">Nishant Chauhan</h1>
        <p className="section__text__p2 text-slate-500 text-4xl">Full-Stack Developer</p>
        <div className="btn-container">
          <button className=" text-white border px-3 font-bold rounded-lg py-1 hover:text-black hover:bg-white" onClick={handleResumeClick}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={handleContactClick}>
            <a href="#footer">Contact Info</a>
          </button>
        </div>
        <div id="socials-container">
        <FaLinkedin onClick={handleLinkedInClick} className='text-white object-cover w-16 h-10'/>
        <FaGithub onClick={handleGithubClick} className='text-white object-cover w-16 h-10'/>
      
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
