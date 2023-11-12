// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import python from "./assets/techstack/python.png";
import java from "./assets/techstack/java.png";
import azure from "./assets/techstack/azure.png";
import nodejs from "./assets/techstack/node.png";
import microsoft365 from "./assets/techstack/microsoft.png";
import docker from "./assets/techstack/docker.png";
import linux from "./assets/techstack/linux.png";
import php from "./assets/techstack/php.png";
import googleCloud from "./assets/techstack/googlecloud.png";
import flutter from "./assets/techstack/flutter.png";
import dart from "./assets/techstack/dart.png";
import kotlin from "./assets/techstack/kotlin.png";
import mongo from "./assets/techstack/mongo.png";
import mysql from "./assets/techstack/mysql.png";
import aws from "./assets/techstack/aws.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Nisarg Bharucha",
  tagline: "I build things for web",
  img: profile,
  imgl: "./assets/techstack/linked.png",
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "IT Operations Assistant",
    Company: "Circle Of Care",
    Location: "Toronto, Ontario",
    Type: "Full Time CO-OP",
    Duration: "May 2023 - Aug 2023",
  },
  {
    Position: "Technology Assistant",
    Company: "Ontario Tech University",
    Location: "Oshawa, Ontario",
    Type: "Part Time",
    Duration: "Jan 2023 - Oct 2023",
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Software Engineering",
    Company: "Ontario Tech University",
    Location: "Oshawa, Ontario",
    Type: "Full Time",
    Duration: "Jan 2021 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  git: git,
  github: github,
  figma: figma,
  python: python,
  java: java,
  azure: azure,
  nodejs: nodejs,
  microsoft365: microsoft365,
  docker: docker,
  linux: linux,
  php: php,
  googleCloud: googleCloud,
  flutter: flutter,
  dart: dart,
  kotlin: kotlin,
  mongo: mongo,
  mysql: mysql,
  aws: aws,
};


// Enter your Project Details here
export const projectDetails = [
  {
    title: "Health Check (Coming soon!)",
    image: projectImage1,
    description: `Working on an android application which servers as a health tracker for all the gym workouts and also keep track of diet using my Nutrionx project.`,
    techstack: "Kotlin, Dart, Flutter, Python",
    githubLink: "https://github.com/nisargbharucha",
  },
  {
    title: "Nutrionx",
    image: projectImage2,
    description: `Getting the nutrition facts for Canadian and American grocery foods by scanning the barcode of the products.
    Using Nutrionx API and python libraries like requests and beautiful soup.`,
    techstack: "JReact, Tailwind, Python, Node.js",
    githubLink: "https://github.com/nisargbharucha",
  },
  {
    title: "Car Trading Website",
    image: projectImage3,
    description: `This website was desinged for auto trading to learn concepts of full stack web app. 
    Users can upload their listings and browse the available ones.`,
    techstack: "HTML/CSS, JavaScript, PHP, MySql",
    githubLink: "https://github.com/nisargbharucha",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "hi@example.com",
  phone: "+91 12345 67890",
};
