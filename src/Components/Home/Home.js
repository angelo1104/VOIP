import React, {useEffect, useState} from "react";
import './Home.css';
import {Button} from "@material-ui/core";
import {auth} from "../../firebase";
import {useStateValue} from "../../StateProvider";
import {useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [{user}] = useStateValue();

    const login = (event)=>{
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then(authUser=>{

            })
            .catch(error=>{
                alert(error.message)
            })

    }

    useEffect(()=>{
        if (user) history.replace('/app')
    },[user,history])


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