import { React, useRef, useEffect } from 'react';
import './ChatWindow.css';
import MessageInput from './MessageInut';
import { FaChevronLeft, FaTrash } from 'react-icons/fa';

const ChatWindow = ({ chat }) => {
    const chatMessagesRef = useRef(null);

    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, []);

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="chat-header-left">
                    <img src="/lightX.png" alt="Chat Logo" className="chat-logo" /> {/* Chat logo */}
                    <h3>{chat.name}</h3>
                </div>
                <div className="chat-header-right">
                    <div className="icon-text">
                        <FaChevronLeft className="icon" title="Back" />
                        <p>Back</p>
                    </div>
                    <div className="icon-text">
                        <FaTrash className="icon" title="Delete" />
                        <p>Delete</p>
                    </div>
                </div>
            </div>
            <div className="chat-messages" ref={chatMessagesRef}>
                <div className="message-row sender">
                    <img src="/lightX.png" alt="Sender" className="profile-icon" />
                    <div className="message sender-message">
                        Hey, how can I help you?
                    </div>
                </div>
                <div className="message-row receiver">
                    <div className="message receiver-message">
                        I need some assistance regarding the project.
                    </div>
                    <img src="/lightY.png" alt="Receiver" className="profile-icon right-icon" />
                </div>

                <div className="message-row sender">
                    <img src="/lightX.png" alt="Sender" className="profile-icon" />
                    <div className="message sender-message">
                        Hey, how can I help you?
                    </div>
                </div>
                <div className="message-row receiver">
                    <div className="message receiver-message">
                        I need some assistance regarding the project.
                    </div>
                    <img src="/lightY.png" alt="Receiver" className="profile-icon right-icon" />
                </div>
            </div>
            <MessageInput />
        </div>
    );
};

export default ChatWindow;
