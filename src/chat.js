import React from "react";
import './chat.css';
import { AccountCircleOutlined, AttachFile, InsertEmoticon, MicOutlined, MoreVert, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
function Chat() {
          return <div className="chat">

                    <div className="chat__header">
                              <AccountCircleOutlined />
                              <div className="chat__headerInfo">
                                        <h3>Room Name
                                        </h3>
                                        <p>Last seen</p>
                              </div>
                              <IconButton><Search /> </IconButton>
                              <IconButton><AttachFile /> </IconButton>
                              <IconButton><MoreVert /> </IconButton>
                    </div>
                    <div className="chat__body">

                              <p className="chat__message">
                                        <span className="chat__name">
                                                  Sonny
                                        </span>
                                        This is a message
                                        <span className="chat__timestamp">{new Date().toUTCString()}</span>
                              </p>
                              <p className="chat__message chat__reciever">
                                        <span className="chat__name">
                                                  Sonny
                                        </span>
                                        This is a message
                                        <span className="chat__timestamp">{new Date().toUTCString()}</span>
                              </p>
                              <p className="chat__message">
                                        <span className="chat__name">
                                                  Sonny
                                        </span>
                                        This is a message
                                        <span className="chat__timestamp">{new Date().toUTCString()}</span>
                              </p>
                              <p className="chat__message">
                                        <span className="chat__name">
                                                  Sonny
                                        </span>
                                        This is a message
                                        <span className="chat__timestamp">{new Date().toUTCString()}</span>
                              </p>

                
                    </div>

                    <div className="chat__footer">
                              <InsertEmoticon/>
                              <form>
                                        <input placeholder="Type a Message"
                                        type="text"/>
                                        <button  type="submit">Send Message</button>
                              </form>
                              <MicOutlined/>
                    </div>

          </div>
}

export default Chat;