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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  education,
  testimonials,
  projects,
};
