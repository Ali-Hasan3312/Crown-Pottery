
const Booking = () => {
  return (
    <div className=" h-screen bg-aboutbg flex items-center relative">
       <div className="w-[85%] mx-auto flex items-center justify-between">
       <div className="flex flex-col gap-4 w-[45%]">
            <h2 className=" text-lg uppercase font-semibold text-orange-700">Brunch</h2>
            <h1 className=" text-[55px] leading-[1] font-semibold ">Start the day right sunshine</h1>
            <p>Curabitur sed bibendum odio. Morbi sed imperdiet elit, maximus aliquet urna. Pellentesque tincidunt gravida mauris nec suscipit. Nam sagittis tincidunt ipsum. Nullam sollicitudin est a risus porta cursus. Donec suscipit orci sed dolor ornare, sed facilisis augue ullamcorper. Nunc nec ullamcorper metus. Sed egestas aliquam convallis. Ut consectetur magna ornare nisi pellentesque sagittis.</p>
            <div className="flex items-center gap-4">
            <button className=" h-10 w-32 text-white rounded-lg bg-orange-700 hover:scale-110 transition-all duration-500 hover:opacity-70 hover:text-black">Make a Booking</button>
            <button className=" h-10 w-32 text-black border border-black rounded-lg bg-inherit hover:scale-110 transition-all duration-500 hover:opacity-70 hover:text-black">View Menus</button>
            </div>
        </div>
        <div className="flex gap-8">
            <img className="h-[340px] w-[280px] absolute top-[40%] right-[30%] object-cover rounded-lg" src="https://cdn.prod.website-files.com/666c5fcac400739f045a12cb/667431c0577927841a912765_cinnamon-buns-p-500.webp" alt="" />
            <img className="h-[340px] w-[280px] absolute top-[20%] right-[5%]  object-cover rounded-lg" src="https://cdn.prod.website-files.com/666c5fcac400739f045a12cb/667431c04d29a8eb2ac82693_breaking-poach-egg-p-500.webp" alt="" />
        </div>
       </div>
    </div>
  )
}

export default Booking