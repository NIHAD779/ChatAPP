import axios from "axios"
import Chatbox from "../components/Chatbox";
import Contacts from "../components/Contacts";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { contactsRoute } from "../utils/apiRoute";
import { Loader } from "@mantine/core";
const Chat = () => {
  const navigate = useNavigate();
  const [currentUser,setCurrentUser] = useState(undefined);
  const [contacts,setContacts] = useState(undefined)
  const [currentChat,setCurrentChat] = useState(undefined)
  const local = localStorage.getItem("user")


  useEffect ( () => {
    if (!local) {
      navigate("/login");
    } else {
      setCurrentUser(
        JSON.parse(local)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  // console.log(currentUser)  
  useEffect( ()=>{
      axios.get(contactsRoute)
      .then((resp)=>{
        setContacts(resp.data)
      })
      // setContacts(data)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  // console.log(contacts)
  // useEffect(async () => {
  //   if (currentUser){
  //       const data = await axios.get(`${contactsRoute}/${currentUser._id}`);
  //       setContacts(data.data);}
  //   },[currentUser])
  //   console.log(contacts)

  const chatHandler = (chat) =>{
    setCurrentChat(chat)
  }
  // console.log(currentChat)
  return(
    <>
    <div className="bg-[#101a3f] w-[900px] flex gap-3 h-[700px] rounded-3xl">
      {contacts ? <Contacts contacts ={contacts} changeChat={chatHandler}  /> : <Loader/>}
        {currentChat === undefined ?  <Loader/> : <Chatbox chatUser = {currentChat} from = {currentUser}/>}
      
    </div>
    
    </>
  )
};

export default Chat;
