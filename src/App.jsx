
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import Login from './Pages/Login'
import BookList from './Pages/BookList'
import BookDetail from './Pages/BookDetail'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/booklist' element={<BookList/>}/>
      <Route path='/bookdetails/:id' element={<BookDetail/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
