import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Master from './assets/Master'
import Home from './componet/Home'
import Shop from './componet/Shop'
import Contact from './componet/Contact'
import About from './componet/About'
import Singleproduct from './componet/Singleproduct'
import Cart from './componet/Cart'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Master/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Shop' element={<Shop/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Singleproduct' element={<Singleproduct/>}></Route>
      <Route path='Cart' element={<Cart/>}></Route>
      
      
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App