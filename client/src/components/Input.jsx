import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import EmojiPicker from 'emoji-picker-react';
import { TextInput } from "@mantine/core";
import { useState } from "react";
import axios from "axios";
const Input = ({fromUser,toUser}) => {
    const [msg,setMsg] = useState("")
    const [show, setShow] = useState(false)

    const showEmj = () =>{
        setShow(!show);
    }

    const sendMsg = async () => {
        if (msg.length > 0 ){
            const log = await axios.post("http://localhost:8080/api/addmsg",{
                to : toUser._id,
                from : fromUser._id,
                message:msg

            })

            console.log(log)
            // console.log(msg)
            // console.log(toUser)
            // console.log(fromUser)
            // sendChat(msg)
            setMsg("")
        }
    }

  return (
    <div className=" flex    bg-gray-400 gap-2 p-1 ">
        <button onClick={showEmj}><BsEmojiSmileFill/></button>
        {/* {show && <EmojiPicker/>} */}
        {/* <form className="flex justify-between" onSubmit={sendMsg} > */}
        <TextInput className="w-[380px]" placeholder="Type your message here" onChange={(e)=> setMsg(e.target.value)}  value = {msg}/>
        <button onClick={sendMsg} refresh="false" className="m-2"><IoMdSend/></button>
        {/* </form> */}
    </div>
  )
}

export default Input