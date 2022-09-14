import React, { useEffect, useState } from "react"
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from 'pusher-js';
import axios from './axios'


function App(){
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    axios.get('/messages/sync').then((response) => {
      // console.log(response.data);
      setMessages(response.data);

    })
  }, [])


  useEffect(()=> {
    const pusher = new Pusher('bb4a5f45c8c575a70b72', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage]);

    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]); 

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        

        {/* SideBar Component */}
        <Sidebar />

        {/* Chat Component */}
        <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
