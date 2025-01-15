import { ProjectCard } from "./ProjectCard";
import ecom from "../../assets/ecom.png"
import blogweb from "../../assets/blogweb.png"
import todo from "../../assets/todo.png";
import pinterest from '../../assets/pinterest.png';
import ide from '../../assets/ide.png'
import LPF from '../../assets/i.png'


export function Projects() {
  const cards = [
    {
      id:1,
      title:"Learning Platform",
      thumbnail: LPF,
       Githublink:"https://github.com/NISHANTCHAUHAN1/LPF",
      Demolink:"https://studyclub.onrender.com/",
    tech: [
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/nodejs-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/express-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/mongodb-original-wordmark.svg",
    ]
  },
    {
      id:2,
      title:"IDE",
      thumbnail: ide,
       Githublink:"https://github.com/NISHANTCHAUHAN1/IDE",
      Demolink:"https://coderunneride.onrender.com/",
    tech: [
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/nodejs-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/express-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/mongodb-original-wordmark.svg",
    ]
  },
    {
      id:3,
      title:"Pinterest",
      thumbnail: pinterest,
       Githublink:"https://github.com/NISHANTCHAUHAN1/MERN-pinterest",
      Demolink:"https://nishimg.onrender.com/",
    tech: [
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/nodejs-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/express-original-wordmark.svg",
      "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/mongodb-original-wordmark.svg",
    ]
  },
    {
        id:4,
        title:"Ecom Web",
        thumbnail: ecom,
         Githublink:"https://github.com/NISHANTCHAUHAN1/ecom-fullstack-Web",
        Demolink:"https://ecom-a946b.web.app/",
      tech: [
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/redux-original.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/BackendService/firebase-icon.svg",
      ],
    },
    {
      id:5,
        title:"Blog Web",
        thumbnail:blogweb,
        Githublink:"https://github.com/NISHANTCHAUHAN1/FullStackBlogWeb",
        Demolink:"https://nishblogweb.netlify.app/",
      tech: [
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/redux-original.svg",
        "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
      ],
    },
    {
      id:6,
      title:"Todo App",
      thumbnail:todo,
      Githublink:"https://github.com/NISHANTCHAUHAN1/Todo2",
      Demolink:"https://todo2-chi.vercel.app",
      tech: [
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg",
        "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
      ],
    },
  ];

  const openSnitchGithub = (link) => {
    window.open(link, "_blank");
  };

  const openSnitch = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="py-10 w-full cursor-pointer z-100 bg-black">
      <h1 className="text-white text-[4rem] text-center">Projects</h1>

      <ProjectCard
        projects={cards}
        openGithub={openSnitchGithub}
        openLive={openSnitch}
      />
    </div>
  );
}
