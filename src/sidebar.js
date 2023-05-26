import React from 'react'
import './sidebar.css';
import { AccountCircle, Chat, DonutLargeOutlined,  MoreVert, SearchOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './sidebarChat';
import SidebarChat from './sidebarChat';



function SideBar() {
   return (<div className='sidebar'>

      <div className='sidebar__header'>
         <AccountCircle src=''/>
         <div className='sidebar__headerRight'>
          
            <IconButton><DonutLargeOutlined /></IconButton>
            <IconButton><Chat /></IconButton>
            <IconButton><MoreVert/></IconButton>


         </div>
      </div>
      <div className='sidebar__searchbar'>
         <div className='sidebar__searchcontainer'>
            <SearchOutlined/>
            <input placeholder='search or start a new chat'text='text'/>
         </div>
      </div>
  <div className='sidebar__chat'>
  <SidebarChat/>
  <SidebarChat/>
  <SidebarChat/>
  </div>


   </div>);
}

export default SideBar;