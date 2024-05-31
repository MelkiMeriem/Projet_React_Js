import "./Form.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {useContext, useState} from "react";
import {UserContext} from "../utils/contexts/UserContext.jsx";

function LoginForm(){


    return(

        <>
            < form className={"R_Form"}>
                <legend>Login</legend>



                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                    <Form.Control
                        type={"email"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"

                    />
                </InputGroup>

                <InputGroup size="sm" className="mb-3" >
                    <InputGroup.Text id="inputGroup-sizing-sm" >Mot de passe </InputGroup.Text>
                    <Form.Control
                        type={"password"}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
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