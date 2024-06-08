import {FunctionComponent} from 'react'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'

const SocialIconsFooter: FunctionComponent = () => {
    return (
        <div className="w-screen">

            <div className="flex flex-wrap justify-center mb-20 text-3xl m-20 space-x-4 align-middle ">
                <NavLink to="https://github.com/milamazur" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </NavLink>
                <NavLink to="https://www.linkedin.com/in/mila-mazur-10644a151/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin/>
                </NavLink>
                <NavLink to="https://www.instagram.com/milaamazur/" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram/>
                </NavLink>
            </div>
        </div>
    )
}

export default SocialIconsFooter
