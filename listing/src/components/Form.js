import { useState } from "react"

function Form(){

    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [dept,setDept] = useState('');

    function emailChangeHandler(event){
        setEmail(event.target.value);
    }
    function nameChangehandler(event){
        setName(event.target.value);
    }
    function deptChangeHandler(event){
        setDept(event.target.value);
    }
    function submitHandler(event){
        const obj = {userName:name,userEmail:email,userDept:dept};
        event.preventDefault();
        postData(obj);
        setEmail('');
        setName('');
        setDept('');
        
    }

    async function postData(obj){
        const response = await fetch('https://projects-7a22a-default-rtdb.firebaseio.com/user.json',{
            method:'POST',
            body:JSON.stringify(obj),
            headers:{
                'Content-type':'application/json'
            }
        })
        const data = await response.json();
        // console.log(data);
    }

    return(
        <form onSubmit = {submitHandler} className="main-form">
            <label>Enter Your Email</label>
            <input type = "text" onChange={emailChangeHandler}/>
            <label>Enter your name</label>
            <input type = "text" onChange={nameChangehandler}/>
            <label>Enter your department</label>
            <input type = "text" onChange={deptChangeHandler}/>
            <button type = "submit">Submit</button>
        </form>
    )
}

export default Form;