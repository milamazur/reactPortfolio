import {FunctionComponent} from 'react'

const Languages: FunctionComponent = () => {
    return (
        <div className="w-90 text-center">
            <ul className=" place-items-center ml-14">
                <li className="grid grid-cols-2 w-40 items-end text-left mb-6 ">
                    <p className="text-lg">English</p>
                </li>
                <li className="grid grid-cols-2 w-40 items-end text-left mb-6 ">
                    <p className="text-lg">Polish</p>
                </li>
                <li className="grid grid-cols-2 w-40 items-end text-left mb-6">
                    <p className="text-lg">Dutch</p>
                </li>
                <li className="grid grid-cols-2 w-40 items-end text-left mb-6">
                    <p className="text-lg">Russian</p>
                </li>
                <li className="grid grid-cols-2 w-40 items-end text-left mb-6">
                    <p className="text-lg">Spanish</p>
                </li>
            </ul>
        </div>
    )
}

export default Languages
