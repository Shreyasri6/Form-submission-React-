import { useEffect, useState } from "react"
// import List from "./List";


function FormQuery(){

    const [email,setEmail] = useState('');
    const [isEmail,setIsEmail]=useState(false);
    const [detail,setDetail] = useState('');
    
    function emailChangeHandler(event){
        setTimeout(()=>{
            setEmail(event.target.value);
        },1000);
    }

    useEffect(()=>{
        getData(email);
    },[email])

    async function getData(email){
        const response = await fetch('https://projects-7a22a-default-rtdb.firebaseio.com/user.json')
        const data = await response.json();
        for(let obj in data){
            if(data[obj].userEmail === email){
                setDetail(data[obj]);
                setIsEmail(true);
                console.log("User Found");
                console.log(detail.userName);
                return;
            }
        }
        setIsEmail(false)
        console.log("No such user");
    }
    return(
        <div className="query-box">
            <input type = "text" onChange = {emailChangeHandler} placeholder="Search User"/>
            {isEmail && <p>{detail.userName + " " + detail.userDept}</p>}
        </div>
    )
}

export default FormQuery;
