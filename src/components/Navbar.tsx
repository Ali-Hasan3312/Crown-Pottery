interface NavbarProps {
  onScrollToContact: () => void;
  onScrollToBooking: () => void;
  onScrollToMenus: () => void;
  onScrollToAbout: () => void;
  onScrollToLanding: () => void;
}
const Navbar = (
  props: NavbarProps
) => {
  return (
    <div className="flex items-center justify-between mt-4 w-[90%] mx-auto">
        <h2 className=" text-5xl font-bold">Crema.</h2>
        <div className="flex items-center gap-4 text-2xl font-medium">
            <button onClick={props.onScrollToLanding} className=" underline text-red-700">Landing</button>
            <button onClick={props.onScrollToAbout}>About</button>
            <button onClick={props.onScrollToMenus}>Menus</button>
            <button onClick={props.onScrollToBooking}>Booking</button>
            <button onClick={props.onScrollToContact}>Contact</button>
        </div>
    </div>
  )
}

export default Navbar