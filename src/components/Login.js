import React from 'react';
import firebase from 'firebase/app';
import {auth} from "../firebase"

//styles
import styles from "./Login.module.css"

//icons
import google from "../assest/icons8-google.svg";


const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h1>Wellcom to Tabgram!</h1>
                <div className={styles.button}
                onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <img src={google} alt='google'/> Sign in whit Google.
                </div>
            </div>
        </div>
    );
};

export default Login;