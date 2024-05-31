import "./Form.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function registerForm(){
    const [user,setUser]=useState({
        nom:"",
        prenom:"",
        email:"",
        password:"",
        age:0,
        Region:0,
        statut_social:"",
        gender:"",
    });

    const regions = [
        { id: 0, name: 'Région' },
        { id: 1, name: 'Ariana' },
        { id: 2, name: 'Béja' },
        { id: 3, name: 'Ben Arous' },
        { id: 4, name: 'Bizerte' },
        { id: 5, name: 'Gabès' },
        { id: 6, name: 'Gafsa' },
        { id: 7, name: 'Jendouba' },
        { id: 8, name: 'Kairouan' },
        { id: 9, name: 'Kasserine' },
        { id: 10, name: 'Kébili' },
        { id: 11, name: 'Le Kef' },
        { id: 12, name: 'Mahdia' },
        { id: 13, name: 'La Manouba' },
        { id: 14, name: 'Médenine' },
        { id: 15, name: 'Monastir' },
        { id: 16, name: 'Nabeul' },
        { id: 17, name: 'Sfax' },
        { id: 18, name: 'Sidi Bouzid' },
        { id: 19, name: 'Siliana' },
        { id: 20, name: 'Sousse' },
        { id: 21, name: 'Tataouine' },
        { id: 22, name: 'Tozeur' },
        { id: 23, name: 'Tunis' },
        { id: 24, name: 'Zaghouan' }
    ];
    const navigate=useNavigate();
    const SelectRegion = () => {
        return (


            <Form.Select size="sm"
                         onChange={(e)=>{
                             setUser((currentState)=>({...currentState,Region:e.target.value}));
                         }}
            >
                {regions.map(region => (
                    <option key={region.name} value={region.name} id={`region-${region.id}`} name={region.name}

                    >
                        {region.name}
                    </option>
                ))}
            </Form.Select>
        );
    };
return(

        <>
            < form className={"R_Form"} method={"POST"}
                   onSubmit={
                       (e)=>{
                           e.preventDefault();

                               fetch("http://localhost:3000/users",{
                                   method:'POST',
                                   body:JSON.stringify(user),
                                   headers:{  'Content-type': 'application/json; charset=UTF-8',}
                               }).then((response)=>response.json())
                                   .then((json)=>console.log(json));
                               navigate("/")


                       }
                   }
            >
                <legend>Register</legend>

                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Nom</InputGroup.Text>
                    <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={user.nom}
                        onChange={(e)=>{
                            setUser((currentState)=>({...currentState,nom:e.target.value}));
                        }}

                    />

                </InputGroup>

                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Prénom</InputGroup.Text>
                    <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={user.prenom}
                        onChange={(e)=>{
                            setUser((currentState)=>({...currentState,prenom:e.target.value}));
                        }}

                    />
                </InputGroup>

                <Form.Check

                    type="radio"
                    label={"Femme"}
                    name={'rad'}
                    value={'f'}
                    id={`disabled-default-radio`}
                    onClick={(e)=>{
                        setUser((currentState)=>({...currentState,gender:e.target.value}));
                    }}
                />
                <Form.Check

                    type="radio"
                    name={"rad"}
                    label={"Homme"}
                    value={'h'}
                    id={`disabled-default-radio`}
                    onChange={(e)=>{
                        setUser((currentState)=>({...currentState,gender:e.target.value}));
                    }}
                />

                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                    <Form.Control
                        type={"email"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={user.email}
                        onChange={(e)=>{
                            setUser((currentState)=>({...currentState,email:e.target.value}));
                        }}
                    />
                </InputGroup>

                <InputGroup size="sm" className="mb-3" >
                    <InputGroup.Text id="inputGroup-sizing-sm" >Mot de passe </InputGroup.Text>
                    <Form.Control
                        type={"password"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={user.password}
                        onChange={(e)=>{
                            setUser((currentState)=>({...currentState,password:e.target.value}));
                        }}
                    />
                </InputGroup>


                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Age</InputGroup.Text>
                    <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={user.age}
                        onChange={(e)=>{
                            setUser((currentState)=>({...currentState,age:e.target.value}));
                        }}
                    />
                </InputGroup>
                <label>Région : </label> <br/>
                {SelectRegion()}

                <br/>

                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Statut social</InputGroup.Text>
                    <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={user.statut_social}
                        onChange={(e)=>{
                            setUser((currentState)=>({...currentState,statut_social:e.target.value}));
                        }}
                    />
                </InputGroup>
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

export default registerForm;