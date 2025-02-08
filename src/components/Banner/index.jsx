import BannerHome from '../../assets/banner-home.png'
import BannerAbout from '../../assets/banner-about.png'
import './banner.scss'

function Banner({page}) {
    const bannerSrc = page === 'home' ? BannerHome : BannerAbout
    const bannerClass = page === 'home' ? 'banner-home' : 'banner-about'
    return (
        <div className={bannerClass}>
            <img src={bannerSrc} alt='' />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner