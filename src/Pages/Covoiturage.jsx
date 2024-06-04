import {NavBar2} from "../Components/NavBar2.jsx";
import {CovoiturageDetails} from "../Components/CovoiturageDetails.jsx";
import Proposer_Covoiturage from "./Proposer_Covoiturage.jsx";

function Covoiturage(){
return(
    <>
        <div className={"NAVB"}>

        <NavBar2/>
        </div>
        <nav className={"hp"}>
            <img src={"./src/assets/car-toy.gif"} className={"bg"}/> <br/>
            <div className={"choix"}>

            <div className={"btnapp"}>
                <a href={"#section2"} className={"btnbg"}> Proposer Votre Propre Covoiturage</a>

            </div>
            <div className={"btnapp"} id={"2nd"}>
                <a href={"#section1"} className={"btnbg nd "}> Chercher Un Covoiturage</a>
            </div>
            </div>

        </nav>
        <div id={"section1"}>
            <CovoiturageDetails />
        </div>
        <div id={"section2"}>
            <Proposer_Covoiturage />

        </div>
    </>
)
}

export default Covoiturage;