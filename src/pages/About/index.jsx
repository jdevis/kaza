import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
import Dictionnaries from '../../data/Dictionnary.json'
import './about.scss'

const About = () => {
    const lang = 'fr' // 'en' for english
    return (
        <>
            <main>
                <Banner page='about' />
                <div className="about">
                    {Dictionnaries.map((dictionnary) => (
                        <div key={dictionnary.id} className="about-dropdown">
                            {lang === 'fr' && <Dropdown title={dictionnary.fr.title} datas={dictionnary.fr} />}
                            {lang === 'en' && <Dropdown title={dictionnary.en.title} datas={dictionnary.en} />}
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default About
