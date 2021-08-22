import { Fragment } from "react";

//Fragment giống thẻ div mà không hiển thị chỉ dùng để bao bọc trang
import { Route } from "react-router-dom"
import Header from "../components/HomePage/Header"





export const HomeTemplate = (props) => {
//props (path,component)



    return <Route exact path={props.path} render={(propsRoute)=>{

           return <Fragment>
               <Header />
               <props.component {...propsRoute} />
           </Fragment>
        }} />
 
}