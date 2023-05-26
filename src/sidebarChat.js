import {  AccountCircleOutlined } from '@mui/icons-material';
import React from 'react'
import './sidebarChat.css';

function SidebarChat() {
          return <div className='sidebarChat'>
                    <AccountCircleOutlined />
                    <div className='sidebarChat__info'>
                              <h2>Room Name</h2>
                              <p>Last Message</p>
                    </div>
          </div>;

}

export default SidebarChat;