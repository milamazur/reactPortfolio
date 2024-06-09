import {FunctionComponent} from 'react'
import {NavLink} from 'react-router-dom'


const Text: FunctionComponent = () => {
    
    return (
        <div className=" mt-10 leading-10 pl-16 pr-16 max-w-3xl"  >
            <p><strong>My name is Mila Mazur. </strong>
                I was born in Torun, Poland where I spent all the way from baby to uni. Later inf life I lived in Madrid and London. Currently I am a <strong className="underline text-pink-500"> programming student</strong> , but also a <strong className="underline"> freelance graphic designer, illustrator and painter</strong> living in Lier, Belgium.
                Below you can find some useful information about me.
                If you want to know even more about me and my interests <NavLink to='/about' className="text-amber-500 underline"> click here</NavLink>!</p>
        </div>
    )
}

export default Text
