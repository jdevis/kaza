import './tag.scss'

const Tag = ({ datas }) => {
    return (
        <div className='tags'>
            {datas.map((tag, index) => (
                <span key={index}>{tag}</span>
            ))}
        </div>
    )
}
export default Tag