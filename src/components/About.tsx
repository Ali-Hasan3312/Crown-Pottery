import aboutImage from "../assets/images/AboutImage.webp"
const About = () => {
  return (
    <div className=" w-full h-screen bg-aboutbg mt-16 flex items-center">
     <div className="flex items-center gap-8 w-[85%] mx-auto">
     <div className="flex gap-6 flex-col">
        <h2 className=" text-lg uppercase font-semibold text-orange-700">About Us</h2>
        <h1 className=" text-[55px] leading-[1] font-bold ">Crafting the perfect flat white everytime.</h1>
        <p>Curabitur sed bibendum odio. Morbi sed imperdiet elit, maximus aliquet urna. Pellentesque tincidunt gravida mauris nec suscipit. Nam sagittis tincidunt ipsum. Nullam sollicitudin est a risus porta cursus. Donec suscipit orci sed dolor ornare, sed facilisis augue ullamcorper. Nunc nec ullamcorper metus. Sed egestas aliquam convallis.Ut consectetur magna ornare nisi pellentesque sagittis.</p>
        <button className=" h-10 w-24 text-white rounded-lg bg-orange-700 hover:scale-125 transition-all duration-500 hover:opacity-70 hover:text-black">Our Story</button>
      </div>
      <img className="h-[500px] w-[550px] object-cover" src={aboutImage} alt="" />
     </div>
    </div>
  )
}

export default About