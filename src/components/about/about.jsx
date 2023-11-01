import './about.css'
import { motion } from 'framer-motion'
import { textAnimationLeft, textAnimationRight } from '../../Animations/animations'

import photo from '../../img/photo.jpg'

function About() {
    return (
        <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={textAnimationLeft}
        transition={{ duration: 0.6 }}
        id="about" 
        className="content__about">
            <div className="content__about__photo">
                <img src={photo} alt="about-photo" />
            </div>
            <div className="content__about__description">
                <div className="content__about__description__header-small">
                    Who I am
                </div>
                <div className="content__about__description__header-big">About Me</div>
                <div className="content__about__description__text">
                    Hi! I’m Gres Maxim, and I’m a developer who has
                    passion for building clean web applications with intuitive
                    functionality. I enjoy the process of turning ideas into reality
                    using creative solutions. I’m always curious about learning new
                    skills, tools, and concepts.
                </div>
                <div className="content__about__description__hire-button">
                    <a href="https://drive.google.com/uc?export=download&id=1DexDoKVE2hsE_lxzF8iJbPBeyQDmztc9">Download CV</a>
                </div>
            </div>
        </motion.div>
    )
}

export default About