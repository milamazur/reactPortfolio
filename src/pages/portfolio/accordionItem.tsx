import {FunctionComponent, PropsWithChildren, useContext} from 'react'
import {AccordionContext} from './accordion.tsx'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'

interface AccordionItemProps extends PropsWithChildren {
    title: string
    openKey: string
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({children, title, openKey}) => {

    const {currentOpenKey, toggleOpenKey} = useContext(AccordionContext)
    const isOpen = openKey === currentOpenKey
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="p-4 flex flex-row items-center justify-start bg-yellow-200 text-black shadow-xl rounded-tl-full rounded-br-full mb-5 pr-8 pl-8">
                <div className="text-2xl font-bold p-1 pr-4 pl-4">{title}</div>
                <div className="cursor-pointer ml-3 mt-1 font-bold" onClick={() => toggleOpenKey(openKey)}>
                    {isOpen ? <AiOutlineUp /> : <AiOutlineDown/>}
                </div>
            </div>
            <div className="flex justify-center items-center">
                {isOpen && children}
            </div>
        </div>






    )
}

export default AccordionItem