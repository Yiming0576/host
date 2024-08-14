import Hero from "../components/ui/Hero/hero";
import {FloatingNav} from "../components/ui/FloatingNav/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/ui/BentoGrid/Grid";
import Projects from "@/components/ui/Projects/Projects";
import {ShootingStars} from "@/components/ui/Background/ShootingStars";
import {StarsBackground} from "@/components/ui/Background/StarsBackground";
import Exprience from "@/components/ui//Expricence/Exprience";
import Footer from "@/components/ui/Footer/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={
          [
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            }
          ]
        }  />
        <Hero />
        <Grid />
        <Projects />
        <Exprience />
        <Footer />


        <ShootingStars  />
        <StarsBackground />
      </div>
    </main>
  );
}
