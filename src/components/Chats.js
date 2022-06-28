import React from 'react';
import {auth} from '../firebase';
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';
//styles
import styles from "./Chats.module.css"

const Chats = () => {
    const history=useHistory();
    const logoutHandler =async()=>{
        await auth.signOut();
        history.push("/")
    }
    return (
        <div className={styles.container}>
           <Navbar logoutHandler={logoutHandler}/> 
        </div>
    );
};

export default Chats;