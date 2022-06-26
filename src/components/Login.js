import React from 'react';

//icons
import google from "../assest/icons8-google.svg"
const Login = () => {
    return (
        <div>
            <div>
                <h1>Wellcom to Tabgram!</h1>
                <div>
                    <img src={google} alt='google'/> Sign in whit Google.
                </div>
            </div>
        </div>
    );
};

export default Login;