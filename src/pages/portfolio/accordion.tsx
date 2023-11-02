import {createContext, FunctionComponent, PropsWithChildren, useState} from 'react'
import {IImages} from '../../models/IImages.ts'

//context for accordion
interface IAccordionContext {
    currentOpenKey: string | undefined
    toggleOpenKey: (newOpenKey: string | undefined) => void
}
export const AccordionContext = createContext<IAccordionContext>({
    currentOpenKey: undefined,
    toggleOpenKey: (): void => {
        console.warn('An implementation for this method has not been provided.')
    },
})
interface AccordionProps extends PropsWithChildren {
    // defaultOpenKey?: string
    images: IImages[]
}
const Accordion: FunctionComponent<AccordionProps> = ({children, images}) => {

    const [currentOpenKey, setCurrentOpenKey] = useState<string | undefined>(images[0].id)
    const toggleOpenKey = (newOpenKey: string | undefined) => {
        if (currentOpenKey === newOpenKey) {
            setCurrentOpenKey(undefined)
        } else {
            setCurrentOpenKey(newOpenKey)
        }
    }
    return (
        <AccordionContext.Provider value={{currentOpenKey, toggleOpenKey}}>
            <div className="w-screen">
                <div className=" p-4 m-4 mt-10 ">
                    {children}
                </div>
            </div>

        </AccordionContext.Provider>
    )
}
export default Accordion
