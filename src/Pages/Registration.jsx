import {NavBar} from "../Components/NavBar.jsx";
import RegisterForm from "../Components/RegisterForm.jsx";
import "../Components/Form.css"

function registration(){
    return(
        <>

            <NavBar/>

            <section className={"form"} id={"section"}>

                <RegisterForm className={"f"}/>
            </section>

        </>
    )

}

export default registration;