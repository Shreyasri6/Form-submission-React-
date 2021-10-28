import { useEffect, useState } from "react"
// import List from "./List";

function FormQuery(){

    const [email,setEmail] = useState('');
    const [isEmail,setIsEmail]=useState(false);
    function emailChangeHandler(event){
        setEmail(event.target.value);
    }

    useEffect(()=>{
        getData(email);
    },[email])

    async function getData(email){
        const response = await fetch('https://user-authentication-80e38-default-rtdb.firebaseio.com/user.json')
        const data = await response.json();
        console.log(data);
        for(let obj in data){
            if(data[obj].userEmail === email){
                setIsEmail(true);
                if(isEmail){
                    console.log(data[obj]);
                }
                return;
            }
        }
        console.log("No such user");
    }
    return(
        <div>
            <label>Get Data</label>
            <input type = "text" onChange = {emailChangeHandler}/>
        </div>
    )
}

export default FormQuery