import Hiperlink from "./hiperlink"
import BlogText from './Blogtext'
function Card(props){
return(
    <div id={props.id} className="card">
        <span style={{color:"rgb(68, 68, 255)"}}> {props.title} </span>
        <Hiperlink innnertxt={props.link}/>
        <BlogText text={props.description}/>
    </div>
)
}
export default Card