import img1 from 'src/images/illustration/dino2.jpg'
import img2 from 'src/images/illustration/jungle.jpg'
import img3 from 'src/images/illustration/tipi.jpg'
import img4 from 'src/images/illustration/sea.jpg'
import img5 from 'src/images/illustration/halloween.jpg'
import img6 from 'src/images/illustration/dino4.jpg'
import {IImages} from '../models/IImages.ts'

import img7 from 'src/images/painting/painting1.jpg'
import img8 from 'src/images/painting/painting2.jpg'
import img9 from 'src/images/painting/painting3.jpg'
import img10 from 'src/images/painting/painting4.jpg'
import img11 from 'src/images/painting/painting5.jpg'
import img12 from 'src/images/painting/painting6.jpg'

import img13 from 'src/images/graphic/Littletail1.jpg'
import img14 from 'src/images/graphic/Littletail2.jpg'
import img15 from 'src/images/graphic/Littletail3.jpg'
import img16 from 'src/images/graphic/Littletail4.jpg'
import img17 from 'src/images/graphic/Littletail5.jpg'
import img18 from 'src/images/graphic/littletail6.jpg'

const images: IImages[] = [
    {
        title: 'Illustrations',
        id: 'myId1',
        pictures: [
            {
                id: 1,
                imgSrc: img1,
            },
            {
                id: 2,
                imgSrc: img2,
            },
            {
                id: 3,
                imgSrc: img3,
            },
            {
                id: 4,
                imgSrc: img4,
            },
            {
                id: 5,
                imgSrc: img5,
            },
            {
                id: 6,
                imgSrc: img6,
            }
        ]
    },
    {
        title: 'Paintings',
        id: 'myId2',
        pictures: [
            {
                id: 7,
                imgSrc: img7,
            },
            {
                id: 8,
                imgSrc: img8,
            },
            {
                id: 9,
                imgSrc: img9,
            },
            {
                id: 10,
                imgSrc: img10,
            },
            {
                id: 11,
                imgSrc: img11,
            },
            {
                id: 12,
                imgSrc: img12,
            }
        ]
    },
    {
        title: 'Graphic Design',
        id: 'myId3',
        pictures: [
            {
                id: 13,
                imgSrc: img13,
            },
            {
                id: 14,
                imgSrc: img14,
            },
            {
                id: 15,
                imgSrc: img15,
            },
            {
                id: 16,
                imgSrc: img16,
            },
            {
                id: 17,
                imgSrc: img17,
            },
            {
                id: 18,
                imgSrc: img18,
            }
        ]
    }
]

export default images