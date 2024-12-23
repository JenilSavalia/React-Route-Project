import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import Search_Menu from "./Search_Menu";

function BankLayout() {

    // Search Box Poppup
    const [search, Setsearch] = useState(false)


    const handleSearch = () => {
        Setsearch(true)
    }




    return (

        <>
            <div className="fixed z-50">
                <Search_Menu search={search} Setsearch={Setsearch} />
            </div>

            <div className="flex-col items-center">
                <div className="bg-blue-50 flex justify-between items-center px-2 py-4 sm:px-6 xl:px-[8rem] ">
                    <Link to='/bankdb'>
                        <h1 className='text-l font-bold text-blue-700 sm:text-xl xl:text-2xl'>
                            <span className="bg-blue-200 rounded-full text-md mr-2 ">🏦</span>
                            BankDd</h1>
                    </Link>


                    <div className="hidden sm:block w-[50%] lg:w-[40%]">
                        <input type="text"
                            placeholder="Enter IFSC State City District"
                            className="bg-gray-100 p-3 border-2 border-blue-100 rounded text-xs w-full focus:outline-none focus:ring focus:ring-violet-200"
                            onClick={() => handleSearch()}
                        />
                    </div>

                    <div className="flex">
                        <button className="bg-blue-400 text-white text-xs p-1.5 rounded">
                            Dark Mode
                        </button>
                        <h1 className="text-sm ml-2 p-1"><FaCircleUser color="blue" size={25} /></h1>
                    </div>

                </div>


                <div className="bg-gray-50 list-none space-x-4 py-2 flex justify-center items center max-sm:text-sm max-sm:space-x-1">
                    <li className="text-sm px-2 max-sm:text-xs max-sm:px-1">Search BankDb : </li>
                    <Link to='search/state'>
                        <li className="bg-blue-200 rounded border border-dotted border-blue-400 px-2 hover:bg-blue-300 cursor-pointer">State</li>
                    </Link>
                    <Link to='district'>
                        <li className="bg-blue-200 rounded border border-dotted border-blue-400 px-2 hover:bg-blue-300 cursor-pointer">District</li>
                    </Link>
                    <Link to='IFSC'>
                        <li className="bg-blue-200 rounded border border-dotted border-blue-400 px-2 hover:bg-blue-300 cursor-pointer">IFSC</li>
                    </Link>
                </div>

                <input type="text"
                    placeholder="Enter IFSC State City District"
                    className="bg-gray-100 w-[80%] p-3 mt-2 rounded text-xs block mx-auto border-2 border-blue-100 rounded sm:hidden"
                    onClick={() => handleSearch()}
                />

            </div>

            <Outlet />
        </>

    )
}

export default BankLayout