import BannerHome from '../../assets/banner-home.png'
import BannerAbout from '../../assets/banner-about.png'
import './banner.scss'

function Banner({page}) {
    const bannerSrc = page === 'home' ? BannerHome : BannerAbout
    const bannerClass = page === 'home' ? 'banner-home' : 'banner-about'
    return (
        <div className={bannerClass}>
            <img src={bannerSrc} alt='' />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner