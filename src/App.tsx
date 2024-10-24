import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader'

// Lazy load components and pages
const NotFound = lazy(() => import('./components/NotFound'));
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const History = lazy(() => import('./pages/History'));
const Products = lazy(() => import('./components/Products'));
const Shipping = lazy(() => import('./components/Shipping'));
const OrderDetails = lazy(() => import('./components/OrderDetails'));
const CustomDesigns = lazy(() => import('./pages/CustomDesigns'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/history' element={<History />} />
            <Route path='/products' element={<Products />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/orderDetails' element={<OrderDetails />} />
            <Route path='/custom' element={<CustomDesigns />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App;
