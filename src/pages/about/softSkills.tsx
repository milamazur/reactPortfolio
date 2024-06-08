import {FunctionComponent} from 'react'
import './about.css'

const SoftSkills: FunctionComponent = () => {
    return (
        <div className="softSkills  ">
            <ul className=" pl-10 pb-10 textSize">
                <li className="flex place-items-center space-x-6 pb-2">
                    <p>Creative thinking</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <p>Attention to detail</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <p>Organization</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <p>Integrity</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <p>Approachable</p>
                </li>
            </ul>
        </div>
    )
}

export default SoftSkills
