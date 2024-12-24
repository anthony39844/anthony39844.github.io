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
    swish
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
      id: "contact",
      title: "Contact",
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
        "I also helped complete SWR tickets with bugs related from the front to the back end."
      ],
    },
  ];
  
  const projects = [
    {
      name: "Drone Delivery Simulator",
      description: [
        "Developed a drone delivery simulation that delivers packages using different search algorithms such as A*,  BFS, DFS and Dijkstras.",
        "Implemented a new feature that allows packages to be stolen while adhering to SOLID principles and utilizing design patterns such as the factory and observer method.",
        "Used Jira to assign tasks and organize work in a modified SCRUM environment."
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
        "Developed a full stack web application to streamline the organization and display of bank transaction data.",
        "Built an API to manage and edit persistent data with MongoDB.",
        "Implemented back-end logic using Python to read CSV files.",
        "Designed an interactive and user-friendly UI using React.",
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
      ],
      image: expensetracker,
      source_code_link: "https://github.com/anthony39844/ExpenseTracker",
    },
    {
      name: "Path Search Visualizer",
      description: [
        "Visualizes how different search algorithms work on a grid with a start and end point.", 
        "Implemented feature allowing users to add barriers to create complex paths or mazes that will be searched.",
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
    },
    {
      name: "Sudoku",
      description: [
        "Used HTML, CSS, and JS to create a dynamic sudoku puzzle interface that can be solved.",
        "Integrated a backtracking algorithm to generate random Sudoku puzzles as well as solve them.",
        "Includes multiple levels of difficulty along with answer-checking, allowing players to check their finished puzzle."
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
      ],
      image: sudoku,
      source_code_link: "https://github.com/anthony39844/Sudoku",
    },
    {
      name: "Simple Working Implementation Shell",
      description: [
        "Developed a simple shell in C that simulates command-line interface functionality, supporting user input, process control, and command execution.",
        "Implemented support for file redirection, foreground and background processes and signal handling."
      ],
      tags: [
        {
          name: "c",
          color: "blue-text-gradient",
        },
        {
          name: "git",
          color: "green-text-gradient",
        }
      ],
      image: swish,
      source_code_link: undefined,
    },
  ];
  
  export { technologies, experiences, projects };