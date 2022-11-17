import './style.css'
function FooterNav(props){
    return(
        <div id={props.key} className="nav">
            <a style={{color:props.color}} href="#"> {props.title}  </a>
            <div className="heihr"></div>
        </div>
    )
}
export default FooterNav