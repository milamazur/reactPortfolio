import {FunctionComponent, useState} from 'react'
import PersonalInfo from './personalInfo.tsx';
import SoftSkills from './softSkills.tsx';

const types = ['Personal Information', 'Soft Skills']

const TabsPersonal: FunctionComponent = () => {
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
            <div className="">
                    {active === 'Personal Information' && <PersonalInfo/>}                 
                    {active === 'Soft Skills' && <SoftSkills/>}               
            </div>
        </div>
    );
}

export default TabsPersonal
