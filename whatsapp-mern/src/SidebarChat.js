import { Avatar } from '@mui/material';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div>
        <div className="sidebarChat">
                <Avatar src='https://t3.ftcdn.net/jpg/04/03/19/32/360_F_403193281_23SyF2ETkgH9BUbBJ8Z5ag65iiyQWI8P.jpg' />
                <div className="sidebarChat__info">
                        <h2>Priyanshu Home</h2>
                        <p>This is the private group</p>
                </div>
        </div>

        <div className="sidebarChat">
                <Avatar src='https://w7.pngwing.com/pngs/450/120/png-transparent-cone-with-confetti-illustration-party-popper-computer-icons-celebration-icon-miscellaneous-orange-logo.png'/>
                <div className="sidebarChat__info">
                        <h2>Party House</h2>
                        <p>Let's enjoy the party!</p>
                </div>
        </div>

        <div className="sidebarChat">
                <Avatar src='https://w7.pngwing.com/pngs/520/669/png-transparent-c-logo-c-programming-language-computer-icons-computer-programming-programming-miscellaneous-blue-trademark-thumbnail.png' />
                <div className="sidebarChat__info">
                        <h2>Cpp Coding</h2>
                        <p>Happy Coding!</p>
                </div>
        </div>
    </div>
  )
}

export default SidebarChat