import Footer from "../componet/Footer";
import Header from "../componet/Header";
import {Outlet} from 'react-router-dom'

export default function Master(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}