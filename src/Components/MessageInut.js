import React from 'react';
import './MessageInput.css';
import { FaPaperPlane, FaRegPaperPlane, FaTelegramPlane } from 'react-icons/fa'


const MessageInput = () => {
    return (
        <div className="message-input">
            <input type="text" placeholder="Message" />
            <button>
                <FaPaperPlane className="send-icon" />
            </button>
        </div>
    );
};

export default MessageInput;
