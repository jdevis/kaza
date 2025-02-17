import Lodgings from '../../data/lodging.json'
import Rating from "../../components/Rating"
import Gallery from '../../components/Gallery'
import Tag from '../../components/Tag'
import Dropdown from '../../components/Dropdown'
import Host from '../../components/Host'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './lodging.scss'

const Lodging = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const currentLodging = Lodgings.find((lodging) => lodging.id === id)
	useEffect(() => {
		if (!currentLodging) {
			navigate('/error')
		}
	}, [])
	if (!currentLodging) {
		return <></>
	}
	return (
		<>
			<main className='lodging'>
				<div className='gallery'>
					<Gallery datas={currentLodging.pictures} />
				</div>
				<div className='detail'>
					<div className='detail-headers'>
						<h1>{currentLodging.title}</h1>
						<p className='location'>{currentLodging.location}</p>
						<Tag datas={currentLodging.tags} />
					</div>
					<div className='host-rating'>
						<Host name={currentLodging.host.name} picture={currentLodging.host.picture} />
						<Rating ratings={currentLodging.rating} />
					</div>
				</div>
				<div className='lodging-dropdown'>
					<div key='description'>
						<Dropdown title={'description'} datas={currentLodging} />
					</div>
					<div key='equipements'>
						<Dropdown title={'equipements'} datas={currentLodging.equipments} />
					</div>
				</div>
			</main>
		</>
	)
}

export default Lodging