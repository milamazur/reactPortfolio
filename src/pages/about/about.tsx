import {FunctionComponent} from 'react'
//import Skills from './skills.tsx'
//import ProgressBar from './progressBar.tsx'
import Tabs from './tabs.tsx'
import meAbout from '../about/meAbout.jpg'
import {NavLink} from 'react-router-dom'

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (
        <div>
            <div className="mt-24">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-2xl mb-16">ABOUT ME</h1>
                </div>
            </div>

            <div className="flex flex-wrap justify-center">
                <div className="flex">
                    <div className="flex-shrink max-w-xl m-10">
                        <img
                            src={meAbout}
                            alt="meAbout"
                            className="rounded-2xl  shadow-xl"
                        />
                        <div className="flex-shrink">
                            <div className=" mt-10 leading-10 pl-6 pr-6"  >
                                <p className="mb-4">
                                    I have always been fascinated by the creative process and the beauty it can bring to the world.
                                    This passion led me to pursue a <strong className="underline text-pink-500">Master of Fine Arts in Easel Painting  and Graphic Design </strong> at Nicolaus Copernicus University in Toruń.
                                    During my studies, I had the opportunity to participate in an exchange program at the Universidad Comlutense de Madrid,
                                    which broadened my perspective and enriched my creative skills.</p>
                                <p className="mb-4">
                                    After completing my Master's degree, I decided to further my education by pursuing a graduate degree in <strong className="underline text-pink-500"> Programming </strong> at Thomas More University in Lier.
                                    I am currently in the process of honing my programming skills and looking forward to the challenges that lie ahead.
                                </p>
                                <p className="mb-4">
                                    My journey in the world of arts and programming has been a blend of creativity, problem-solving,
                                    and continuous learning. Each step has been a stepping stone towards my goal of becoming a well-rounded professional.
                                    <NavLink to='/portfolio' className="text-amber-500 underline"> Click here</NavLink> to see some of my work!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" ml-6 mr-4 mt-10">
                    <Tabs />
                </div>
            </div>
        </div>


    )
}

export default About
