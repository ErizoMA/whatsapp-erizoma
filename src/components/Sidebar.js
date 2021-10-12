import React from "react";
import "../styles/Sidebar.css";
import { Chat, DonutLarge, MoreVert } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">Search</div>
      <div className="sidebar__chats">Chats</div>
    </div>
  );
}

export default Sidebar;
