import loveHome from "../assets/images/LoveHome.jpg"
const LoveHome = () => {
  return (
    <div className="relative w-[90%] mx-auto mt-8 rounded-xl h-screen bg-cover bg-center" style={{ backgroundImage: `url(${loveHome})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 rounded-xl bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col  items-start justify-center h-full p-8 md:p-16 text-white">
        <h1 className="text-[44px] font-bold leading-tight absolute bottom-8 w-[40%]">
        “I love how at home Crema makes you feel, and how friendly everyone is.”
        </h1>
       
      </div>
    </div>
  )
}

export default LoveHome