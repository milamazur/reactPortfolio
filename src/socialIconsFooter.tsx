import {FunctionComponent} from 'react'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'



const SocialIconsFooter: FunctionComponent = () => {
    return (
        <div className="w-screen">

            <div className="flex flex-wrap justify-center mb-20 text-3xl m-20 space-x-4 align-middle ">
                <NavLink to="https://github.com/milamazur"><FaGithub/></NavLink>
                <NavLink to="https://www.linkedin.com/in/mila-mazur-10644a151/"><AiFillLinkedin/></NavLink>
                <NavLink to="https://www.instagram.com/milaamazur/"><AiFillInstagram/></NavLink>
            </div>

        </div>


    )
}

export default SocialIconsFooter
