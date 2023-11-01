import { motion } from "framer-motion"
import { textAnimationBottom, textAnimationLeft } from "../../Animations/animations"

import "./skills.css"

import icon1 from '../../img/skill-icons/skill-icon1.svg'
import icon2 from '../../img/skill-icons/skill-icon2.svg'
import icon3 from '../../img/skill-icons/skill-icon3.svg'
import icon4 from '../../img/skill-icons/skill-icon4.svg'
import icon5 from '../../img/skill-icons/skill-icon5.svg'
import icon6 from '../../img/skill-icons/skill-icon6.png'
import icon7 from '../../img/skill-icons/skill-icon7.png'
import icon8 from '../../img/skill-icons/skill-icon8.png'
import icon9 from '../../img/skill-icons/skill-icon9.png'
import icon10 from '../../img/skill-icons/skill-icon10.svg'

function Skills() {
    return (
        <>
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={textAnimationBottom}
                transition={{ duration: 0.6 }}
                className="content__skills__description__header-small">
                MY hard skills
            </motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={textAnimationLeft}
                transition={{ duration: 0.6 }}
                id="skills"
                className="content__skills">
                <div className="content__skills__description">
                    <div className="content__skills__description__header-big">
                        What My Programming Skills Included?
                    </div>
                    <div className="content__skills__description__text">
                        I develop simple, intuitive and responsive user interface that
                        helps users get things done with less effort and time with those
                        technologies.
                    </div>
                </div>
                <div className="content__skills__icons">
                    <div className="content__skill__icon">
                        <img src={icon1} alt="skill-icon" />
                    </div>
                    <div className="content__skill__icon">
                        <img src={icon2} alt="skill-icon" />
                    </div>
                    <div className="content__skill__icon">
                        <img src={icon3} alt="skill-icon" />
                    </div>
                    <div className="content__skill__icon">
                        <img src={icon4} alt="skill-icon" />
                    </div>
                    <div className="content__skill__icon">
                        <img src={icon5} alt="skill-icon" />
                    </div>
                    <div className="content__skill__icon">
                        <img src={icon6} alt="skill-icon" />
                    </div>
                    <div className="content__skill__icon">
                        <img src={icon7} alt="skill-icon" />
                    </div>
                    <div className="content__skill__icon">
                        <img src={icon8} alt="skill-icon" />
                    </div>
                    <div className="content__skill__icon">
                        <img src={icon9} alt="skill-icon" />
                    </div>
                    <div className="content__skill__icon">
                        <img src={icon10} alt="skill-icon" />
                    </div>
                </div>
            </motion.div>
            <div className="content__soft-skills">
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={textAnimationBottom}
                    transition={{ duration: 0.6 }}
                    className="soft-skills__title">
                    My soft skills
                </motion.div>
                <motion.ul
                    initial='hidden'
                    whileInView='visible'
                    variants={textAnimationLeft}
                    transition={{ duration: 0.6 }}
                    className="soft-skills__list">
                    <li>
                        conscientious performance of duties;
                    </li>
                    <li>
                        quick learning and receptiveness to new information;
                    </li>
                    <li>
                        time management skills;
                    </li>
                    <li>
                        politeness and calmness in any conflict situation;
                    </li>
                    <li>
                        result orientation;
                    </li>
                    <li>
                        high level of communication.
                    </li>
                    <li>
                        team work to achieve set goals;
                    </li>
                </motion.ul>
            </div>
        </>
    )
}

export default Skills