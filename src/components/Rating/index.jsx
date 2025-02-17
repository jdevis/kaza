import './rating.scss'

const Rating = ({ ratings }) => {
    let classIcone = ''
    const iconesArray = []
    for (let i = 0; i < 5; i++) {
        if (i < ratings) {
            classIcone = 'active'
        } else {
            classIcone = ''
        }
        iconesArray.push(<i className={`fa-solid fa-star ${classIcone}`} key={i}></i>)
    }
    return (
        <div className='rating'>
            {iconesArray}
        </div>)
}
export default Rating