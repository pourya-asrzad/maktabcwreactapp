import Login from "./login";
import Headertxt from "./headertxt";
import "./style.css";
import Middletxt from "./middletxt";
import Cards from "./cards";
import Footer from "./footer";
function Blogfa() {
  return (
    <>
      <div className="header">
        <Login
          btntxt="ورود به بخش مدیریت وبلاگ"
          palceholder1="نام کاربری"
          palceholder2="رمز عبور"
          atxt="کلمه عبور خود را فراموش کردم"
        />
        <Headertxt
          btntxt=""
          para="لاگفا یک ابزار قدرتمند برای ساخت و مدیریت وبلاگ است . بلاگفا به شما کمک میکند تا با سرعت و سهولت اطلاعات ، خاطرات و مطالب و مقالات خود را در اینترنت منتشر کنید"
        />
      </div>
      <Middletxt />
      <Cards />
      <Footer />
    </>
  );
}
export default Blogfa;
