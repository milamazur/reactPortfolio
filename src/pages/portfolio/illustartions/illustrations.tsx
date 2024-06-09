import {FunctionComponent, useState} from 'react'
import ToggleContent from '../toggleContent.tsx'
import ill1 from "../../../images/illustration/dino2.jpg"
import ill2 from "../../../images/illustration/dino4.jpg"
import ill3 from "../../../images/illustration/halloween.jpg"
import ill4 from "../../../images/illustration/jungle.jpg"
import ill5 from "../../../images/illustration/sea.jpg"
import ill6 from "../../../images/illustration/tipi.jpg"



const Illustrations: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div >
            <ToggleContent children={"Illustrations"} isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="justify-center">
                        <div className="flex flex-wrap m-4 mb-10">
                            <img src={ill1}/> 
                            <img src={ill2}/> 
                            <img src={ill3}/> 
                            <img src={ill4}/> 
                            <img src={ill5}/> 
                            <img src={ill6}/> 
                        </div>        
                    </div>
                </div>
            )}
        </div>

    );
}

export default Illustrations;


