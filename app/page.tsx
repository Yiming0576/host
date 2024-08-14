import Hero from "../components/ui/Hero/hero";
import { FloatingNav } from "../components/ui/FloatingNav/FloatingNav";
import { FaEnvelope, FaHome, FaUser, FaFolderOpen, FaBriefcase } from "react-icons/fa";
import Grid from "@/components/ui/BentoGrid/Grid";
import Projects from "@/components/ui/Projects/Projects";
import { ShootingStars } from "@/components/ui/Background/ShootingStars";
import { StarsBackground } from "@/components/ui/Background/StarsBackground";
import Exprience from "@/components/ui//Expricence/Exprience";
import Footer from "@/components/ui/Footer/Footer";


const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <FaHome className="w-6 h-6" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <FaUser className="w-6 h-6" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaFolderOpen className="w-6 h-6" />,
  },
  {
    name: "Exprience",
    link: "#exprience",
    icon: <FaBriefcase className="w-6 h-6" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <FaEnvelope className="w-6 h-6" />,
  },
];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <ShootingStars  />
        <Hero />
        <Grid />
        <Projects />
        <Exprience />
        <Footer />
        <StarsBackground />
        <ShootingStars  />
      </div>
    </main>
  );
}
