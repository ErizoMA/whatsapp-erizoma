import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react"
import "../styles/SidebarChat.css"

function SidebarChat({addNewChat}) {

  const [seed,setSeed] = useState("");

  useEffect(()=>{
    setSeed(Math.floor(Math.random()*5000))
  },[])
  return ( 
  <div className="sidebarChat">
    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
    <div className="sidebarChat__info">
      <h2>Room name</h2>
      <p>Last message ...</p>
    </div>
  </div>
   );
}

export default SidebarChat;