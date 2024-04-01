
import style from "../Header/Header.css"
import {useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";




function Header(){


  




    return(
        <div>

          <header>


          <div className="container">





<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand p-3 headerLogo" href="#">SB UI Kit Pro

</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse right" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item p-3">
          <a class="nav-link active fontForHeader" aria-current="page" href="#">
            <Link to={"/"}>home</Link>
          </a>
        </li>
        <li class="nav-item p-3">
          <a class="nav-link fontForHeader" href="#" role="button" aria-expanded="false">
            <Link to={"/Landing"}>Landings</Link>
         
          </a>
         
        </li>
        <li class="nav-item dropdown p-3 active">
          <a class="nav-link fontForHeader" href="#" role="button" aria-expanded="false">
            <Link to={"/Pages"}>Pages</Link>
          
          </a>
          
        </li>
        <li class="nav-item dropdown p-3 active">
          <a class="nav-link fontForHeader" href="#" role="button" aria-expanded="false">
            <Link to={"/AboutUs"}>AboutUs</Link>
           
          </a>
         
        </li>
        <li class="nav-item m-3">
          <button className="btn btn-primary">Buy Now
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
          </button>
        </li>
      </ul>
      
    </div>
  </div>
</nav>



</div>

</header>

          
        </div>
    )
}


export default Header;