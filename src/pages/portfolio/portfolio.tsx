import {FunctionComponent} from 'react'
import {IImages} from '../../models/IImages.ts'
import Accordion from './accordion.tsx'
import AccordionItem from './accordionItem.tsx'
import Images from './images.tsx'

interface  PortfolioProps {
    images: IImages[]
}

const Portfolio: FunctionComponent<PortfolioProps> = ({images}) => {

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
            <Accordion images={images}>
                {output}
            </Accordion>

        </div>

    );
}

export default Portfolio;


