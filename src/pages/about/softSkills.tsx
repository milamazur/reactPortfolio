import {FunctionComponent} from 'react'
import './about.css'

const SoftSkills: FunctionComponent = () => {
    return (
        <div className="softSkills">
            <ul className=" pl-10 pb-10">
                <li className="flex place-items-center space-x-6 pb-2">
                    <p className="text-lg">Creative thinking</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <p className="text-lg">Attention to detail</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <p className="text-lg">Organization</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <p className="text-lg">Integrity</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <p className="text-lg">Approachable</p>
                </li>
            </ul>
        </div>
    )
}

export default SoftSkills
