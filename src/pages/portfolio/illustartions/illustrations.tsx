import {FunctionComponent, useState} from 'react';
import ToggleContent from '../toggleContent.tsx';
import ill1 from './illustration/dino2.jpg';
import ill2 from './illustration/dino4.jpg';
import ill3 from './illustration/halloween.jpg';
import ill4 from './illustration/jungle.jpg';
import ill5 from './illustration/sea.jpg';
import ill6 from './illustration/tipi.jpg';
import '../portfolio.css';

const Illustrations: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className='mb-6'>
            <ToggleContent children={"Illustrations"} isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="w-screen min-h-screen flex items-center justify-center p-4">
                    <div className="flex flex-wrap justify-center maxImage">
                        <img src={ill1} className='mb-10'/> 
                        <img src={ill2} className='mb-10'/> 
                        <img src={ill3} className='mb-10'/> 
                        <img src={ill4} className='mb-10'/> 
                        <img src={ill5} className='mb-10'/> 
                        <img src={ill6}/> 
                    </div> 
                </div>
            )}
        </div>
    );
}

export default Illustrations;
