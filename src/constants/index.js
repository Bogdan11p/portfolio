import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  andrews,
  a2ta,
  aF,
  git,
  figma,
  docker,
  meta,
  tripleten,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  postman,
  aroundTheUs,
  newsExplorer,
  wtwrFront,
  wtwrBack,
  portfolio,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Business Management",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

const education = [
  {
    title: "Software Engineering Professional Training Program",
    company_name: "TripleTen",
    icon: tripleten,
    iconBg: "#383E56",
    date: "Oct 2022 - Sep 2023",
    location: "Newburyport, MA",
  },
  {
    title: "Master of Business Administration",
    company_name: "Anrews University",
    icon: andrews,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - Jun 2022",
    location: "Berrien Springs, MI",
  },
  {
    title: "Bachelor of International Business",
    company_name: "Andrews University",
    icon: andrews,
    iconBg: "#383E56",
    date: "Aug 2016 - Sep 2020",
    location: "Berrien Springs, MI",
  },
];

const experiences = [
  {
    title: "TripleTen Software Engineer Bootcamp",
    company_name: "TripleTen",
    icon: tripleten,
    iconBg: "#383E56",
    date: "Oct 2022 - Sep 2023",
    points: [
      "Completed a 10 month software engineering course where I learned HTML, CSS, JavaScript, React.js, and Node.js.",
      "Learned a broad variety of different skills and concepts in software engineering.",
      "Completed in-depth research into course topics to better understand material.",
      "Completed biweekly projects at the end of every module.",
    ],
    location: "Newburyport, MA",
  },
  {
    title: "Assistant Tennis Coach",
    company_name: "A2TA Tennis Academy",
    icon: a2ta,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Aug 2021",
    points: [
      "Conducted group lessons with children.",
      "Held 1 on 1 private lessons with children and adults.",
      "Co-managed the club with the owner to make sure the customers have a great environment for physical activity.",
    ],
    location: "Ann Arbor, MI",
  },
  {
    title: "University Hall Receptionist",
    company_name: "Andrews Universtity",
    icon: andrews,
    iconBg: "#383E56",
    date: "Aug 2017 - Aug 2018",
    points: [
      "Received phone calls.",
      "Received and processed shipments.",
      "Checked students into the dormitory building.",
    ],
    location: "Berrien Springs, MI",
  },
  {
    title: "Stock Representative - Abercrombie & Fitch",
    company_name: "Abercrombie & Fitch",
    icon: aF,
    iconBg: "#E6DEDD",
    date: "Mar 2016 - Aug 2016",
    points: [
      "American retalier that focuses on upscale casual wear for young consumers",
      "Reorganized the clothing on specific categories and arranged them on the main floor of the store.",
      "Received and unpacked weekly shipments",
    ],
    location: "Troy, MI",
  },
];

const projects = [
  {
    name: "Around The U.S.",
    description:
      "This project shows a few places in the United States and it is made for different screen sizes: desktop, tablet, and phone. It has a responsive design that was implemented through using max-width and percentages. It has grid properties and media queries to adapt to different screen sizes.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: aroundTheUs,
    source_code_link: "https://github.com/Bogdan11p/se_project_aroundtheus.git",
  },
  {
    name: "News Explorer",
    description:
      "This project is a node.js news application powered by Express that provides the function to find the latest articles on any topic. It is a front-end application that allows users to search for news articles published from the day of the search up to fourteen days before.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: newsExplorer,
    source_code_link:
      "https://github.com/Bogdan11p/final_project_front-end.git",
  },
  {
    name: "WeatherApp - front end",
    description:
      "The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "ThirdPartyAPI",
        color: "pink-text-gradient",
      },
    ],
    image: wtwrFront,
    source_code_link: "https://github.com/Bogdan11p/se_project_react.git",
  },
  {
    name: "WeatherApp - back end",
    description:
      "This project serves as the back-end component of the WeatherApp application. It involves the development of an API with carefully configured URL routes. Additionally, a MongoDB database is created and appropriately configured to store and manage the application's data. By building the back-end infrastructure, the project enables seamless communication between the front-end and the server, allowing for efficient data retrieval, storage, and manipulation.",
    tags: [
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: wtwrBack,
    source_code_link: "https://github.com/Bogdan11p/se_project_express.git",
  },
  {
    name: "Porfolio",
    description:
      "I created this project to present my resume in a more detailed, interactive way and to showcase my skills.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Bogdan11p/portfolio.git",
  },
];

export { navLinks, services, technologies, experiences, education, projects };
