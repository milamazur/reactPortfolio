import {FunctionComponent, useState} from 'react'
import Skills from './skills.tsx'
import Graphic from './graphic.tsx'
import Languages from './languages.tsx';

const types = ['Software Skills', 'Graphic', 'Languages'];

const Tabs: FunctionComponent = () => {
    const [active, setActive] = useState(types[0]);

    return (
        <div>
            <div className="flex">
                {types.map(type => (
                    <div
                        role="tab"
                        key={type}
                        className={`tabText px-2 sm:px-3 py-1 border-b-2 mb-6 sm:mb-16 mr-2 sm:mr-10
                        ${active === type? 'border-blue-500 text-pink-500 opacity-100 cursor-pointer' : 'border-transparent cursor-pointer'}
                        sm:flex-shrink-0`}
                        onClick={() => setActive(type)}
                    >
                        {type}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center ">
                    {active === 'Software Skills' && <Skills/>}
                    {active === 'Graphic' && <Graphic/>}   
                    {active === 'Languages' && <Languages/>}
            </div>
        </div>
    );
}

export default Tabs
