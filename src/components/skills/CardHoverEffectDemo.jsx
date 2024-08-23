import { HoverEffect } from "../../ui/CardHover";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-80 xl:mt-32 2xl:mt-2">
      <h1 className="text-white text-[4rem] text-center">Skills</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Html",
    link: "https://skillicons.dev/icons?i=html",
  },
  {
    title: "Css",
    link: "https://skillicons.dev/icons?i=css",
  },
  {
    title: "JavaScript",
    link: "https://skillicons.dev/icons?i=javascript",
  },
  {
    title: "React",
    link: "https://skillicons.dev/icons?i=react",
  },
  {
    title: "Express",
    link: "https://skillicons.dev/icons?i=express",
  },
  {
    title: "MongoDB",
    link: "https://skillicons.dev/icons?i=mongodb",
  },
  {
    title: "node.js",
    link: "https://skillicons.dev/icons?i=nodejs",
  },
  {
    title: "Tailwind",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg",
  },
  {
    title: "Bootstrap",
    link: "https://skillicons.dev/icons?i=bootstrap",
  },

  {
    title: "Git",
    link: "https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg",
  },

  {
    title: "C++",
    link: "https://skillicons.dev/icons?i=cpp",
  },

  {
    title: "Firebase",
    link: "https://imgs.search.brave.com/Rt7274I9pYiuAKtGuRuv7yYFo0b4DE7bhJRAv4UIxmc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0YvZmlyZWJh/c2UtbG9nby00MDJG/NDA3RUUwLXNlZWts/b2dvLmNvbS5wbmc",
  },
];
