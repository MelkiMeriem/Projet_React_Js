import {NavBar} from "./Components/NavBar.jsx";
import './globals.css';

import {CovoiturageDetails} from "./Components/CovoiturageDetails.jsx";
import {useState} from "react";
import AboutSection from "./Components/AboutSection.jsx";
function App() {
    const [Users,setUsers]=useState(
        [
            {UserId:1,
             UserEmail:"melkimariem150@gmail.com",
             UserName:"Melki Mariem",
            }
        ]
    );
    const [counter,setCounter]=useState(1);
    const [Covoiturages,setCovoiturage]=useState(
        [{
            id :  0,
            Depart : 'Raoued',
            Arrive : 'CUN',
            Date : '2024-06-3',
            Aller : "8h",
            Retour : "17h15",
            User:Users[0],
        },
            {
                id :  1,
                Depart : 'Raoued',
                Arrive : 'CUN',
                Date : '2024-06-3',
                Aller : "8h",
                Retour : "17h15",
                User:Users[0],
            }

        ]
    )

  return (
      <>
          <NavBar/>
          <div className={"body"}>
        <nav className={"hp"}>
            <img src={"./src/assets/car-toy.gif"} className={"bg"}/> <br/>

            <button className={"btnbg" }>Lancer la Recherche</button>

        </nav>
              <hr/>
        <div className={"ds"}>
        <section className={"section"}>
            {Covoiturages.map((Covoiturage)=>(<CovoiturageDetails key={Covoiturage.id }  Covoiturage={Covoiturage}/>))}
        </section>
           <footer>
            <AboutSection/>
           </footer>
        </div>
          </div>
      </>
  )
}

export default App;