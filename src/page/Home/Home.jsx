import Header from "../../component/Header/Header"
import style from "../../page/Home/Home.css"
import LandingPage from "../../component/LadingPage/LadingPage"
import DemoForWebsit from "../../component/DemoForWebsit/DemoForWebsit"
import InnerPages from "../../component/InnerPages/InnerPages"
import HeaderExample from "../../component/HeaderExample/HeaderExample"
import DemoHeader from "../../component/DemoHeader/DemoHeader"
import Documentation from "../../component/Documentation/Documentation"
import Onfooter from "../../component/Onfooter/Onfooter"
import BtnNumberDocumentation from "../../component/BtnNumberDocumentation/BtnNumberDocumentation"
import Footer from "../../component/Footer/Footer"
import {useEffect,useState} from "react";
import Axios from "axios";
import ParagrafUnderHeader from "../../component/patagrafunderheader/ParagrafUnderHeader"
import axios from "axios";
import { useAccordionButton } from "react-bootstrap"
import { Link } from "react-router-dom"



function Home(){

    const [underHeader,setunderHeader]=useState([])

    useEffect(()=>{
        Axios.get("http://localhost:7000/underHeader").then((result)=>{
            
        setunderHeader(result.data.data)
           
        });
    },[]);


    const [Meno,setMeno]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:7000/LandingPage").then((result)=>{

        setMeno(result.data.data)



        });
    },[]);



    const [Demosit,setDemosit]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:7000/DemoForWebsit").then((result)=>{

        setDemosit(result.data)


        });
    },[]);


    const [InnerPagess,setInnerPagess] =useState([])

    useEffect(()=>{
        axios.get("http://localhost:7000/InnerPages").then((result)=>{
            setInnerPagess(result.data.data)
        })
    },[])


   const [headerExample,setheaderExample]=useState([]);

   useEffect(()=>{
    axios.get("http://localhost:7000/HeaderExample").then((result)=>{
        setheaderExample(result.data.data)
    })
   },[])


   const [demoHeader,setdemoHeader]=useState([]);
   useEffect(()=>{
    axios.get("http://localhost:7000/DemoHeader").then((result)=>{
        setdemoHeader(result.data.data)
    })
   },[])




   const [documentation,setdocumentation]=useState([])

   useEffect(()=>{
    axios.get("http://localhost:7000/Documentation").then((result)=>{
        setdocumentation(result.data.data)
    })
   },[])



   const [onfooter,setonfooter]=useState([])

   useEffect(()=>{
    axios.get("http://localhost:7000/NumberDocumentation").then((result)=>{
        setonfooter(result.data.data)
    })
   },[])



   const [btnnumber,setbtnnumber]=useState([])


   useEffect(()=>{
    axios.get("http://localhost:7000/btnNumberDocumentation").then((result)=>{

    setbtnnumber(result.data.data)
   

    })
   },[])



   






    return(
        <div>
            <Header />

            <section>
                <div className="container">

                   


                                {
                                    underHeader.map((data)=>(
                                        <ParagrafUnderHeader data={data} />
                                    ))
                                   
                                }

                                

                                

                </div>
                <div className="demo">
                    <div className="containerForCircle"></div>
                    <div className="container">

                        {
                            Meno.map((data)=>(

                                <LandingPage data={data} />

                            ))
                        }

                        <br /><br />

                        <div className="row">
                            <div className="col">
                                {
                                    Demosit.map((data)=>(
                                        <Link to={`/ThemPage/${data.id}`}>
                                        <DemoForWebsit key={data.id} data={data} />
                                        </Link>
                                    ))
                                }
                            
                            </div>
                        </div>




                        




                        

                    </div>
                    <div className="containerForCircle-end"></div>

                   
                </div>


                <br /><br /><br /><br /><br /><br />

                        {
                            Meno.map((data)=>(

                                <LandingPage data={data} />

                            ))
                        }

                        <br /><br /><br />

                        <div className="container">
                            
                           
                            <div className="MAIN">

                               
                                    
                            
                            {
                                
                                InnerPagess.map((data)=>(
                                    

                                    <InnerPages data={data} />

                                ))
                            }
                            
                            </div>
                           
                            
                            
                            
                            
                        </div>

                        

                 
                <div className="demo">

                     <div className="containerForCircle"></div>    

                <div className="container">

               


                        {
                            headerExample.map((data)=>(

                                <HeaderExample data={data} />

                            ))

                            
                        }


<br /><br />

<div className="row">
    <div className="col">
        {
            demoHeader.map((data)=>(

                <DemoHeader data={data} />

            ))
        }
    
    </div>
</div>

                
                    
                </div>
                <div className="containerForCircle-end"></div>

                </div>


                <br /><br /><br /> <br /><br /><br />


                
                       {
                            documentation.map((data)=>(

                                <Documentation data={data} />

                            ))
                        }


                        <br /><br />
                        <div className="container">

                        <div className="main">

                        {
                            onfooter.map((data)=>(

                                <Onfooter data={data} />

                            ))
                            
                        }
                        </div>
                        {
                            btnnumber.map((data)=>(
                                <BtnNumberDocumentation data={data} />
                            ))
                        }
                        </div>
                        <br /><br /><br /><br />

                        

                        
                        <Footer />




               

            </section>
        </div>
    )
}
export default Home;