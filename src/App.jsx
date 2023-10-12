import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'

function App() {
  const [Contact, setContact] = useState(dummyContacts)

  return (
    <>
     <ContactList /> 
    </>
  )
}

export default App
