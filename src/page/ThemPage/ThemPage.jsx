
import { useParams } from "react-router";
import style from "../../page/ThemPage/ThemPage.css"
import { useEffect, useState } from "react";
import axios from "axios";

function ThemPage(){
    const params=useParams();
    const [themPage,setthemPage]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:7000/DemoForWebsit/${params.id}`).then((result)=>{
            setthemPage(result.data)
        })
    },[])
    return(
        <div>
           <div className="container">
            <img className="d" src={themPage.image} alt="" />
           </div>
        </div>
    )
}
export default ThemPage;