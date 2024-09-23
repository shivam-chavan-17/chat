import React from 'react';
import './MessageInput.css';
import { FaPlus, FaRegCommentDots, FaPaperPlane, FaRegPaperPlane, FaTelegramPlane } from 'react-icons/fa'


const MessageInput = () => {
    return (
        <div className="message-input">
            <input type="text" placeholder="Message" />
            <button>
                <FaPaperPlane className="send-icon" /> {/* Replacing button text with an icon */}
            </button>
        </div>
    );
};

export default MessageInput;
