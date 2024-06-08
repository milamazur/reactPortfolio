import {FunctionComponent} from 'react'
import { FaHtml5 ,FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaBootstrap } from "react-icons/fa"
import { SiBlazor } from 'react-icons/si'
import { TbBrandCSharp } from "react-icons/tb"

const Skills: FunctionComponent = () => {

    return (
        <div className="w-60 text-center">
            <div className="grid grid-cols-2 w-60 place-items-center">
            <TbBrandCSharp className="skill" title="C#"/>
                <FaReact className="skill" title="React"/>
                <FaJsSquare className="skill" title="JavaScript"/>
                <FaHtml5 className="skill" title="HTML5"/>
                <FaCss3Alt className="skill" title="CSS3"/>
                <FaBootstrap className="skill" title="Bootstrap"/>
                <FaDatabase className="skill" title="Database"/>
                <SiBlazor className="skill" title="Blazor"/>
            </div>
        </div>
    )
}

export default Skills
