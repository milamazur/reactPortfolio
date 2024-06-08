import {FunctionComponent} from 'react'
import {IImages} from '../../models/IImages.ts'
const Images: FunctionComponent<IImages> = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {/* {pictures.map(p =>
                <img key={p.id} src={p.imgSrc} alt="pictures" className="w-full sm:w-1/2 lg:w-1/3 m-4 max-w-md " />
            )} */}
        </div>
    )
}
export default Images
