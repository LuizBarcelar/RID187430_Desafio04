import Hero from "./section/Hero/Hero"
import NavBar from "../../components/NavBar/NavBar"
import Projects from "./section/Projects/Projects"
import AboutMe from "./section/AboutMe/AboutMe"

const Home = () => {


    return (
        <>
            <NavBar />
            <Hero />
            <Projects />
            <AboutMe />
        </>
    )
}

export default Home