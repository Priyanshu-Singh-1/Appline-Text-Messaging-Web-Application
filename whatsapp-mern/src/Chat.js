import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import "./Chat.css";
import axios from "./axios";


// Functionalities of Chat
function Chat({messages}) {

  const [input, setInput] = useState("");

  const sendMessage = async (e) =>{
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: "Priyanshu",
      timestamp: "Just Now", 
      received: true,
    });

    setInput('');
    
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src='https://w7.pngwing.com/pngs/450/120/png-transparent-cone-with-confetti-illustration-party-popper-computer-icons-celebration-icon-miscellaneous-orange-logo.png'/>

        <div className="chat__headerInfo">
          <h3><b>Party House</b></h3>
          <p>Last Seen at ....</p>
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

      {/* This is the body of the chat */}
      <div className="chat__body">
          {messages.map(message => (
            <p className={`chat__message ${message.received && 'chat__receiver'}`}>

            <span className='chat__name'>{message.name}</span>
            {message.message}

            <span className='chat__timestamp'>
              {message.timestamp}
            </span>

          </p>

          ))}
          

          
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input value = {input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Type a message" 
          type="text" />

          <button onClick={sendMessage} type="submit">Send a message </button>
        </form>

        <Mic />
      </div>

    </div>
  )
}

export default Chat