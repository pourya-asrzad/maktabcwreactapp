import FooterNav from "./footernav"
import './style.css'
import navdata from "../data/navdata"
function Footer(){
    return(
        <div className="footernavbar">
           {navdata.map((element)=>{
            return(<FooterNav
            key={element.id}
             title={element.text}
            color={element.color}/>)
           })}
      
        </div>
    )
}
export default Footer