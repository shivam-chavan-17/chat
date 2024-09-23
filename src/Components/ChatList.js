import React from 'react';
import './ChatList.css';
import { FaPlus, FaRegCommentDots } from 'react-icons/fa'

const ChatList = ({ chats, onSelectChat }) => {
    return (
        <div className="chat-list">
            <h2 className="heading"></h2>
            <button className="chat-images-toggle"> <FaRegCommentDots className="chat-icon" /> Chat Images: ON</button>
            <p className="chat-info">
                When bot sends you images, you will be charged one secondary image
            </p>

            {chats.map((chat) => (
                <div key={chat.id} className="chat-item" onClick={() => onSelectChat(chat)}>
                    <div className="chat-item-content">
                        {/* <div className="chat-profile-circle"></div> */}
                        <img src="/lightX.png" alt="photo" className='chat-profile-circle' />
                        <div className="chat-details">
                            <p className="chat-name">{chat.name}</p>
                            <p className="chat-preview">{chat.lastMessage}</p>
                        </div>

                    </div>
                </div>
            ))}

            <div className="new-chat">
                <div className="plus-circle">
                    <img className='plus-icon' src="plus-circle-fill.svg" alt="logo" />
                </div>
                <div className="new-chat-info">
                    <p className="new"></p>
                </div>
            </div>
        </div>
    );
};

export default ChatList;
