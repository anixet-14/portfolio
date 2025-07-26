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
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sde,
  ramaiah,
  express,
  python,
  cpp,
  golang,
  mysql,
  azure, 
  linux,
  windows,
  mern,
  systemmonitor,
  medisage,
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
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning Developer",
    icon: mobile,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: sde,
  },
];


const technologies = [
  {
    name: "MERN",
    icon: mern,
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
    name: "Python",
    icon: python, // 📝 Add a Python icon to your assets if not present
  },
  {
    name: "C++",
    icon: cpp, // 📝 Custom icon may be needed for C++
  },
  {
    name: "Go",
    icon: golang, // 📝 Add Go icon if available
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql, // 📝 Add MySQL icon if not already in your assets
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Azure",
    icon: azure, // 📝 You may need to add Azure logo in your assets
  },
  {
    name: "Linux",
    icon: linux, // 📝 Add a Linux Tux icon if not already included
  },
  {
    name: "Windows",
    icon: windows, // 📝 Add a Linux Tux icon if not already included
  },
];

const experiences = [
  {
  title: "Web Development Intern",
  company_name: "M.S. Ramaiah Institute of Technology",
  icon: ramaiah,
  iconBg: "#383E56",
  date: "Sept 2023 – Oct 2023",
  points: [
    "Built dynamic UI components using React.js and JavaScript to enhance user engagement.",
    "Optimized application performance through lazy loading and efficient state management.",
    "Collaborated in Agile sprints, contributing to planning, daily standups, and code reviews.",
  ],
  },

  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "MediSage",
    description:
      "A multimodal health diagnosis system that leverages audio, visual, and textual inputs using LLMs and Gradio to simulate a virtual doctor for early medical insights.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gradio",
        color: "green-text-gradient",
      },
      {
        name: "llm",
        color: "pink-text-gradient",
      },
    ],
    image: medisage, // Make sure this is your imported image reference
    source_code_link: "https://github.com/anixet-14/MediSage/",
  },

  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
    {
  name: "System Health Monitor",
  description:
    "A Python-based monitoring tool that tracks CPU, memory, and disk usage in real-time, and sends alerts via email and Slack when system resources exceed defined thresholds.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "psutil",
      color: "green-text-gradient",
    },
    {
      name: "slack-api",
      color: "pink-text-gradient",
    },
  ],
  image: systemmonitor, // replace with your imported image variable
  source_code_link: "https://github.com/anixet-14/System-Health-Monitor-System/",
}

];

export { services, technologies, experiences, testimonials, projects };