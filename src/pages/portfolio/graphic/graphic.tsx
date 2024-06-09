import {FunctionComponent, useState} from 'react'
import ToggleContent from '../toggleContent.tsx'
import graphic1 from "../../../images/graphic/Littletail1.jpg"
import graphic2 from "../../../images/graphic/Littletail2.jpg"
import graphic3 from "../../../images/graphic/Littletail3.jpg"
import graphic4 from "../../../images/graphic/Littletail4.jpg"
import graphic5 from "../../../images/graphic/Littletail5.jpg"
import graphic6 from "../../../images/graphic/Littletail6.jpg"



const Graphic: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div >
            <ToggleContent children={"Graphic Design"} isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="justify-center">
                        <div className="flex flex-wrap m-4 mb-10">
                            <img src={graphic1}/> 
                            <img src={graphic2}/> 
                            <img src={graphic3}/> 
                            <img src={graphic4}/> 
                            <img src={graphic5}/> 
                            <img src={graphic6}/> 
                        </div>        
                    </div>
                </div>
            )}
        </div>

    );
}

export default Graphic;


