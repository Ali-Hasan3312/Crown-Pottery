
const InfoGrid = () => {
  return (
    <div className="grid grid-cols-3 h-screen w-[84%] mx-auto items-center">
        <div className="flex flex-col gap-4 w-[350px]">
            <img className="h-[350px] w-[350px] rounded-lg object-cover" src="https://cdn.prod.website-files.com/666c5fcac400739f045a12cb/66756bbb6176a4541a65787c_flat-white-p-500.webp" alt="" />
            <h1 className=" text-4xl font-semibold">Coffee.</h1>
            <p className=" text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div className="flex flex-col gap-4 w-[350px]">
            <img className="h-[350px] w-[350px] rounded-lg object-cover" src="https://cdn.prod.website-files.com/666c5fcac400739f045a12cb/66759ab26e183e2165a9dd11_breaking-poach-egg-p-500.webp" alt="" />
            <h1 className=" text-4xl font-semibold">Brunch.</h1>
            <p className=" text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div className="flex flex-col gap-4 w-[350px]">
            <img className="h-[350px] w-[350px] rounded-lg object-cover" src="https://cdn.prod.website-files.com/666c5fcac400739f045a12cb/66759ab2617be5d21830d393_red-wine-glasses-p-500.webp" alt="" />
            <h1 className=" text-4xl font-semibold">Drink.</h1>
            <p className=" text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
    </div>
  )
}

export default InfoGrid