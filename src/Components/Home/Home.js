import React from "react";
import './Home.css';
import {Button} from "@material-ui/core";

function Home() {
    return (
        <div className="home">
            <form className="signup">
                <input autoFocus={'true'} className={'signup-input'} type="email"  placeholder={'email'}/>
                <input className={'signup-input'} type="password" placeholder={'password'}/>
                <Button className={'dark submit-button'}>Submit</Button>
            </form>
        </div>
    )
}

export default Home;