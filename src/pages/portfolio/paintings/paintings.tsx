import {FunctionComponent, useState} from 'react'
import ToggleContent from '../toggleContent.tsx'


const Paintings: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className='mb-6'>
            <ToggleContent children={"Paintings"} isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="w-screen min-h-screen flex items-center justify-center p-4">
                <div className="flex flex-wrap justify-center maxImage">
                            <img src={'./painting/painting1.jpg'} className='mb-10'/> 
                            <img src={'./painting/painting2.jpg'} className='mb-10'/> 
                            <img src={'./painting/painting3.jpg'} className='mb-10'/> 
                            <img src={'./painting/painting4.jpg'} className='mb-10'/> 
                            <img src={'./painting/painting5.jpg'} className='mb-10'/> 
                            <img src={'./painting/painting6.jpg'}/> 
                        </div>        
                    </div>
            )}
        </div>

    );
}

export default Paintings;


