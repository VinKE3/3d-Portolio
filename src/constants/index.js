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
  eshop,
  cocktail,
  port,
  nextjs,
  threejs,
  vuejs,
  vortex,
  webwork,
  masy,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui/Ux Designer",
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
    name: "vuejs",
    icon: vuejs,
  },
  {
    name: "Next Js",
    icon: nextjs,
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
];

const experiences = [
  {
    title: "Independent Web Developer",
    company_name: "Freelancer",
    icon: webwork,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Collaborated with clients to understand their requirements and business goals, translating their ideas into functional and appealing web applications.",
      "Developed web applications using frameworks and other relevant tools, tailoring technological solutions to the unique needs of each project.",
      "Implemented responsive designs to ensure optimal performance across various devices and screen sizes.",
      "Effectively managed my time and tasks, maintaining clear communication with clients to ensure timely and successful project delivery.",
      "Offered technical guidance to clients, suggesting solutions and approaches that enhanced the functionality and performance of their web applications.",
      "Maintained an organized workflow by utilizing project management tools and platforms that facilitated collaboration and progress tracking.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Vortex",
    icon: vortex,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Led the development and maintenance of cutting-edge web applications using React.js and complementary technologies, contributing to Tesla's digital innovation.",
      "Collaborated seamlessly with cross-functional teams, including designers, product managers, and fellow developers, to craft exceptional products that aligned with Tesla's visionary goals.",
      "Drove user-centric design by implementing responsive layouts and optimizing cross-browser compatibility, resulting in a consistently remarkable user experience across various devices.",
      "Played a pivotal role in fostering code quality and collaboration by actively participating in rigorous code reviews, offering insightful feedback to peers and promoting best practices.",
      "Demonstrated a keen eye for detail in refining UI/UX designs, ensuring that the final products not only met technical standards but also met Tesla's premium aesthetic and usability standards.",
      "Proactively sought out opportunities to optimize performance, analyzing and fine-tuning critical aspects of applications to achieve enhanced speed and responsiveness.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "MasyDase",
    icon: masy,
    iconBg: "#383E56",
    date: "August 2022 - January 2023",
    points: [
      "Architected and developed robust RESTful APIs and backend services, leveraging technologies such as Node.js, Express, and MongoDB, to support seamless functionality of web applications.",
      "Collaborated closely with cross-functional teams, including frontend developers, designers, and product managers, to design API endpoints and data structures that facilitated efficient communication between frontend and backend systems.",
      "Ensured data security and integrity by implementing authentication and authorization mechanisms, safeguarding sensitive user information and preventing unauthorized access.",
      "Optimized database queries and data retrieval processes to enhance application performance and reduce response times, resulting in an improved user experience.",
      "Participated actively in code reviews, offering valuable insights and feedback on backend code quality, scalability, and maintainability to ensure the delivery of high-quality software.",
      "Contributed to the design and implementation of scalable backend architectures that accommodated growing user demands and allowed for seamless integration of new features.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "MasyDase",
    icon: masy,
    iconBg: "#E6DEDD",
    date: "January 2023 - Present",
    points: [
      "Designed and developed end-to-end features for web applications, utilizing a diverse tech stack including React.js, Node.js, and databases like MongoDB, to ensure seamless functionality and an exceptional user experience.",
      "Collaborated closely with cross-functional teams to gather requirements, provide technical insights, and create innovative solutions that aligned with project goals and user needs.",
      "Implemented responsive and user-friendly interfaces by leveraging frontend frameworks and libraries, contributing to the creation of engaging and visually appealing user interfaces.",
      "Built and maintained RESTful APIs and backend services, ensuring robust data flow, system efficiency, and effective communication between frontend and backend components.",
      "Took a proactive role in performance optimization, identifying and addressing bottlenecks, reducing load times, and enhancing the overall application responsiveness.",
      "Engaged in continuous learning to stay updated with emerging technologies and industry best practices, integrating new tools and techniques into projects to maintain a competitive edge.",
      "Participated actively in code reviews, offering valuable feedback on both frontend and backend code quality, security measures, and architecture design to uphold software integrity.",
      "Contributed to problem-solving and debugging efforts, swiftly addressing issues to maintain smooth functionality and resolve technical challenges across the entire application stack.",
    ],
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
    name: "E-Commerce",
    description:
      "E-commerce website that enables users to browse products, add them to their cart, and checkout using Stripe.",
    tags: [
      {
        name: "nextjs",
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
    image: eshop,
    source_code_link: "https://github.com/",
  },
  {
    name: "Cocktail Finder",
    description:
      "A web application that allows users to search for cocktail recipes and filter them by name, ingredient, or category.",
    tags: [
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cocktail,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "A portfolio website template that allows users to showcase their projects and skills and share their contact information",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "motion",
        color: "green-text-gradient",
      },
      {
        name: "tawilwind",
        color: "pink-text-gradient",
      },
    ],
    image: port,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
