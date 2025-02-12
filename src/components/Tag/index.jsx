import './tag.scss'

function Tag({datas}){
    return (
        <div className='tags'>
            {datas.map((tag,index)=>(
                <span key={index}>{tag}</span>
            ))}
        </div>
    )
}
export default Tag