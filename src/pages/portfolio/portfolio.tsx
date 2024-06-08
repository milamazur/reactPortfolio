import {FunctionComponent, useState} from 'react'
import {IImages} from '../../models/IImages.ts'
import Accordion from './accordion.tsx'
import AccordionItem from './accordionItem.tsx'
import Images from './images.tsx'
import ToggleContent from './toggleContent.tsx'

import Dxo from '../../images/projects/DxoMark/DxoMark.png'
import Dxo2 from '../../images/projects/DxoMark/DxoMark2.png'
import Dxo3 from '../../images/projects/DxoMark/DxoMark3.png'
import Dxo4 from '../../images/projects/DxoMark/DxoMark4.png'
// import family from '../../images/projects/recipes/familyRecipes1.png'
// import portfolio from '../../images/projects//portfolio/portfolioHTML.png'
// import honestyBar from '../../images/projects//honestyBar/honestyBar1.jpg'
import ImageSlider from './imageSlider/imageSlider.tsx'

interface  PortfolioProps {
    images: IImages[]
}

const Portfolio: FunctionComponent<PortfolioProps> = ({images}) => {
    const [isOpen, setIsOpen] = useState(true)

    const DxoMark = [
        Dxo, Dxo2, Dxo3, Dxo4,
    ]

    const output =[]

    for (const image of images) {
        output.push((
            <AccordionItem title={image.title} openKey={image.id}>
                <Images {...image}/>
            </AccordionItem>
        ))
    }
    return (
        <div className="mt-24" >
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-2xl">PORTFOLIO</h1>
                <p className="max-w-sm mt-5 text-center p-10"> Find some examples of illustrations, paintings and graphic design projects I have made over the years.</p>
            </div>
            <ToggleContent isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="p-4">
                    <div className="flex flex-wrap justify-center">
                        <div className="sliderImages m-4">
                            <ImageSlider  projects={DxoMark}/>
                        </div>                  
                    </div>
                </div>
            )}
            <Accordion images={images}>
                {output}
            </Accordion>

        </div>

    );
}

export default Portfolio;


