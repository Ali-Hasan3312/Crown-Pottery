import { forwardRef } from "react"

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const OurProducts = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  return (
    <div ref={ref} className=" h-screen bg-aboutbg flex items-center justify-center gap-8">
      <div>
      <img className="h-[340px] w-[280px]  object-cover rounded-lg" src="https://cdn.prod.website-files.com/666c5fcac400739f045a12cb/667571730a0c36261bf96970_raw-coffee-beans-p-500.webp" alt="" />
      </div>
      <div className="flex flex-col gap-4 w-[45%] text-center">
            <h2 className=" text-lg uppercase font-semibold text-orange-700">Our products</h2>
            <h1 className=" text-[55px] leading-[1] font-semibold ">We only work with suppliers that care</h1>
            <p>Curabitur sed bibendum odio. Morbi sed imperdiet elit, maximus aliquet urna. Pellentesque tincidunt gravida mauris nec suscipit. Nam sagittis tincidunt ipsum. Nullam sollicitudin est a risus porta cursus. Donec suscipit orci sed dolor ornare, sed facilisis augue ullamcorper. Nunc nec ullamcorper metus. Sed egestas aliquam convallis.Ut consectetur magna ornare nisi pellentesque sagittis.</p>
            <div className="flex items-center gap-4">
            </div>
        </div>
        <div className="flex gap-8">
            <img className="h-[340px] w-[280px] object-cover rounded-lg" src="https://cdn.prod.website-files.com/666c5fcac400739f045a12cb/667571706f4f739e5b784ff8_coffee-bean-farmer-p-500.webp" alt="" />
        </div>
    </div>
  )
})

export default OurProducts