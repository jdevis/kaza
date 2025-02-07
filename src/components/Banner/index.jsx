import bannerImg from '../../assets/banner-home.png'
import './banner.scss'

function Banner() {
    return (
        <div className='banner-home'>
            <img src={bannerImg} alt='' />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner