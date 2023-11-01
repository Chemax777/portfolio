import './greetings.css'
import { motion } from 'framer-motion'
import { textAnimationRight } from '../../Animations/animations'

function Greetings() {
    return (
        <>
            <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textAnimationRight}
            transition={{ duration: 0.6 }}
            className="content-greetings">
                <span className="content-greetings-name"
                >Hi, I am <a href="#">Gres Maxim</a>👋</span><br />
                <span className="content-prof"
                >Front-end developer</span>
                <br />
            </motion.p>
        </>
    )
}

export default Greetings