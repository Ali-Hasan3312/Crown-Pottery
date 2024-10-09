import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryPropsTypes{
    image: string;
   
}
const GalleryProps = ({image}:GalleryPropsTypes) => {
    const [isHovered, setIsHovered] = useState(false)
  
  
  return (
    <motion.div
          
          className={`ImageOpen h-[400px] w-[23vw] max-sm:w-[70vw] relative mx-auto`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial= {{opacity: 0, scale: 0.5}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{type:"spring", stiffness:100, delay:0.3}}
          
        >
          <img
            src={image}
            className={`h-full w-full hover:opacity-70 object-cover transition-transform duration-300 ease-in-out ${isHovered ? "scale-90" : ""}`}
            alt=""
            loading='lazy'
          />
         
        </motion.div>
  )
}

export default GalleryProps