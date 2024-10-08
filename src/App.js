import React, { useState } from 'react';
import './App.css';
import ChatList from './Components/ChatList';
import ChatWindow from './Components/ChatWindow';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const [selectedChat, setSelectedChat] = useState({
    id: 1,
    name: "Akshay",
    lastMessage: "Hey, How are you?..."
  });

  const chats = [
    { id: 1, name: "Akshay", lastMessage: "Hey, How are you?..." },
    { id: 2, name: "Aditya", lastMessage: "Order update at 3 pm..." },
  ];

  return (
    <>
      <Navbar />
      <div className="app-container">
        <ChatList chats={chats} onSelectChat={setSelectedChat} />
        <ChatWindow chat={selectedChat} />
      </div>
      <Footer />
    </>
  );
}

export default App;
