import {FunctionComponent} from 'react'
import { FaHtml5 ,FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaBootstrap } from "react-icons/fa"
import { SiBlazor } from 'react-icons/si'
import { TbBrandCSharp } from "react-icons/tb"

const Skills: FunctionComponent = () => {

    return (
        <div className="w-60 text-center">
            <div className="grid grid-cols-2 w-60 place-items-center">
                <TbBrandCSharp className="skill"/>
                <FaReact className="skill"/>
                <FaJsSquare className="skill"/>
                <FaHtml5 className="skill"/>
                <FaCss3Alt className="skill"/>
                <FaBootstrap className="skill"/>
                <FaDatabase className="skill"/>
                <SiBlazor className="skill"/>
            </div>
        </div>
    )
}

export default Skills
