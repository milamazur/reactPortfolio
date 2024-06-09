import {FunctionComponent, useState} from 'react'
import ToggleContent from '../toggleContent.tsx'
import painting1 from "../../../images/painting/painting1.jpg"
import painting2 from "../../../images/painting/painting2.jpg"
import painting3 from "../../../images/painting/painting3.jpg"
import painting4 from "../../../images/painting/painting4.jpg"
import painting5 from "../../../images/painting/painting5.jpg"
import painting6 from "../../../images/painting/painting6.jpg"



const Paintings: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div >
            <ToggleContent children={"Illustrations"} isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="justify-center">
                        <div className="flex flex-wrap m-4 mb-10">
                            <img src={painting1}/> 
                            <img src={painting2}/> 
                            <img src={painting3}/> 
                            <img src={painting4}/> 
                            <img src={painting5}/> 
                            <img src={painting6}/> 
                        </div>        
                    </div>
                </div>
            )}
        </div>

    );
}

export default Paintings;


