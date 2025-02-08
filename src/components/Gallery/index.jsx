import { useState } from 'react'
import './gallery.scss'

function Gallery( {datas}){

    const total = datas.length
    const [index, setIndex] = useState(0)
    const previousPicture = () =>{ setIndex((prevIndex) => prevIndex === 0 ? total - 1 : prevIndex - 1) }
    const nextPicture = () => { setIndex((prevIndex) => prevIndex === total - 1 ? 0 : prevIndex + 1) }

    return (
        <div className='slider'>
            {
                total > 1 && (
                    <>
                    <button className='fa-solid fa-chevron-left' onClick={previousPicture} alt="Previous image"></button>
                    <button className='fa-solid fa-chevron-right' onClick={nextPicture} alt="Next image"></button>
                    <span className='paging'>{index+1} / {total}</span>
                    </>
                )
            }
            <img src={datas[index]} key={index} alt='' />
        </div>
    )

}
export default Gallery
