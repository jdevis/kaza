import Lodgings from '../../data/lodging.json'
import Rating from "../../components/Rating"
import { useParams } from 'react-router-dom'
import './lodging.scss'

function Lodging() {
    const {id} = useParams()
    const currentLodging = Lodgings.find((lodging) => lodging.id === id)
    return (
        <>
            <main className='lodging'>
                <div className='gallery'>
                    {currentLodging.pictures.map((picture,index)=>(
                        <img src={picture} key={index} alt=''/>
                    ))}
                </div>
                <p className='title'>{currentLodging.title}</p>
                <p className='location'>{currentLodging.location}</p>
                <p className='host'>{currentLodging.host.name}<img src={currentLodging.host.picture} alt='' /></p>
                {currentLodging.tags.map((tag,index)=>(
                    <p key={index}>{tag}</p>
                ))}
                <Rating ratings={currentLodging.rating} />
                <div>
                    <p className='collapse-title'>description</p>
                    <p className='collapse-content'>{currentLodging.description}</p>
                </div>
                <div>
                    <p className='collapse-title'>équipements</p>
                    <ul>
                        {currentLodging.equipments.map((equip,index)=>(
                            <li key={index}>{equip}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}

export default Lodging
