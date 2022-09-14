import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className="sidebar">

        {/* Creating a Sidebar Header */}
        <div className="sidebar__header">
          <Avatar src='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg' />
              <div className="sidebar__headerRight">
                        <IconButton>
                          <DonutLargeIcon />
                        </IconButton>

                        <IconButton>
                          <ChatIcon />
                        </IconButton>

                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
               </div>  
        </div>


        {/* Creating a side bar search bar */}
        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlined />
            <input type="text" placeholder='"Search or start a new chat' />
          </div>
        </div>

        <div className="sidebar__chats">
          <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar;