import React, { useState } from "react";
import './chat.css';
import { AccountCircleOutlined, AttachFile, InsertEmoticon, MicOutlined, MoreVert, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from"./axios";
function Chat({ messages }) {
          const [input, setInput] = useState("");
          const sendMessage = (e) => {
                    e.preventDefault();
                    axios.post('/messages/new',{
                              message:input,
                              name:"raja",
                              timestamp:new Date().toISOString(),
                              recieved:true
                    })
                   setInput("");
          }
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
                              {messages.map(message => (
                                        message.recieved ?
                                                  <p className='chat__message'>
                                                            <span className="chat__name">
                                                                      {message.name}
                                                            </span>
                                                            {message.message}
                                                            <span className="chat__timestamp">{message.timestamp}</span>
                                                  </p>
                                                  :
                                                  <p className='chat__message chat__reciever'>
                                                            <span className="chat__name">
                                                                      {message.name}
                                                            </span>
                                                            {message.message}
                                                            <span className="chat__timestamp">{message.timestamp}</span>
                                                  </p>
                              ))}

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
                              <InsertEmoticon />
                              <form>
                                        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a Message"
                                                  type="text" />
                                        <button onClick={sendMessage} type="submit">Send Message</button>
                              </form>
                              <MicOutlined />
                    </div>

          </div>
}

export default Chat;