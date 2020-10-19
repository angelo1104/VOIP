import React, {useEffect} from "react";
import './Chat.css'
import ChatInput from "../ChatInput/ChatInput";
import {useHistory} from "react-router-dom";
import {useStateValue} from "../../StateProvider";
import speak from "../../speak";
import {Button} from "@material-ui/core";
import {auth} from "../../firebase";

function Chat() {
    const history = useHistory();
    const [{user,message}] = useStateValue();

    useEffect(()=>{
        if (!user) history.replace('/')
    },[user,history])

    useEffect(()=>{
        if (message.message) speak(`${message?.user} said ${message.message}`)
    },[message])


    const signOut = ()=>{
        auth.signOut();
    }

    return (
        <div className="chat">
            <ChatInput />
            <Button onClick={signOut} className={'signout-button submit-button'}>Sign Out</Button>
        </div>
    )
}

export default Chat;