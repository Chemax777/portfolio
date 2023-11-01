import { motion } from 'framer-motion'
import { textAnimationBottom, textAnimationLeft } from '../../Animations/animations'

import './work-exp.css'

function WorkExp() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className="content__work-exp">
            <motion.h2
                variants={textAnimationBottom}
                transition={{ duration: 0.6 }}
                className='work-exp__title'>
                Work Experience
            </motion.h2>
            <motion.div
                variants={textAnimationLeft}
                transition={{ duration: 0.6 }}
                className='work-exp__description'>
                <div className='description__position'>
                    <div className='position__name'>Data analyst</div>
                    <div className='position__duration'>JS «IR Bank» 07/2020 – 06/2022:</div>
                    <ul className='position__duties'>
                        <li>analysis and reporting of the Contact Center;</li>
                        <li>calculation and analysis of performance indicators of the
                            Contact Center and the Bank's retail network;
                        </li>
                        <li>formation and analysis of a sample of customers for
                            preparing the set-up of marketing campaigns;
                        </li>
                        <li>
                            analysis of debts of the Bank's clients;
                        </li>
                        <li>
                            control over the timely transfer of customers with overdue
                            debts to the employees of the Bank's problem assets
                            management.
                        </li>
                    </ul>
                </div>
                <div className='description__position'>
                    <div className='position__name'>Supervisor</div>
                    <div className='position__duration'>JS «IR Bank» 04/2018 – 07/2020:</div>
                    <ul className='position__duties'>
                        <li>
                            organization of work of a group of operators;
                        </li>
                        <li>
                            consultation of operators on problematic issues;
                        </li>
                        <li>
                            efficient distribution of incoming and outgoing traffic;
                        </li>
                        <li>
                            compliance with the load balance;
                        </li>
                        <li>
                            control and analysis of sales efficiency;
                        </li>
                        <li>
                            consultation of the Private line of the Contact Center;
                        </li>
                        <li>
                            generating reports: regarding the effectiveness of the
                            group, conversion, incoming and outgoing traffic;
                        </li>
                        <li>
                            SLA and FCR level control.
                        </li>
                    </ul>
                </div>
                <div className='description__position'>
                    <div className='position__name'>Contact center specialist </div>
                    <div className='position__duration'>JS «IR Bank» 03/2017 – 04/2018:</div>
                    <ul className='position__duties'>
                        <li>
                            making incoming and outgoing calls;
                        </li>
                        <li>
                            customer consultation;
                        </li>
                        <li>
                            conducting banking operations in telephone mode;
                        </li>
                        <li>
                            conducting telephone sales and service calls as part of
                            marketing campaigns;
                        </li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default WorkExp