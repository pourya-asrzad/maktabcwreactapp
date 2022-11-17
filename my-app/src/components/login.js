import "./style.css";
import Input from "./input";
import BlogButton from "./button";
import Hiperlink from "./hiperlink";
function Login(props) {
  return (
    <div className="login">
      <div className="inputs">
        <Input placeholdertxt={props.palceholder1} />
        <Input placeholdertxt={props.palceholder2} />
      </div>
      <div className="btn-a">
        <BlogButton innertxt={props.btntxt} />
        <Hiperlink innnertxt={props.atxt} />
      </div>
    </div>
  );
}
export default Login;
