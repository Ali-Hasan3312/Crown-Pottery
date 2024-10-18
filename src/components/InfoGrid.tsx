import mugs from "../assets/images/handcraftedmugs.jpg"
import drinkware from "../assets/images/drinkwares.jpg"
import plate1 from "../assets/images/Products/product23.jpg"
const InfoGrid = () => {
  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 py-12 w-[84%] mx-auto">
      <div className="flex flex-col gap-4 w-[350px] max-sm:w-[410px]">
        <img
          className="h-[350px] w-full rounded-lg object-cover"
          src={mugs}
          alt="Handcrafted Ceramic Mugs"
        />
        <h1 className="text-4xl font-semibold">Durable & Long Lasting</h1>
        <p className="text-sm max-sm:mb-4">
          Our beautifully crafted mugs are designed to elevate your coffee experience. Each piece is unique, offering a blend of tradition and modern design for your perfect morning brew.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-[350px] max-sm:w-[410px]">
        <img
          className="h-[350px] w-full rounded-lg object-cover"
          src={plate1}
          alt="Ceramic Plates for Brunch"
        />
        <h1 className="text-4xl font-semibold">Attention to Quality</h1>
        <p className="text-sm max-sm:mb-4">
          Our ceramic plates are perfect for any brunch setting. Crafted with precision, they add a touch of elegance to your dining table, making every meal a special occasion.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-[350px] max-sm:w-[410px]">
        <img
          className="h-[350px] w-full rounded-lg object-cover"
          src={drinkware}
        />
        <h1 className="text-4xl font-semibold">Custom Printing Solutions</h1>
        <p className="text-sm max-sm:mb-4">
          Whether it's cold drink or water, our drinkware collection is designed to enhance your drinking experience. Each piece is a work of art, combining beauty and functionality.
        </p>
      </div>
    </div>
  );
};

export default InfoGrid;
