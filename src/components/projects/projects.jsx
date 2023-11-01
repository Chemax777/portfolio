import { motion } from 'framer-motion';
import { textAnimationBottom } from '../../Animations/animations';

import './projects.css'

import projectSportif from '../../img/projects-screens/sportif_screen.png'
import projectPizza from '../../img/projects-screens/pizza_screen.png'
import projectRAM from '../../img/projects-screens/rick_and_morty_screen.png'
import projectCinema from '../../img/projects-screens/cinema_screen.png'
import projectBooks from '../../img/projects-screens/react-books.png'
import projectWebStudio from '../../img/projects-screens/web_studio.png'

function Projects() {
    return (
        <div id="works" className="content__projects">
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={textAnimationBottom}
                transition={{ duration: 0.6 }}
                className="content__works__header-small"
            >my projects</motion.div>
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={textAnimationBottom}
                transition={{ duration: 0.6 }}
                className='projects__description'
            >
                <div className='project'>
                    <div className='project__img'>
                        <img src={projectCinema} alt="project" />
                    </div>
                    <div className='project__text'>
                        <h3 className='project__title'>Cinema project</h3>
                        <p className='text__description'>
                            Cinema app with information about sessions, movies and actors
                        </p>
                        <p>
                            Technologies: HTML, CSS, JS, React
                        </p>
                        <p>
                            Versions: Desktop, Mobile
                        </p>
                        <div className='view-on-git-btn'>
                            <a href="https://github.com/Chemax777/cinema" target='_blank' rel="noreferrer">
                                View on Github
                            </a>
                        </div>
                        <div className='view-on-git-btn'>
                            <a href="https://m-gres-cinema.netlify.app/" target='_blank' rel="noreferrer">
                                View Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className='project__img'>
                        <img src={projectRAM} alt="project" />
                    </div>
                    <div className='project__text'>
                        <h3 className='project__title'>Rick and Morty project</h3>
                        <p className='text__description'>
                            The app provide information about Rick and Morty cartoon (episodes, characters, locations)
                        </p>
                        <p>
                            Technologies: HTML, CSS, JS, React
                        </p>
                        <p>
                            Versions: Desktop, Mobile
                        </p>
                        <div className='view-on-git-btn'>
                            <a href="https://github.com/Chemax777/rick-and-morty-info" target='_blank' rel="noreferrer">
                                View on Github
                            </a>
                        </div>
                        <div className='view-on-git-btn'>
                            <a href="https://m-gres-rick-and-morty.netlify.app/" target='_blank' rel="noreferrer">
                                View Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className='project__img'>
                        <img src={projectBooks} alt="project" />
                    </div>
                    <div className='project__text'>
                        <h3 className='project__title'>React Books project</h3>
                        <p className='text__description'>
                            User can search any books and add them to favorite list
                        </p>
                        <p>
                            Technologies: HTML, CSS, JS, React, Redux
                        </p>
                        <p>
                            Versions: Desktop, Mobile
                        </p>
                        <div className='view-on-git-btn'>
                            <a href="https://github.com/Chemax777/react-books" target='_blank' rel="noreferrer">
                                View on Github
                            </a>
                        </div>
                        <div className='view-on-git-btn'>
                            <a href="https://react-books-gres-maxim.netlify.app" target='_blank' rel="noreferrer">
                                View Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className='project__img'>
                        <img src={projectSportif} alt="project" />
                    </div>
                    <div className='project__text'>
                        <h3 className='project__title'>Sportif project</h3>
                        <p className='text__description'>
                            Men`s clothes internet store
                        </p>
                        <p>
                            Technologies: HTML, CSS, JS
                        </p>
                        <p>
                            Versions: Desktop, Mobile
                        </p>
                        <div className='view-on-git-btn'>
                            <a href="https://github.com/Chemax777/sportif" target='_blank' rel="noreferrer">
                                View on Github
                            </a>
                        </div>
                        <div className='view-on-git-btn'>
                            <a href="https://m-gres-sportif.netlify.app/" target='_blank' rel="noreferrer">
                                View Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className='project__img'>
                        <img src={projectWebStudio} alt="project" />
                    </div>
                    <div className='project__text'>
                        <h3 className='project__title'>WebStudio project</h3>
                        <p className='text__description'>
                            WebStudio company site
                        </p>
                        <p>
                            Technologies: HTML, CSS, JS
                        </p>
                        <p>
                            Versions: Desktop, Mobile
                        </p>
                        <div className='view-on-git-btn'>
                            <a href="https://github.com/Chemax777/webstudio" target='_blank' rel="noreferrer">
                                View on Github
                            </a>
                        </div>
                        <div className='view-on-git-btn'>
                            <a href="https://m-gres-web-studio.netlify.app" target='_blank' rel="noreferrer">
                                View Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className='project__img'>
                        <img src={projectPizza} alt="project" />
                    </div>
                    <div className='project__text'>
                        <h3 className='project__title'>Pizza constructor project</h3>
                        <p className='text__description'>
                            User can construct your dream`s pizza with this App
                        </p>
                        <p>
                            Technologies: HTML, CSS, JS
                        </p>
                        <p>
                            Versions: Desktop
                        </p>
                        <div className='view-on-git-btn'>
                            <a href="https://github.com/Chemax777/pizza-constructor" target='_blank' rel="noreferrer">
                                View on Github
                            </a>
                        </div>
                        <div className='view-on-git-btn'>
                            <a href="https://m-gres-pizza.netlify.app/" target='_blank' rel="noreferrer">
                                View Demo
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Projects