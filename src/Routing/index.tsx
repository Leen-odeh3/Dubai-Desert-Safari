import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../component/Header/Header'
import Home from '../Pages/Home'
import Footer from '../component/Footer/Footer'
import About from '../Pages/About/About'
import Login from '../Forms/Login'
import Register from '../Forms/Register'


const index = () => {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default index