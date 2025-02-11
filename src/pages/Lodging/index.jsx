import Lodgings from '../../data/lodging.json' // faire un fetch
import Rating from "../../components/Rating"
import Gallery from '../../components/Gallery'
import Tag from '../../components/Tag'
import Dropdown from '../../components/Dropdown'
import { useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import './lodging.scss'

function Lodging() {
    const {id} = useParams()
    const navigate = useNavigate()
    const currentLodging = Lodgings.find((lodging) => lodging.id === id)
    useEffect(()=>{if( !currentLodging ){
       navigate('/error')
    }},[])
    if (!currentLodging){
        return <></>
    }
    return (
        <>
            <main className='lodging'>
                <div className='gallery'>
                    <Gallery datas={currentLodging.pictures} />
                </div>
                <p className='title'>{currentLodging.title}</p>
                <p className='location'>{currentLodging.location}</p>
                <p className='host'>{currentLodging.host.name}<img src={currentLodging.host.picture} alt='' /></p>
                <div className='tags'>
                    <Tag datas={currentLodging.tags} />
                </div>
                <Rating ratings={currentLodging.rating} />
                <Dropdown title={'description'} datas={currentLodging} />
                <Dropdown title={'equipements'} datas={currentLodging.equipments} />
            </main>
        </>
    )
}

export default Lodging
