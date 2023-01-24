import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Cart from "./routes/Cart"
import Photos from "./routes/Photos"
import './App.css'

function App() {    
  return (
      <div>
          <Header />
          <Routes>
              <Route exact path="/" element={<Photos />} />
              
              <Route path="/cart" element={<Cart />}/>
          </Routes>
      </div>
  )
}


export default App
