import './host.scss'

const Host = ({ name, picture }) => {
    return (
        <div className='host'>
            <p>{name}</p>
            <img src={picture} alt={`photo de ${name}`} />
        </div>
    )
}
export default Host