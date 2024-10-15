import { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/images/Our Gallery/factory/img1.jpg"
import img2 from "../assets/images/Our Gallery/factory/img2.jpg"
import img3 from "../assets/images/Our Gallery/factory/img3.jpg"
import img4 from "../assets/images/Our Gallery/factory/img4.jpg"
import img5 from "../assets/images/Our Gallery/factory/img5.jpg"
import img6 from "../assets/images/Our Gallery/factory/img6.jpg"
import img7 from "../assets/images/Our Gallery/factory/img7.jpg"
import img8 from "../assets/images/Our Gallery/factory/img8.jpg"
import img9 from "../assets/images/Our Gallery/factory/img9.jpg"
import img10 from "../assets/images/Our Gallery/factory/img10.jpg"
import img11 from "../assets/images/Our Gallery/factory/img11.jpg"
import img12 from "../assets/images/Our Gallery/factory/img12.jpg"
import product1 from "../assets/images/Products/product1.jpg"
import product2 from "../assets/images/products/product2.jpg"
import product3 from "../assets/images/products/product3.jpg"
import product4 from "../assets/images/products/product4.jpg"
import product5 from "../assets/images/products/product5.jpg"
import product6 from "../assets/images/products/product6.jpg"
import product7 from "../assets/images/products/product7.jpg"
import product8 from "../assets/images/products/product8.jpg"
import product9 from "../assets/images/products/product9.jpg"
import product10 from "../assets/images/products/product10.jpg"
import product11 from "../assets/images/products/product11.jpg"
import product12 from "../assets/images/products/product12.jpg"
import product13 from "../assets/images/products/product13.jpg"
import product14 from "../assets/images/products/product14.jpg"
import product15 from "../assets/images/products/product15.jpg"

import GalleryProps from './GalleryProps'
interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {}
const Gallery = forwardRef<HTMLDivElement, GalleryProps>((props, ref) => {
  props
  const [all, setAll] = useState(true)
  const [factory, setFactory] = useState(false)
  const [products, setProducts] = useState(false)
  const factoryHandler = ()=>{
    setFactory(true);
    setProducts(false);
    setAll(false);
  } 
  const productsHandler = ()=>{
    setProducts(true);
    setFactory(false);
    setAll(false);
  }
  const allImageHandler = ()=>{
    setAll(true);
    setFactory(false);
    setProducts(false);
  }
 
  return (

    <div ref={ref} className=' mt-12' id='gallery'>
       <div className='flex flex-col font-semibold gap-2 items-center justify-center'>
       <h1 className=' text-center text-2xl max-sm:text-xl uppercase text-red-700'>Our Gallery</h1>
        <div className='flex items-center justify-center gap-8 text-sm max-sm:text-[12px] mt-2 max-sm:px-2 max-sm:gap-4 text-nowrap'>
                <Link to={"#"} className={` uppercase ${all? "text-red-700" : "text-gray-800"}`} onClick={allImageHandler}>All</Link>
                <div className=' border h-4 border-r border-gray-400 '></div>
                <Link to={"#"} className={` tracking-wide uppercase hover:text-custom-yellow hover:transition-all hover:duration-300 ${products? "text-red-700" : "text-gray-800"}`} onClick={productsHandler}>Products</Link>
                <div className=' border h-4 border-r border-gray-400'></div>
                <Link to={"#"} className={`tracking-wide uppercase hover:text-custom-yellow hover:transition-all hover:duration-300 ${factory? "text-red-700" : "text-gray-800"}`} onClick={factoryHandler}>Factory</Link>
        </div>
       </div>
       <div className='grid grid-cols-4 gap-3 mt-10 w-[98%] mx-auto max-sm:ml-0 max-sm:grid-cols-1 max-sm:px-16'>
      {all && (
        <>
          
          <GalleryProps image={product1} />
          <GalleryProps image={product2} />
          <GalleryProps image={product3} />
          <GalleryProps image={product4} />
          <GalleryProps image={product5} />
          <GalleryProps image={product6} />
          <GalleryProps image={product7} />
          <GalleryProps image={product8} />
          <GalleryProps image={product9} />
          <GalleryProps image={product10} />
          <GalleryProps image={product11} />
          <GalleryProps image={product12} />
          <GalleryProps image={product13} />
          <GalleryProps image={product14} />
          <GalleryProps image={product15} />
          <GalleryProps image={img1} />
          <GalleryProps image={img2} />
          <GalleryProps image={img3} />
          <GalleryProps image={img4} />
          <GalleryProps image={img5} />
          <GalleryProps image={img6} />
          <GalleryProps image={img7} />
          <GalleryProps image={img8} />
          <GalleryProps image={img9} />
        </>
      )}
      {products && (
        <>
          <GalleryProps image={product1} />
          <GalleryProps image={product2} />
          <GalleryProps image={product3} />
          <GalleryProps image={product4} />
          <GalleryProps image={product5} />
          <GalleryProps image={product6} />
          <GalleryProps image={product7} />
          <GalleryProps image={product8} />
          <GalleryProps image={product9} />
          <GalleryProps image={product10} />
          <GalleryProps image={product11} />
          <GalleryProps image={product12} />

        </>
      )}
      {factory && (
          <>
            <GalleryProps image={img1} />
          <GalleryProps image={img2} />
          <GalleryProps image={img3} />
          <GalleryProps image={img4} />
          <GalleryProps image={img5} />
          <GalleryProps image={img6} />
          <GalleryProps image={img7} />
          <GalleryProps image={img8} />
          <GalleryProps image={img9} />
          <GalleryProps image={img10} />
          <GalleryProps image={img11} />
          <GalleryProps image={img12} />
          </>
      )}
    </div>
    </div>
  )
})

export default Gallery
