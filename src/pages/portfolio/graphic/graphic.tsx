import {FunctionComponent, useState} from 'react'
import ToggleContent from '../toggleContent.tsx'
import graphic1 from "./graphic/littletail1.jpg"
import graphic2 from "./graphic/littletail2.jpg"
import graphic3 from "./graphic/littletail3.jpg"
import graphic4 from "./graphic/littletail4.jpg"
import graphic5 from "./graphic/littletail5.jpg"
import graphic6 from "./graphic/littletail6.jpg"



const Graphic: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div >
            <ToggleContent children={"Graphic Design"} isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="w-screen min-h-screen flex items-center justify-center p-4">
                <div className="flex flex-wrap justify-center maxPainting">
                            <img src={graphic1} className='mb-10'/> 
                            <img src={graphic2} className='mb-10'/> 
                            <img src={graphic3} className='mb-10'/> 
                            <img src={graphic4} className='mb-10'/> 
                            <img src={graphic5} className='mb-10'/> 
                            <img src={graphic6} /> 
                        </div>        
                    </div>
            )}
        </div>

    );
}

export default Graphic;


