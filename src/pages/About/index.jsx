import Banner from "../../components/Banner"
import Dropdown from "../../components/Dropdown"
import { dictionnaries } from "../../data/Dictionnary"
import './about.scss'

function About() {
    return (
        <>
            <main>
                <Banner page='about' />
                <div className="about">
                    {dictionnaries.map((dictionnary)=>(
                        <div key={dictionnary.id} className="about-dropdown">
                            <Dropdown title={dictionnary.fr.title} datas={dictionnary.fr} />
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default About
