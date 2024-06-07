import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import {useContext, useState} from "react";
import Button from "react-bootstrap/Button";
import {UserContext} from "../utils/contexts/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import {CovoiturageContext} from "../utils/contexts/CovoiturageContext.jsx";
import {CovoiturageDetails} from "./CovoiturageDetails.jsx";

function CovoiturageForm(){
    const [quotidien,setQuotidien]=useState(false);
    const[retour,setRetour]=useState(false);
    const [formField,setFormfield]=useState({
        départ:"",
        arrivé:"",
        AllerEtRetour:true,
        heureDepart:"",
        heureRetour:"",
        NbrePlace:0,
        prix:0,
        quotidien:true,
        JourDéb:"",
        JourFin:"",
        DateDébut:"",
        OwnerEmail:"",
        OwnerName:"",
    });
    const userContext=useContext(UserContext);
    const covoiturageContext=useContext(CovoiturageContext);
    formField.OwnerEmail=userContext.email;
    formField.OwnerName=userContext.nom+" "+userContext.prenom;
    const navigate=useNavigate();

    <CovoiturageContext.Provider value={formField}>
        <CovoiturageDetails/>
    </CovoiturageContext.Provider>
    return(
        <>
            <form className= {"R_Form"} method={"POST"}
                  onSubmit={
                      (e)=>{
                          e.preventDefault();
                          fetch("http://localhost:3000/Covoiturages",
                              {
                                  method:"POST",
                                  body:JSON.stringify(formField),
                                  headers:{ 'Content-type': 'application/json; charset=UTF-8',}
                              }).then((response)=>{
                              response.json()
                          });



                      }
                  }

            >
                <legend>Covoiturage</legend>


                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">De</InputGroup.Text>
                    <Form.Control
                        required isInvalid
                        type={"text"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={formField.départ}
                        onChange={(e)=>{
                            setFormfield((currentState)=>(
                                {...currentState,départ: e.target.value}
                            ))
                        }}
                    />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">à</InputGroup.Text>
                    <Form.Control
                        required isInvalid
                        type={"text"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={formField.arrivé}
                        onChange={(e)=>{
                            setFormfield((currentState)=>(
                                {...currentState,arrivé: e.target.value}
                            ))
                        }}
                    />


                </InputGroup>
                <Form.Check

                    type="radio"
                    label={"Aller et retour"}
                    name={'rad'}
                    value={true}
                    onClick={(e) => {
                        setRetour(true);
                        setFormfield((currentState)=>(
                            {...currentState,AllerEtRetour: e.target.value}
                        ))

                    }}

                />
                <Form.Check

                    type="radio"
                    label={"Aller seulement"}
                    name={'rad'}
                    value={false}
                    onClick={(e) => {
                        setRetour(false);
                        setFormfield((currentState)=>(
                            {...currentState,AllerEtRetour: e.target.value}
                        ))

                    }}
                />

                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Heure de départ</InputGroup.Text>
                    <Form.Control
                        required isInvalid
                        type={"time"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={formField.heureDepart}
                        onChange={(e)=>{
                            setFormfield((currentState)=>(
                                {...currentState,heureDepart: e.target.value}
                            ))
                        }}
                    />

                </InputGroup>
                {retour &&
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Heure de retour</InputGroup.Text>
                        <Form.Control
                            required isInvalid
                            type={"time"}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            value={formField.heureRetour}
                            onChange={(e)=>{
                                setFormfield((currentState)=>(
                                    {...currentState,heureRetour: e.target.value}
                                ))
                            }}
                        />
                    </InputGroup>}
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Nombre des places disponibles</InputGroup.Text>
                    <Form.Control
                        required isInvalid
                        type={"number"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={formField.NbrePlace}
                        onChange={(e)=>{
                            setFormfield((currentState)=>(
                                {...currentState,NbrePlace: e.target.value}
                            ))
                        }}
                    />
                </InputGroup>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Prix</InputGroup.Text>
                    <Form.Control
                        required isInvalid
                        type={"number"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={formField.prix}
                        onChange={(e)=>{
                            setFormfield((currentState)=>(
                                {...currentState,prix: e.target.value}
                            ))
                        }}
                    />
                </InputGroup>
                <Form.Check

                    type="radio"
                    label={"quotidien"}
                    name={'rad'}
                    value={true}
                    onClick={(e) => {
                        setQuotidien(true);
                        setFormfield((currentState)=>(
                            {...currentState,quotidien: e.target.value}
                        ))
                    }}

                />
                <Form.Check

                    type="radio"
                    label={"Non quotidien"}
                    name={'rad'}
                    value={false}
                    onClick={(e) => {
                        setQuotidien(false);
                        setFormfield((currentState)=>(
                            {...currentState,quotidien: e.target.value}
                        ))}}
                />
                {quotidien && <>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">De</InputGroup.Text>
                        <Form.Control
                            required isInvalid
                            type={"text"}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            value={formField.JourDéb}
                            onChange={(e)=>{
                                setFormfield((currentState)=>(
                                    {...currentState,JourDéb: e.target.value}
                                ))
                            }}
                        />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">à</InputGroup.Text>
                        <Form.Control
                            required isInvalid
                            type={"text"}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            value={formField.JourFin}
                            onChange={(e)=>{
                                setFormfield((currentState)=>(
                                    {...currentState,JourFin: e.target.value}
                                ))
                            }}
                        />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">à partir de</InputGroup.Text>
                        <Form.Control
                            required isInvalid
                            type={"date"}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            value={formField.DateDébut}
                            onChange={(e)=>{
                                setFormfield((currentState)=>(
                                    {...currentState,DateDébut: e.target.value}
                                ))
                            }}
                        />
                    </InputGroup>

                </>


                }
                {!quotidien &&
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Jour</InputGroup.Text>
                        <Form.Control
                            required isInvalid
                            type={"Date"}
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"

                        />
                    </InputGroup>

                }
                <div className="d-grid gap-2">
                    <Button type={"submit"} variant="primary" size="lg" className={"btn_cnfrm"}>
                        Confirmer
                    </Button>
                    <Button type={"reset"} variant="secondary" size="lg" className={"annuler"}>
                        Annuler
                    </Button>
                </div>
            </form>
        </>
    )
}

export default CovoiturageForm;