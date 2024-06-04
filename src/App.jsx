import {NavBar} from "./Components/NavBar.jsx";
import './globals.css';

import {CovoiturageDetails} from "./Components/CovoiturageDetails.jsx";
import {useState} from "react";
import AboutSection from "./Components/AboutSection.jsx";
import {Link, useNavigate} from "react-router-dom";
function App() {


  return (
      <>
          <NavBar/>
          <div className={"body"}>
        <nav className={"hp"}>
            <img src={"./src/assets/car-toy.gif"} className={"bg"}/> <br/>

            <div className={"btnapp"}>
            <a href={"#section"} className={"btnbg"}> Lancer la Recherche</a>
            </div>
        </nav>
              <hr/>
         <div className={"ds"}>

           <footer>
            <AboutSection/>
           </footer>
        </div>
          </div>
      </>
  )
}

export default App;