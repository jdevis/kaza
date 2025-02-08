import './tag.scss'

function Tag({datas}){
    return (datas.map((tag,index)=>(
        <span key={index}>{tag}</span>
    )))
}
export default Tag