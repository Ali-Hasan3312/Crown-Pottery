import image1 from "../assets/images/AboutImage.webp"
import image2 from "../assets/images/MugBlack.jpg";
import image3 from "../assets/images/drinkwares.jpg";
import image4 from "../assets/images/yellowmugs.jpg";
import { motion } from "framer-motion";

interface HeroCountProps {
  stateValue: number;
}

const HeroSlider = ({ stateValue }: HeroCountProps) => {
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition = { duration: 0.3, ease: "easeInOut" };

  const getImage = () => {
    switch (stateValue) {
      case 0:
        return image1;
      case 1:
        return image2;
      case 2:
        return image3;
      case 3:
        return image4;
      default:
        return image1;
    }
  };

  return (
    <motion.img
      key={stateValue} // Forces re-rendering and animation on state change
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={animationVariants}
      transition={transition}
      className="relative inset-x-0 top-[0px] w-[90%] h-[500px] object-cover z-[-1] p-0"
      src={getImage()}
    />
  );
};

export default HeroSlider;
