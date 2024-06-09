import {FunctionComponent, useState} from 'react';
import ToggleContent from '../toggleContent.tsx';
import '../portfolio.css';

const Illustrations: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className='mb-6'>
            <ToggleContent children={"Illustrations"} isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="w-screen min-h-screen flex items-center justify-center p-4">
                    <div className="flex flex-wrap justify-center maxImage">
                        <img src={'./illustration/dino2.jpg'} className='mb-10'/> 
                        <img src={'./illustration/dino4.jpg'} className='mb-10'/> 
                        <img src={'./illustration/halloween.jpg'} className='mb-10'/> 
                        <img src={'./illustration/jungle.jpg'} className='mb-10'/> 
                        <img src={'./illustration/sea.jpg'} className='mb-10'/> 
                        <img src={'./illustration/tipi.jpg'}/> 
                    </div> 
                </div>
            )}
        </div>
    );
}

export default Illustrations;
