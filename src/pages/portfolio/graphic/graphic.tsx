import {FunctionComponent, useState} from 'react'
import ToggleContent from '../toggleContent.tsx'


const Graphic: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div >
            <ToggleContent children={"Graphic Design"} isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="w-screen min-h-screen flex items-center justify-center p-4">
                <div className="flex flex-wrap justify-center maxPainting">
                            <img src={'./graphic/littletail1.jpg'} className='mb-10'/> 
                            <img src={'./graphic/littletail2.jpg'} className='mb-10'/> 
                            <img src={'./graphic/littletail3.jpg'} className='mb-10'/> 
                            <img src={'./graphic/littletail4.jpg'} className='mb-10'/> 
                            <img src={'./graphic/littletail5.jpg'} className='mb-10'/> 
                            <img src={'./graphic/littletail6.jpg'} className=''/> 
                        </div>        
                    </div>
            )}
        </div>

    );
}

export default Graphic;


