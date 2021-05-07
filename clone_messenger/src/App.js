import './App.css';
import { useState, useEffect } from 'react'
import { Button, FormControl, InputLabel, Input, IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import Message from './Components/Message'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setUsername(prompt("Please enter username"))
  }, [])

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  const [username, setUsername] = useState('')


  const sendMessage = (e) => {
    e.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <h1>FACEBOOK MESSENGER</h1>
      <h3>Welcome {username}</h3>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter Message...." value={input} onChange={(e) => { setInput(e.target.value) }} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) =>
          (<Message key={id} message={message} username={username} />))
        }
      </FlipMove>
    </div>
  );
}

export default App;
