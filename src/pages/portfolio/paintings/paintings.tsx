import {FunctionComponent, useState} from 'react'
import ToggleContent from '../toggleContent.tsx'
import painting1 from './painting/painting1.jpg'
import painting2 from './painting/painting2.jpg'
import painting3 from './painting/painting3.jpg'
import painting4 from './painting/painting4.jpg'
import painting5 from './painting/painting5.jpg'
import painting6 from './painting/painting6.jpg'



const Paintings: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className='mb-6'>
            <ToggleContent children={"Paintings"} isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="w-screen min-h-screen flex items-center justify-center p-4">
                <div className="flex flex-wrap justify-center maxImage">
                            <img src={painting1} className='mb-10'/> 
                            <img src={painting2} className='mb-10'/> 
                            <img src={painting3} className='mb-10'/> 
                            <img src={painting4} className='mb-10'/> 
                            <img src={painting5} className='mb-10'/> 
                            <img src={painting6}/> 
                        </div>        
                    </div>
            )}
        </div>

    );
}

export default Paintings;


