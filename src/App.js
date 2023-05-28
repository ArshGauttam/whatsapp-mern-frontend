import { useEffect, useState } from 'react';
import './App.css';
import Chat from './chat';
import SideBar from './sidebar';
import Pusher from 'pusher-js';
import axios from'./axios';

function App() {

  const [messages,setMessages]=useState([]);


  useEffect(()=>{
    axios.get("/messages/sync").then((response)=>{
      
      setMessages(response.data);
    })
  },[]);

  useEffect(()=>{
    var pusher = new Pusher('f12ea26b9ae9cabab1af', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
    
      setMessages([...messages,newMessage])
    });

    return()=>{
channel.unbind_all();
channel.unsubscribe();
    }
  },[messages]);

  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat messages={messages} />
      </div>


    </div>
  );
}

export default App;
