import Hero from "./section/Hero/Hero"
import NavBar from "../../components/NavBar/NavBar"
import Projects from "./section/Projects/Projects"
import AboutMe from "./section/AboutMe/AboutMe"

interface HomeProps {
  darkMode: boolean;
  toggleTheme: () => void;
}
const Home: React.FC<HomeProps> = ({ darkMode, toggleTheme }) => {


    return (
        <>
            <NavBar darkMode={darkMode} toggleTheme={toggleTheme}/>
            <Hero />
            <Projects />
            <AboutMe />
        </>
    )
}

export default Home