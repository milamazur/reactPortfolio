import {FunctionComponent} from 'react'
import Text from './text.tsx'
import Typewriter from './typewriter.tsx'


const Home: FunctionComponent = () => {

    return (
        <div className="w-screen ">
            <div className="flex flex-col items-center justify-center mt-20">
                <Typewriter/>
                <Text/>
            </div>
        </div>
    )
}


export default Home
