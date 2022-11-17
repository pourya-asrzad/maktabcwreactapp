import BlogText from "./Blogtext";
import BlogButton from "./button";
import './style.css'
function Headertxt(){
return(
    <div className="headertxt">
        <BlogText text='لاگفا یک ابزار قدرتمند برای ساخت و مدیریت وبلاگ است . بلاگفا به شما کمک میکند تا با سرعت و سهولت اطلاعات ، خاطرات و مطالب و مقالات خود را در اینترنت منتشر کنید'/>
        <BlogButton innertxt='ثبت نام و ایجاد وبلاگ جدید'/>
    </div>
)
}
export default Headertxt;