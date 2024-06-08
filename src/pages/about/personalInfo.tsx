import {FunctionComponent} from 'react'
import { FaBirthdayCake, FaMobileAlt} from 'react-icons/fa';
import { IoMdHome } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import './about.css'

const PersonalInfo: FunctionComponent = () => {
    return (
        <div className="">
            <ul className=" ml-10 mb-10">
                <li className="flex place-items-center space-x-6 pb-2">
                    <IoMdPerson /><p className="text-lg">Mila Mazur</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <IoMdHome /><p className="text-lg">Lier, Belgium</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <FaBirthdayCake /><p className="text-lg">02.12.1990</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <FaMobileAlt /><p className="text-lg">+32 472 08 20 16</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2">
                    <MdEmail /><p className="text-lg">mazurmilka@gmail.com</p>
                </li>
                <li className="flex place-items-center space-x-6 pb-2 pt-6 cvButton">
                    <a href="/path/to/your/cv.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="flex justify-center font-bold p-2 bg-yellow-200 text-black no-underline items-center text-center">View my CV!</button>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default PersonalInfo
