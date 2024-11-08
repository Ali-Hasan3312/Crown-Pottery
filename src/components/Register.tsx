import { Link } from "react-router-dom";
import SecondNavbar from "./SecondNavbar";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
           axios.post("https://ecommerce-backend-codv.onrender.com/api/v1/auth/signup",
            {
              name: form.name,
              email: form.email,
              password: form.password
            }
          ).then((res)=>{
            
            toast.success("Registered Successfully")
          })
          
        } catch (error:any) {
          
         
          
        }
      };
      const changeHandler = (e:any)=>{
        const {name, value} = e.target;
          setForm({...form, [name]: value})
          console.log(form);
          
      }
  return (
    <>
    <SecondNavbar />
    <div className=" py-32 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              onChange={changeHandler}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Joen Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={changeHandler}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="you@example.com"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={changeHandler}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="••••••••"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              onChange={changeHandler}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-opacity-75 transition-all duration-300"
            >
              Register
            </button>
            <Link to="/login" className="text-sm text-blue-500 underline">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
