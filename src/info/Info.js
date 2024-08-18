import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
  firstName: "Talib",
  lastName: "Uddin",
  initials: "js",
  position: "a Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "Based in the Pakistan",
    },
    {
      emoji: "💼",
      text: "Software Engineer ",
    },
    {
      emoji: "📧",
      text: "talibuddinqazi@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/Talibb1",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/talib-uddin-461104258",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://indeed.com",
      icon: "fa fa-briefcase",
      label: "indeed",
    },
  ],
  bio: "Hello! I'm Talib, a Software Engineer with a Computer Science degree from Iqra University. I have a passion for technology and a strong belief in the transformative power of artificial intelligence. I'm also someone who appreciates the simple joys of life, like long walks on the beach. With my skills and vision for the future, I'm confident that I can bring value to your team.",
  skills: {
    proficientWith: [
      "Next JS",
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Git",
      "Github",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
  },
  hobbies: [
    {
      label: "Developement",
      emoji: "💻",
    },
    {
      label: "Programming",
      emoji: "📚",
    },
    {
      label: "DSA",
      emoji: "🥇",
    },
    {
      label: "Coding",
      emoji: "📙",
    },
  ],
  portfolio: [
    {
      title: "Full Stack Authentication",
      live: "https://next-js-authentication-jwt-mui.vercel.app/Login",
      source: "https://github.com/Talibb1/Next-JS-Authentication-JWT-MUI",
      image: mock1,
    },
    {
      title: "Movie Application",
      live: "https://next-js-movie-project-flame.vercel.app/",
      source: "https://github.com/Talibb1/Next-JS-Movie-Project",
      image: mock2,
    },
    {
      title: "E-Commerce Application",
      live: "#",
      source: "https://github.com/Talibb1/React-E-Commerce",
      image: mock3,
    },
    {
      title: "Firebase Todo App",
      live: "https://todoapp-67b16.web.app/",
      source: "https://github.com/Talibb1/firebase-todo-app",
      image: mock4,
    },
    {
      title: "React Admin Dashboard",
      live: "#",
      source: "https://github.com/Talibb1/React-TypeScript-Dashboard",
      image: mock5,
    },
  ],
};
