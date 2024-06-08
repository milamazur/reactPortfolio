import {FunctionComponent, useContext} from 'react'
import {ThemeContext} from './themeProvider.tsx'
import {NavLink} from 'react-router-dom'
import { FaMoon} from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const TopBar: FunctionComponent = () => {
    const {currentTheme, toggleTheme} = useContext(ThemeContext)
    return (
        <>
            <div className="fixed top-0 w-screen bg-pink-500 h-14">
                <div className=" flex ">
                    <div className="w-4/5 ml-8 mt-5">
                        <a href="#" onClick={toggleTheme} className='themeIcon'>
                            {currentTheme === 'light' ? <FaMoon size={18}/> : <IoSunny size={24}/>}
                        </a>
                    </div>
                    <NavLink to="/home" className="text-right flex-shrink-0 truncate topbarMila">
                        mila mazur
                    </NavLink>
                </div>
            </div>
        </>
    )
}
export default TopBar
