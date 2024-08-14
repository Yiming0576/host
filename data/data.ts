// import { FaHome, FaUser, FaFolderOpen, FaBriefcase, FaEnvelope } from 'react-icons/fa';
// import React from 'react'; // Import React if you're using TypeScript

// interface NavItem {
//   name: string;
//   link: string;
//   icon: React.ReactNode;
// }
// export const navItems: NavItem[]  = [
//   {
//     name: "Home",
//     link: "#home",    
//     icon: <FaHome className="w-6 h-6" />,
//   },
//   {
//     name: "About",
//     link: "#about",
//     icon: <FaUser className="w-6 h-6" />,
//   },
//   {
//     name: "Projects",
//     link: "#projects",
//     icon: <FaFolderOpen className="w-6 h-6" />,
//   },
//   {
//     name: "Exprience",
//     link: "#exprience",
//     icon: <FaBriefcase className="w-6 h-6" />,
//   },
//   {
//     name: "Contact",
//     link: "#contact",
//     icon: <FaEnvelope className="w-6 h-6" />,
//   },
// ];

export const skills = [
  {
    Languages: ["Python", "Java", "Typescript"],
    Frameworks: ["Next.JS", "React", "SpringBoot"],
    Tools: ["Bash", "Git", "Docker"],
    Databases: ["MongoDB", "PostgreSQL", "MySQL"],
  },
];

export const personalInfo = {
  name: "Yiming",
  title: "Full-Stack Developer",
  desc: "I'm a Frontend Developer with a passion for web technologies. I specialize in creating fast, responsive, and engaging websites.",
  email: "Yiming0576@gmail.com",
  phone: "123-456-7890",
  location: "New York, USA",
  img: "/profile.svg",
  socialMedia: [
    {
      id: 1,
      name: "github",
      link: "",
      img: "/git.svg",
    },
    {
      id: 2,
      name: "twitter",
      link: "",
      img: "/twit.svg",
    },
    {
      id: 3,
      name: "linkedin",
      link: "",
      img: "/link.svg",
    },
  ],
};

export const gridItems = [
  {
    id: 1,
    title: "", // Enthusiastic about learning new technologies
    description:
      "I'm always looking for new technologies to learn and implement projects.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "", // I'm very flexible with time zone communications
    description: "I'm very flexible with time zone communications",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[30vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Explorer",
    description: "Tech enthusiast with a passion for development.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 lg:min-h-[30vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "My tech stack",
    description: "I constantly try to improve",
    className:
      "lg:col-span-5 md:col-span-5 md:row-span-2 lg:min-h-[30vh] justify-center flex-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "",  // Currently building an AI model integration
    description: "Integrating AI models into web applications",
    className: "md:col-span-2 md:row-span-2 ",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Automated Scripts to filtering data, run Gromacs simulations",
    des: "automated scripts using bash, sed, awk, and Python to filtering data and run GROMACS simulations.",
    img: "/vmd.svg",
    iconLists: ["/py.svg", "/numpy.svg", "/bash.svg", "/awk.svg"],
    link: "https://github.com/Yiming0576/internship-ASRC",
  },
  {
    id: 2,
    title: "Portfolio Website",
    des: "A portfolio website built with Next.js, Aceternity UI, Tailwind CSS, and TypeScript. ",
    img: "portfolio.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "https://github.com/adrianhajdin/ai_saas_app",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://github.com/adrianhajdin/iphone",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Nanoscience Research Assistant",
    desc: "Created automated Bash and Python scripts for GROMACS simulations and data analysis, used VMD for 3D visualization, and applied supervised machine learning to predict outcomes.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer Intern",
    desc: "Integrated various AI models into STEM education web applications using TypeScript and Next.js, developed RESTful APIs, and implemented MongoDB for data management.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Yiming0576",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/00yiming-gao/",
  },
];
