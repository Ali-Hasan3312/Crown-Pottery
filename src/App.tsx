import './App.css'
import NotFound from './components/NotFound'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import History from './pages/History'
import Products from './components/Products'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/history' element={<History />} />
          <Route path='/products' element={<Products />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
