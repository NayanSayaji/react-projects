import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home />
      <Footer />

    </>
  )
}

export default App