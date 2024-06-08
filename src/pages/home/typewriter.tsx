import { useState } from 'react';
import TypewriterEffect from "typewriter-effect";
import myImage from './me.png'
const Typewriter = () => {
    const [isHovering, setHover] = useState(false);

    return (
        <div className="flex flex-wrap justify-center"
             onMouseEnter={() => {
                 setHover(true);
             }}
             onMouseLeave={() => {
                 setHover(false);
             }}>
            <div className="flex flex-col lg:flex-row mr-10 ml-6">
                <div className="max-w-2xl">
                    <img
                        src={myImage}
                        alt="me"
                        className="object-cover mt-10"
                    />
                </div>
                <div className="md:w-60 font-bold text-4xl ml-16 mt-10 sm:mt-20 mr-20">
                    <p>HI!</p>
                    <p>I'm Mila</p>
                    <div className="text-pink-400 mt-5" style={{ visibility: isHovering? 'visible' : 'hidden' }}>
                        <TypewriterEffect
                            options={{
                                strings: ["Welcome to my portfolio"],
                                autoStart: isHovering,
                                loop: false,
                            }}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Typewriter;

