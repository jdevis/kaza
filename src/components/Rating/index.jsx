import './rating.scss'

function Rating({ratings}){
    let classIcone = ''
    const iconesArray =[]
    for(let i=0;i<5;i++){
        if(i < ratings){
            classIcone='active'
        }else{
            classIcone=''
        }
        iconesArray.push(<i className={`fa-solid fa-star ${classIcone}`} key={i}></i>)
    }
    return iconesArray
}
export default Rating