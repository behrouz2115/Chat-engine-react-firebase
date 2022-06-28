import React,{useState,useEffect,useContext} from 'react';
import {auth} from '../firebase';
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';
import {AuthContext} from '../context/AuthContextProvider';
//styles
import styles from "./Chats.module.css"

const Chats = () => {

    const [loading,setLoading]=useState(true);

    const user=useContext(AuthContext);

    const history=useHistory();

    useEffect(()=>{
        if(!user){
            history.push("/");
            return;
        }
        axios.get("https://chatengine.io/user/me",{
            headers:{
                "projectId": "598523cc-ada1-4eb1-a4e2-30f0fa6c2166",
                "user-name":user.email,
                "user-secret": user.uid       
                }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            let formdata = new FormData();
            formdata.append("email",user.email);
            formdata.append("username",user.email);
            formdata.append("secret",user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            "private-key": "0f8a5b7e-1c19-48c4-8780-0cdb5a109207                            "
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                    
                })
        })

    },[user,history])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    const logoutHandler =async()=>{
        await auth.signOut();
        history.push("/")
    }
if(!user || loading) return "Loading..."

    return (
        <div className={styles.container}>
           <Navbar logoutHandler={logoutHandler}/> 
           <ChatEngine 
               height="calc(100vh - 50px)"
               projectId= "598523cc-ada1-4eb1-a4e2-30f0fa6c2166"
               useName={user.email}
               userSecret={user.uid}

           />
        </div>
    );
};

export default Chats;