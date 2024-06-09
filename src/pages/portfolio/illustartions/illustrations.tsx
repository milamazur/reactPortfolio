import { FunctionComponent, useState } from 'react'
import ToggleContent from '../toggleContent.tsx'
import '../portfolio.css'

import { IllustrationImages } from '../../../data/images.ts'

const Illustrations: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="mb-6">
      <ToggleContent children={'Illustrations'} isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className="w-screen min-h-screen flex items-center justify-center p-4">
          <div className="flex flex-wrap justify-center">
            {IllustrationImages.map((imagePath, index) => (
              <img
                key={index}
                src={imagePath}
                alt={`illustration ${index + 1}`}
                className="w-full sm:w-1/2 lg:w-1/3 m-4 max-w-md "
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Illustrations
