import Banner from '../../components/Banner'
import Card from '../../components/Card'
import Lodgings from '../../data/lodging.json'
import './Home.scss'

function Home() {
  return (
    <>
      <main>
        <Banner page='home'/>
        <section className='home'>
          {Lodgings.map((lodging)=>(
            <Card imgSrc={lodging.cover} title={lodging.title} id={lodging.id} key={lodging.id} />
          ))}
        </section>
        </main>
    </>
  )
}

export default Home
