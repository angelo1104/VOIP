import React, {useState} from "react";
import './Home.css';
import {Button} from "@material-ui/core";
import {auth} from "../../firebase";

function Home() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const login = (event)=>{
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then(authUser=>{
                
            })
            .catch(error=>{
                alert(error.message)
            })
    }


    return (
        <div className="home">
            <form className="signup" onSubmit={login}>
                <input autoFocus value={email} onChange={e=>setEmail(e.target.value)} className={'signup-input'} type="email"  placeholder={'email'}/>
                <input autoComplete={'true'} className={'signup-input'} value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder={'password'}/>
                <Button className={'dark submit-button'} type={'submit'}>Submit</Button>
            </form>
        </div>
    )
}

export default Home;