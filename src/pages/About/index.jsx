import Banner from "../../components/Banner"
import { dictionnaries } from "../../data/Dictionnary"
import './about.scss'

function About() {
    return (
        <>
            <main>
                <Banner page='about' />
                <div className="about">
                    {dictionnaries.map((dictionnary)=>(
                        <div key={dictionnary.id}>
                            <p className='title'>{dictionnary.fr.title}</p>
                            <p className='description'>{dictionnary.fr.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default About
