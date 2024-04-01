
import Header from "../../component/Header/Header"
import Error from "../../component/Error/Error"
import Footer from "../../component/Footer/Footer"
import style from "../../page/Pages/Pages.css"
import { useEffect, useState } from "react"
import axios from "axios"

function Pages(){
    const[error,seterror]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:7000/ErrorPage").then((result)=>{
            seterror(result.data.data)
        })
    },[])
    return(
        <div>
            <Header />

            <div className="vasat">
                {
                    error.map((data)=>(

                        <Error data={data} />

                    ))
                }
            </div>
            <br /><br /><br />
            <Footer />
        </div>
    )
}
export default Pages;