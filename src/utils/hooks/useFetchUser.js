import {useEffect, useState} from "react";

function UseFetchUser(email){
    const [userData,setUserData]=useState({});
    const [loading,setLoading]=useState(false);
    const[error,setError]=useState();


    const userApiUrl = "http://localhost:3000/users";
    useEffect(() => {
        const controller=new AbortController();
        setLoading(true);
        fetch(`${userApiUrl}/${email}`,{signal:controller.signal}).then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setUserData(data);
            })
            .catch((err)=>{
                console.log(err);
                setError(err);
            }).finally(  setLoading(false));
        return (()=>{
            controller.abort();
        })

    },[email]); // if the userid has changed , the callback function will run again
    return{user : userData,loading,error};
}
export default UseFetchUser;