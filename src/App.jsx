import { Routes, Route } from 'react-router-dom'
import './App.css'
import Logo from './components/Logo'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Articles from './components/Articles'

function App() {

  return (
    <>
    <Logo/>
    <Header/>
    <Navbar/>
    <div id="content">
    <Routes>
    <Route path ="/articles" element={<Articles/>}/>
    <Route path ="/articles/:topic" element={<Articles/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
