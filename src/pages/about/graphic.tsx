import {FunctionComponent} from 'react'
import {SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects, SiAdobeindesign } from "react-icons/si"
interface GraphicProps {

}

const Graphic: FunctionComponent<GraphicProps> = () => {
    return (
        <div className="w-60 text-center">
            <div className="grid grid-cols-2 w-60 place-items-center">
                <SiAdobeillustrator className="skill" title="Adobe Illustrator"/>
                <SiAdobephotoshop className="skill" title="Adobe Photoshop"/>
                <SiAdobepremierepro className="skill" title="Adobe PremierePro"/>
                <SiAdobeaftereffects className="skill" title="Adobe Affter Effects"/>
                <SiAdobeindesign className="skill" title="Adobe InDesign"/>
            </div>
        </div>
    )
}

export default Graphic
