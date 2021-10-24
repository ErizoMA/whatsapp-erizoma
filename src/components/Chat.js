import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';
import React, { useEffect, useState } from "react";
import "../styles/Chat.css";
import {useParams} from "react-router-dom"
import db from "../firebase";
function Chat() {
  
  const [input,setInput] = useState("")
  const [seed, setSeed] = useState("");
  const {roomId} = useParams()
  const [roomName ,setRoomName] = useState("")


  useEffect(()=>{
    if(roomId){
      db.collection("rooms").doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ))

    }

  },[roomId])
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage=(e)=>{
    e.preventDefault();
    console.log("You typed >>>" ,input)
    setInput("");
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen on ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true&&"chat__reciever"} `}><span className="chat__name">
          Erick</span>HeyGuys<span className="chat__timestamp">3:52pm</span></p>

      </div>
      <div className="chat__footer">
        <InsertEmoticon></InsertEmoticon>
        <form>
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder ="Type a message"type="text"/>
          <button onClick={sendMessage}type="submit">Send a message</button>
        </form>
        <MicIcon></MicIcon>
    
      </div>
    </div>
  );
}

export default Chat;
