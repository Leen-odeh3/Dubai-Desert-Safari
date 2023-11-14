import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../component/Header/Header'
import Home from '../Pages/Home'
import Footer from '../component/Footer/Footer'


const index = () => {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default index