import React from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

interface ToggleContentProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const ToggleContent: React.FC<ToggleContentProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-row items-center justify-start bg-yellow-200 text-black shadow-xl rounded-tl-full rounded-br-full pr-8 pl-8">
        <div className="accordionItemButton font-bold">Programming</div>
        <div
          className="cursor-pointer ml-3 font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="pl-4 pr-4">{isOpen ? <AiOutlineUp /> : <AiOutlineDown />}</span>
        </div>
      </div>
    </div>
  )
}

export default ToggleContent
