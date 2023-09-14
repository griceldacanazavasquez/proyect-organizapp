import Head from "next/head";
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from "react-icons/fa";



export default function home(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <head>
                <title>OrganiZapp</title>
                <link rel="icon" href="favicon.ico" />
            </head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                    <div className="w-3/5 p-5">
                      <div className="text-left font-bold">
                        <span className="text-green-500">organiZapp</span>Name
                      </div>
                     <div className="py-10">
                      <h2 className="text-3 font-bold text-green-500 mb-2">sign in to account</h2>

                      <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
                      <div className="flex justify-center my-2">
                        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                          <FaFacebookF className="text-sm text-green-500" />
                        </a>
                        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                          <FaLinkedinIn className=" text-sm text-green-500" />
                        </a>
                        <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                          <FaGoogle className="text-sm text-green-500  " />
                        </a>
                      </div>
                      <div className="flex flex-col items-center mb-3">
                        <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                          <FaRegEnvelope className="text-gray-400 m-2"/>
                          <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                        </div>
                        <div className="bg-gray-100 w-64 p-2 flex items-center">
                          <FaRegEnvelope className="text-gray-400 m-2"/>
                          <input type="password" name="password" placeholder="password" className=" bg-gray-100 outline-none text-sm flex-1  "/>
                        </div>
                        <a href="#" className=" border-2 border-green-500 text-green-500 rounded-full px-11 space-y-4 py-1 inline-block font-semibold hover:bg-green-500 hover:text-white ">continue</a>
                      </div>
                     </div>
                      </div>
                    <div className="w-2/5 bg-green-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                      <h2 className="text-3xl font-bold mb-2">Welcome</h2>
                      <div className="border-white inline-block mb-2"></div>
                      <p className="mb-4">The key to success is in the organization. Download our app and start working smarter, not harder.</p>
                      <a href="#" className="border-2 border-white rounded-full px-11 inline-block font-semibold hover:bg-white hover:text-green-500">continue</a>
                      
                      </div>
                </div>
            </main>
        </div>
    )
}
