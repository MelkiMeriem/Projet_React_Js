import "./Form.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {useContext, useState} from "react";
import {UserContext} from "../utils/contexts/UserContext.jsx";
import loginPage from "../Pages/LoginPage.jsx";

function LoginForm(){
    const [LoginData,setLoginData]=useState({
        email:"",
        password:"",
    })


    return(

        <>
            < form className={"R_Form"}
                   onClick={
                       (e)=>{
                           e.preventDefault();
                           console.log(LoginData);

                       }
                   }
            >
                <legend>Login</legend>



                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                    <Form.Control
                        type={"email"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        value={LoginData.email}
                        onChange={(e)=>{
                           setLoginData( (currentState)=>({...currentState,email:e.target.value}))
                        }}

                    />
                </InputGroup>

                <InputGroup size="sm" className="mb-3" >
                    <InputGroup.Text id="inputGroup-sizing-sm" >Mot de passe </InputGroup.Text>
                    <Form.Control
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