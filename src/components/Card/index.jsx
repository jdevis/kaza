import { Link } from 'react-router-dom'
import './card.scss'

const Card = ({imgSrc, title, id}) => {
    return (
        <article className='card' key={id}>
            <Link key={`lodging-${id}`} to={`/lodging/${id}`}>
                <img src={imgSrc} alt={title}/>
                <p>{title}</p>
            </Link>
        </article>
    )
}

export default Card