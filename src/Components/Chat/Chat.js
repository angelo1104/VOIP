import React, {useEffect} from "react";
import './Chat.css'
import ChatInput from "../ChatInput/ChatInput";
import {useHistory} from "react-router-dom";
import {useStateValue} from "../../StateProvider";
import speak from "../../speak";

function Chat() {
    const history = useHistory();
    const [{user,message}] = useStateValue();

    useEffect(()=>{
        if (!user) history.replace('/')
    },[user,history])

    useEffect(()=>{
        if (message.message) speak(`${message?.user} said ${message.message}`)
    },[message])


    return (
        <div className="chat">
            <ChatInput />
        </div>
    )
}

export default Chat;