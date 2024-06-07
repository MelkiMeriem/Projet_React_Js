import "./Form.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {useContext, useEffect, useState} from "react";
import {isItem} from "json-server/lib/service.js";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../utils/contexts/UserContext.jsx";
import CovoiturageForm from "./CovoiturageForm.jsx";
import Covoiturage from "../Pages/Covoiturage.jsx";

function LoginForm(){


    const userContext=useContext(UserContext);
    const navigate=useNavigate();

    const [Users,setUsers]=useState([{}]);
    useEffect(()=>{
        fetch('http://localhost:3000/users',
            {
                method:"GET",
            }).then((response)=>{return response.json()})
            .then((data)=> {
                setUsers(data);
            });
    })

    const [LoginData,setLoginData]=useState({
        email:"",
        password:"",
    })
    function search(LoginData,Users){
        for(let i = 0; i<Users.length; i++){
            if(Users[i].email==LoginData.email && Users[i].password==LoginData.password){
                return true;
            }


        }
        return false;

    }


    return(

        <>
            <>
            </>
            < form className={"R_Form"}
                   method={"GET"}
                   onSubmit={
                       (e)=> {
                           e.preventDefault();
                           if(search(LoginData,Users)){
                               userContext.email=LoginData.email;
                               <UserContext.Provider value={userContext}>
                                   <CovoiturageForm/>
                                   <Covoiturage/>
                               </UserContext.Provider>

                               navigate('/Covoiturage');





                           }

                       }

                   }
            >
                <legend>Login</legend>



                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                    <Form.Control
                        required isInvalid
                        type={"email"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={LoginData.email}
                        onChange={(e)=>{
                            setLoginData( (currentState)=>({...currentState,email:e.target.value}))
                        }}

                    />
                </InputGroup>

                <InputGroup size="sm" className="mb-3" hasValidation >
                    <InputGroup.Text id="inputGroup-sizing-sm" >Mot de passe </InputGroup.Text>
                    <Form.Control
                        required isInvalid
                        type={"password"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={LoginData.password}
                        onChange={(e)=>{
                            setLoginData(  (currentState)=>({...currentState,password:e.target.value}))
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

export default LoginForm;