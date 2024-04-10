import Footer from "./footer";
import Header from "./head";
import Main from "./main";
import "./index.scss";
import "./base.css";

function LayoutDefault(){
    return(
        <>
           <Header/>
           <Main/>
           <Footer/>
        </>
    )
}

export default LayoutDefault;