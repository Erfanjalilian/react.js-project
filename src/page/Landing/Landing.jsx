
import { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import SecLandingPage from "../../component/SecLandingPage/SecLandingPage"
import SeeMore from "../../component/SeeMore/SeeMore"
import Questions from "../../component/Questions/Questions"
import ReadyToBook from "../../component/ReadyToBook/ReadyToBook"
import OnfooterLanding from "../../component/OnfooterLanding/OnfooterLanding"
import Footer from "../../component/Footer/Footer"
import style from "../../page/Landing/Landing.css"

import axios from "axios";

function Landing(){

    const [SEcLandingPage,setSEcLandingPage]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:7000/SecLandingPage").then((result)=>{
            setSEcLandingPage(result.data.data)
        })
    },[])


    const [seemore,setseemor]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:7000/seeMore").then((result)=>{
            setseemor(result.data.data)
        })
    },[])


    const[questions,setquestions]=useState([])

    useEffect(()=>{

        axios.get("http://localhost:7000/questions").then((result)=>{
            setquestions(result.data.data)
        })

    },[])


    const[readyToBook,setreadyToBook]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:7000/readyToBook").then((result)=>{
            setreadyToBook(result.data.data)
        })
    },[])

    const[onfooterLanding,setonfooterLanding]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:7000/matneAbiUnderFooter").then((result)=>{
            setonfooterLanding(result.data.data)
        })
    },[])

    return(
        <div>

            <Header />

            <section className="LandingSec">
                <div className="containerLanding">
                   {
                        SEcLandingPage.map((data)=>(
                            <SecLandingPage data={data} />
                        ))
                    }

                </div>
                <div className="containerForCircleLanding-end"></div>
                
            </section>
            <div className="container">
                <div className="containerForRespansiv">

            <div className="mainLAnding">


            {
                seemore.map((data)=>(

                    <SeeMore data={data} />

                ))
            }
            </div>

            </div>


            </div>

            <br />


            <div className="container">
                {
                    questions.map((data)=>(

                        <Questions data={data} />

                    ))


                }
            </div>

            <br /><br /><br />

            <div className="LandingSec">
                <br /><br /><br /> <br /><br /><br /> <br /><br /><br />
                <div className="container">
                    {
                        readyToBook.map((data)=>(
                            <ReadyToBook data={data} />
                        ))
                    }
                </div>
                <br /><br /><br /><br /> <br /><br /><br /> <br /><br /><br /> <br /><br /><br />
            </div>

            <div className="khatekaj"></div>


            <div className="container">
                <div className="mainLAnding">
                    {
                        onfooterLanding.map((data)=>(
                            <OnfooterLanding data={data} />
                        ))
                    }
                </div>
            </div>

            <br /><br /><br />



            <Footer />
            
        </div>
    )
}
export default Landing;
