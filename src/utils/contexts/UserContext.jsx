import {createContext} from "react";

export const UserContext=createContext({
    id:0,
    nom:"",
    prenom:"",
    email:"",
    password:"",
    age:0,
    Region:0,
    statut_social:"",

})