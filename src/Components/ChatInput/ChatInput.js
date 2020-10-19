import React, {useState} from "react";
import './ChatInput.css';
import axios from "../../axios";
import {useStateValue} from "../../StateProvider";

function ChatInput() {
    const [chatInput,setChatInput] = useState('');
    const [{user}] = useStateValue()

    const submitChat = (event)=>{
        event.preventDefault();

        setChatInput('')

        axios.post('/update/messages',{
            message: chatInput,
            user: user.displayName,
            timestamp: new Date().toLocaleString('en-us',{timeZone: 'America/New_York'}),
            uid: 'MadKit'
        })
    }

    return (
        <form onSubmit={submitChat} className="chat-input">
            <input autoFocus type="text" placeholder={'Message to @somebody'} value={chatInput} onChange={e=>setChatInput(e.target.value)}/>
        </form>
    )
}

export default ChatInput;