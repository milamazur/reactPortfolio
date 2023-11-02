import {FunctionComponent, useContext} from 'react'
import {ThemeContext} from './themeProvider.tsx'
import {NavLink} from 'react-router-dom'

const TopBar: FunctionComponent = () => {
    const {currentTheme, toggleTheme} = useContext(ThemeContext)
    return (
        <>
            <div className="fixed top-0 w-screen bg-pink-500 h-14">
                <div className=" flex ">
                    <div className="w-4/5 ml-10 mt-3.5">
                        <a href="#" onClick={toggleTheme} className=" text-left  ">
                            Switch to {currentTheme === 'light' ? 'dark' : 'light'} mode
                        </a>
                    </div>
                    <NavLink to="/home" className="w-1/5 text-2xl mt-2.5 text-right mr-24 flex-shrink-0 truncate">
                        mila mazur
                    </NavLink>
                </div>
            </div>
        </>

    )
}
export default TopBar
