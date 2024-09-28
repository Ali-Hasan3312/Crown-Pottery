
const OpeningHours = () => {
  return (
    <div className="flex items-center justify-between gap-8 w-[70%] h-[230px] mx-auto">
        <h1 className=" text-5xl font-medium">Opening hours.</h1>
        <div className="grid grid-cols-2">
        <div className="flex flex-col">
            <span>Monday</span>
            <span>Tuesday</span>
            <span>Wednesday</span>
            <span>Thursday</span>
            <span>Friday</span>
            <span>Saturday</span>
            <span>Sunday</span>
        </div>
        <div className="flex flex-col">
            <span>9:00 AM - 5:00 PM</span>
            <span>9:00 AM - 5:00 PM</span>
            <span>9:00 AM - 5:00 PM</span>
            <span>9:00 AM - 5:00 PM</span>
            <span>Closed</span>
            <span>9:00 AM - 5:00 PM</span>
            <span>9:00 AM - 5:00 PM</span>
        </div>
        </div>
    </div>
  )
}

export default OpeningHours