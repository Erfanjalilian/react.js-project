
import style from "../../page/AboutUs/AboutUs.css"
import Header from "../../component/Header/Header"
import SectionAboutUs from "../../component/SectionAboutUs/SectionAboutUs"
import BetweenHeaderAndFooter from "../../component/BetweenHeaderAndFooter/BetweenHeaderAndFooter"
import Footer from "../../component/Footer/Footer"
import { useEffect, useState } from "react"
import axios from "axios"

function AboutUs(){

    const[sectionAboutUs,setsectionAboutUs]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:7000/secAboutUs").then((result)=>{
            setsectionAboutUs(result.data.data)
        })
    },[])

    const[betweenHeaderAndFooter,setbetweenHeaderAndFooter]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:7000/BetweenHeaderAndFooter").then((result)=>{
            setbetweenHeaderAndFooter(result.data.data)
        })
    },[])
    return(
        <div>
            <Header />

            <div className="underHeaderAbout">

            {
                sectionAboutUs.map((data)=>(

                    <SectionAboutUs data={data} />

                ))
            }

            <div className="myLine"></div>

            <br /><br />

            <div className="container">
                {
                    betweenHeaderAndFooter.map((data)=>(
                        <BetweenHeaderAndFooter data={data} />
                    ))
                }
            </div>

</div>

<br /><br /><br />

<Footer />
        </div>
    )
}
export default AboutUs;