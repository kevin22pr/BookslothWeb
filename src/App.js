import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Header';
import Header from './components/Header';
import Message from './components/Message';


function App() {
  const [messages, setMessages] = useState([])

  async function fetchMessages() {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return (await fetch('http://localhost:8000/messages', options)).json()
  }

  useEffect(() => {
    fetchMessages().then(results => {
      setMessages(results)
    }).catch(error => console.error(error.message))

    return function cleanup() {
      console.log("DONE!")
    }
  }, []);


  return (
    <div className="App">
      <Header />
      <div className="App-Content">
        {
          messages.map(message => {
            message.replies.map(reply => {
              return <li>{reply.message}</li>
            })
            return (<Message avatar={message.photo} name={message.full_name} replies={message.replies} date={message.date}>
              {message.message}
            </Message>)
          })
        }
      </div>
    </div>
  );
}

export default App;
