import {FunctionComponent, useState} from 'react'
import {IImages} from '../../models/IImages.ts'
import Accordion from './accordion.tsx'
import AccordionItem from './accordionItem.tsx'
import Images from './images.tsx'
import ToggleContent from './toggleContent.tsx'
import { Recipes, StockCoach, HonestyBar, PortfolioHTML, Dxomark, VTI } from '../../data/projects.ts';


import ImageSlider from './imageSlider/imageSlider.tsx'

interface  PortfolioProps {
    images: IImages[]
}

const Portfolio: FunctionComponent<PortfolioProps> = ({images}) => {
    const [isOpen, setIsOpen] = useState(true)

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
                <p className="max-w-sm mt-5 text-center p-10"> Find some examples of programming projects, illustrations, paintings and graphic design projects I have made over the years.</p>
            </div>
            <ToggleContent isOpen={isOpen} setIsOpen={setIsOpen}/>
            {isOpen && (
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="justify-center">
                        <div className="sliderImages m-4 mb-10">
                            <ImageSlider  projects={Dxomark}/>
                        </div>   
                        <div className='flex flex-wrap justify-center'>
                            <div className="sliderImages mb-10 ml-5 mr-5 ">
                                <ImageSlider  projects={Recipes}/>
                            </div>       
                            <div className="sliderImages mb-10 ml-5 mr-5">
                                <ImageSlider  projects={HonestyBar}/>
                            </div>  
                        </div>      
                        <div className="sliderImages m-4 mb-14">
                            <ImageSlider  projects={VTI}/>
                        </div>  
                        <div className="sliderImages m-4 mb-14">
                            <ImageSlider  projects={PortfolioHTML}/>
                        </div> 
                        <div className="sliderImages m-4 mb-6">
                            <ImageSlider  projects={StockCoach}/>
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


