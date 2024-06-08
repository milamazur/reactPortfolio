import {FunctionComponent} from 'react'
import Flag from 'react-world-flags'

const Languages: FunctionComponent = () => {
    return (
        <div className="w-90 text-center">
            <ul className=" place-items-center ml-14">
                <li className="grid grid-cols-2 w-40 items-end text-left mb-6 ">
                    <p className="text-lg">English</p>
                    <Flag className="w-11 " code="gb"/>
                </li>
                <li className="grid grid-cols-2 w-40 items-end text-left mb-6 ">
                    <p className="text-lg">Polish</p>
                    <Flag className="w-11" code="pl"/>
                </li>
                <li className="grid grid-cols-2 w-40 items-end text-left mb-6">
                    <p className="text-lg">Dutch</p>
                    <Flag className="w-11" code="be"/>
                </li>
                <li className="grid grid-cols-2 w-40 items-end text-left mb-6">
                    <p className="text-lg">Russian</p>
                    <Flag className="w-11" code="ru"/>
                </li>
                <li className="grid grid-cols-2 w-40 items-end text-left mb-6">
                    <p className="text-lg">Spanish</p>
                    <Flag className="w-11" code="es"/>
                </li>
            </ul>
        </div>
    )
}

export default Languages
