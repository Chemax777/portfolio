import About from "../../components/about"
import Footer from "../../components/footer"
import Greetings from "../../components/greetings"
import NavMenu from "../../components/nav-menu/nav-menu"
import Projects from "../../components/projects"
import Skills from "../../components/skills"
import UpBtn from "../../components/up-btn"
import WorkExp from "../../components/work-exp"

import './portfolio-page.css'

function PortfolioPage () {
    return (
        <div className="container">
            <NavMenu></NavMenu>
            <div className="content">
                <UpBtn></UpBtn>
                <Greetings></Greetings>
                <About></About>
                <WorkExp></WorkExp>
                <Skills></Skills>
                <Projects></Projects>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default PortfolioPage