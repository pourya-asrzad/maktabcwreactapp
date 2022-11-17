import Card from "./card"
import './style.css'
import data from "../data/data"
function Cards(){
return(
    <div className="cards">
        {data.map((element)=>{

     return(   <Card key={element.id}  title={element.title}
        link={element.link}
        description={element.description}/>)
        })}
    </div>
)
}
export default Cards