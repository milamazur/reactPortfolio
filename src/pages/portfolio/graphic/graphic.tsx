import {FunctionComponent, useState} from 'react'
import ToggleContent from '../toggleContent.tsx'
import graphic1 from "../../../images/graphic/Littletail1.jpg"



const Graphic: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div >
            <ToggleContent isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="justify-center">
                        <div className="sliderImages m-4 mb-10">
                            <img src={graphic1}/> 
                        </div>        
                    </div>
                </div>
            )}
        </div>

    );
}

export default Graphic;


