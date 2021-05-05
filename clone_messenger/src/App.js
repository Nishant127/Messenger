import './App.css';
import { useState, useEffect } from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Message from './Components/Message'

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt("Please enter username"))
  }, [])

  console.log(input)
  console.log(messages)

  const sendMessage = (e) => {
    e.preventDefault()
    setMessages([...messages, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>FACEBOOK MESSENGER</h1>
      <h3>Welcome {username}</h3>
      <form>
        <FormControl>
          <InputLabel>Enter Message</InputLabel>
          <Input value={input} onChange={(e) => { setInput(e.target.value) }} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      {messages.map(message =>
        (<Message text={message} />))
      }

    </div>
  );
}

export default App;
