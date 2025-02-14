import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
    aspentech,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    expensetracker,
    algorithm_visual,
    drone_sim,
    sudoku,
    swish,
    lol
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "github",
      title: "Github",
      link: "https://github.com/anthony39844",
      icon: faGithub
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/anthony39844/", 
      icon: faLinkedin
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "R&D Intern",
      company_name: "Aspen Tech",
      icon: aspentech,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "I implemented a tree map component into Voyager by using DevExtreme and manipulated JSON data from AspenTechs proprietary DBMS and REST APIs to be able to be displayed on the tree map.",
        "I also helped complete SWR tickets regarding bugs related to the front and back end."
      ],
    },
  ];
  
  const projects = [
    {
      name: "League of Legends Data Tracker",
      description: [
        "A website that displays data and match performances about summoners from a game that I enjoy playing."
      ],
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: lol,
      source_code_link: "https://github.com/anthony39844/GSB",
    },
    {
      name: "Drone Delivery Simulator",
      description: [
        "A simulation of the UMN campus where drones deliver packages and have realistic interactions such as stolen packages and drone battery depletion."
      ],
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "docker",
          color: "green-text-gradient",
        },
        {
          name: "jira",
          color: "pink-text-gradient",
        },
      ],
      image: drone_sim,
      source_code_link: undefined,
    },
    {
      name: "Expense Tracker",
      description: [
        "A project that I built to help keep track of my unreasonable spending. Allows users to create an account and log in to view and log their expenses."
      ],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "git",
          color: "blue-text-gradient",
        },
      ],
      image: expensetracker,
      source_code_link: "https://github.com/anthony39844/ExpenseTracker",
    },
    {
      name: "Path Search Visualizer",
      description: [
        "A visualization of A*, Dijkstra's, BFS and DFS searches on customizable maps. A way to learn how these algorithms work and search through a map."
      ],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "git",
          color: "pink-text-gradient",
        },
      ],
      image: algorithm_visual,
      source_code_link: "https://github.com/Jasonchen272/Path-Search-Visualizer",
      website_link: "https://path-search-visualizer-jasonchen272s-projects.vercel.app/"
    },
    {
      name: "Sudoku",
      description: [
        "Just a fun little Sudoku game with 4 different levels of difficulty. Can check your answers and solve the puzzle for you as well! "
      ],
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "git",
          color: "blue-text-gradient",
        },
      ],
      image: sudoku,
      source_code_link: "https://github.com/anthony39844/Sudoku",
    },
    {
      name: "Simple Working Implementation Shell",
      description: [
        "A simple shell that is able to take in basic command line instructions. Was a bit of a learning curve but a very good introduction into OS and the complexities of lower level programming."

      ],
      tags: [
        {
          name: "c",
          color: "blue-text-gradient",
        }
      ],
      image: swish,
      source_code_link: undefined,
    },
  ];
  
  export { technologies, experiences, projects };