import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };

    // Simple AI logic
    let aiReply = "I am an AI BOT, ask me anything!";
    if (input.toLowerCase().includes("hello")) {
      aiReply = "Hello! How can I assist you today?";
    } else if (input.toLowerCase().includes("hi")) {
      aiReply = "Hi there! What can I do for you?";
    } else if (input.toLowerCase().includes("test")) {
      aiReply = "I can help generate test code or prototypes!";
    } else if (input.toLowerCase().includes("personalize")) {
      aiReply = "I can personalize your experience based on your preferences.";
    } else if (input.toLowerCase().includes("automate")) {
      aiReply = "I can automate repetitive tasks for you.";
    }

    const botMsg = { from: 'bot', text: aiReply };
    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AI Integration Demo
        </p>
        <div style={{ background: '#222', padding: 20, borderRadius: 8, width: 300, margin: '20px auto' }}>
          <div style={{ height: 150, overflowY: 'auto', marginBottom: 10 }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ textAlign: msg.from === 'user' ? 'right' : 'left' }}>
                <b>{msg.from === 'user' ? 'You' : 'AI'}:</b> {msg.text}
              </div>
            ))}
          </div>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{ width: '70%', marginRight: 5 }}
            placeholder="Type a message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

