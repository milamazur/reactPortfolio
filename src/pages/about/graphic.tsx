import {FunctionComponent} from 'react'
import {SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects, SiAdobeindesign } from "react-icons/si"
interface GraphicProps {

}

const Graphic: FunctionComponent<GraphicProps> = () => {
    return (
        <div className="w-60 text-center">
            <div className="grid grid-cols-2 w-60 place-items-center">
                <SiAdobeillustrator className="skill"/>
                <SiAdobephotoshop className="skill"/>
                <SiAdobepremierepro className="skill"/>
                <SiAdobeaftereffects className="skill"/>
                <SiAdobeindesign className="skill"/>
            </div>
        </div>
    )
}

export default Graphic
