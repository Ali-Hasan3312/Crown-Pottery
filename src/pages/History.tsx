import founder from "../assets/images/History/about.jpg";
import Image1 from "../assets/images/History/amanda-jones-CcIIao_-Eow-unsplash.jpg";
import TodayCrown from "../assets/images/History/Crown Today.jpg";
import growth from "../assets/images/History/labourMan.jpg";
import milestone from "../assets/images/History/milestone.webp";
import SecondNavbar from "../components/SecondNavbar";
const History = () => {
  return (
    <div>
        <SecondNavbar />
    <div className="bg-gray-100 pb-8 px-8 mt-8">
      
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold text-center mb-6">Our Journey at Crown Pottery</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          From humble beginnings to becoming a leader in ceramic craftsmanship, Crown Pottery has grown through dedication, innovation, and passion.
        </p>
        <div className="flex justify-center">
          <img 
            src={Image1} 
            alt="Crown Pottery Building" 
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-16">
        {/* Section 1: Foundation */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2">
            <img 
              src={founder}
              alt="Founders" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">The Foundation</h2>
            <p className="text-lg text-gray-700">
              Crown Pottery was founded in 1973 by master craftsmen who wanted to blend traditional techniques with modern innovations. 
              What started as a small workshop soon grew into a thriving company known for its high-quality ceramic products.
            </p>
          </div>
        </div>

        {/* Section 2: Growth & Innovation */}
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8">
          <div className="md:w-1/2">
            <img 
              src={growth} 
              alt="Innovation" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">Growth and Innovation</h2>
            <p className="text-lg text-gray-700">
              Throughout the 1980s and 1990s, Crown Pottery expanded its product lines, introducing new designs, materials, and techniques that revolutionized the ceramic industry.
              The focus on combining artistic flair with functional utility helped the company carve a niche in the global market.
            </p>
          </div>
        </div>

        {/* Section 3: Milestones */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2">
            <img 
              src={milestone} 
              alt="Milestones" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">Major Milestones</h2>
            <p className="text-lg text-gray-700">
              In 2005, Crown Pottery achieved a significant milestone by becoming a leader in sustainable ceramic production. Our innovative processes reduce waste and conserve resources, 
              reflecting our commitment to environmental stewardship. By 2015, we had expanded to over 30 countries worldwide.
            </p>
          </div>
        </div>

        {/* Section 4: Today */}
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8">
          <div className="md:w-1/2">
            <img 
              src={TodayCrown} 
              alt="Today" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">Crown Pottery Today</h2>
            <p className="text-lg text-gray-700">
              Today, Crown Pottery is a global name in ceramic manufacturing, known for producing everything from bespoke tableware to high-performance industrial ceramics.
              We continue to innovate, explore new designs, and push the boundaries of ceramic craftsmanship.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </div>
    
    </div>
  );
};

export default History;
