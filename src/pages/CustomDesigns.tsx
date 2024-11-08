import React, { ChangeEvent, FormEvent, useState } from 'react';
import design1 from "../assets/images/Products/design1.jpg";
import design2 from "../assets/images/Products/design2.jpg";
import design3 from "../assets/images/Products/design3.jpg";
import design4 from "../assets/images/Products/design4.jpg";
import design5 from "../assets/images/Products/design5.jpg";
import SecondNavbar from '../components/SecondNavbar';
// Define the structure of the form data
interface FormData {
  name: string;
  email: string;
  designDescription: string;
  productType: 'Mug' | 'Cup';
}

const CustomDesigns: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    designDescription: '',
    productType: 'Mug',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const sampleImages = [
      { type: 'First Design', src: design1 },
      { type: 'Second Design', src: design2 },
      { type: 'Third Design', src: design3 },
      { type: 'Fourth Design', src: design4 },
      { type: 'Custom Image', src: design5 },
   
  ];

  // Handle form field changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Your custom design request has been submitted!');
    console.log('Form Data:', formData);
  };

  // Handle image upload and preview
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedImage = URL.createObjectURL(e.target.files[0]);
      setImagePreview(selectedImage);
    }
  };

  return (
    <>
    <SecondNavbar />
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Customize Your Mugs and Cups</h2>

      <div className="grid grid-cols-1 gap-8 w-[90%] mx-auto">
        {/* Sample Designs */}
        <div>
         
          <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-6">
            {sampleImages.map((img, index) => (
              <div key={index} className="w-[300px] text-center">
                <p className="font-medium mb-2">{img.type}</p>
                <img
                  src={img.src}
                  alt={`${img.type} sample`}
                  className="w-[300px] h-[300px] object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Upload Design */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Upload Your Design</h3>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
          {imagePreview && (
            <div className="mt-4">
              <p className="font-medium">Preview:</p>
              <img
                src={imagePreview}
                alt="Design Preview"
                className="w-40 h-40 object-cover rounded-md shadow-md mt-2"
              />
            </div>
          )}
        </div>
      </div>

      {/* Custom Design Form */}
      <h3 className="text-2xl font-semibold mt-12 mb-6 text-center">Custom Design Form</h3>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <div>
          <label className="block font-medium mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Product Type:</label>
          <select
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
          >
            <option value="Mug">Mug</option>
            <option value="Cup">Cup</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">Design Description:</label>
          <textarea
            name="designDescription"
            value={formData.designDescription}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-500 transition"
        >
          Submit Design Request
        </button>
      </form>
    </div>
    </>
  );
};

export default CustomDesigns;
