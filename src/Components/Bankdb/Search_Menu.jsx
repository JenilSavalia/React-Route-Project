import React, { useEffect, useState } from 'react'
import { FaSearchDollar } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import { AllDist, StateWiseDistrictData, AllStates, AllCity } from './Data/Data.js'

const Search_Menu = ({ search, Setsearch }) => {


    // Dropdown State Management
    const [Dropdown, SetDropdown] = useState('District')

    // State for Dynamic Search Suggestions
    const [searchSuggestions, SetsearchSuggestions] = useState([])

    // Sate sets Value of Search Box
    const [searchValue, setSearchValue] = useState('')

    // sets navigation link based on dropdown menu
    const [paramlink, Setparamlink] = useState('')


    // Fires each time when Search INput Changes 
    const handleInputChange = (e) => {
        console.log(e.target.value)
        DynamicSearch(e.target.value)
        if (e.target.value == '') {
            console.log('empty')
            SetsearchSuggestions([])
        }
    }

    // Function to Filters based on search input

    const DynamicSearch = (value) => {
        let input = `${value}`.toUpperCase();

        // Filter based on the selected dropdown option
        if (Dropdown === 'State') {
            SetsearchSuggestions(AllStates.filter((element) => element.toUpperCase().startsWith(input)));
        } else if (Dropdown === 'District') {
            SetsearchSuggestions(AllDist.filter((element) => element.toUpperCase().startsWith(input)));
        } else {
            SetsearchSuggestions([]);
        }
        console.log(searchSuggestions);

    }



    // Search Button Logic for routing

    const SearchButton = () => {

        if (Dropdown === 'District') {
            window.location.href = `https://bankbd.onrender.com/bankdb/search/district/${searchValue}`;
            // Setparamlink(`/bankdb/search/district/${searchValue}`)
        }  else if (Dropdown === 'State') {
            window.location.href = `https://bankbd.onrender.com/bankdb/search/State/${searchValue}`;
            // Setparamlink(`/bankdb/search/State/${searchValue}`)
        } else if (Dropdown === 'IFSC') {
            window.location.href = `https://bankbd.onrender.com/bankdb/IFSC/${searchValue}`;
            // Setparamlink(`/bankdb/IFSC/${searchValue}`)
        }

    }


    if (!search) return null
    return (
        <>

            <div className="relative overflow-scroll bg-white w-screen h-screen">


                <div className="fixed top-0 left-0 right-0 bg-white py-6 md:px-60 rounded shadow-lg w-[100%] flex justify-center">

                    {/* <button
                        onClick={() => Setsearch(false)}
                        className=" bg-gray-200 text-white px-4 py-2 mr-5 rounded hover:bg-gray-300"
                    >
                        <IoCloseSharp color='black' />
                    </button> */}
                    <div>

                    </div>
                    <select
                        value={Dropdown}
                        onChange={(e) => SetDropdown(e.target.value)}
                        className='sm:px-3 sm:bg-blue-200   border rounded focus:outline-none focus:ring focus:ring-blue-50 font-bold text-blue-800'>
                        <option value="State">State</option>
                        <option value="District">District</option>
                        <option value="IFSC">IFSC</option>
                    </select>
                    <input
                        type="text"
                        placeholder={`Search Bankdb ${Dropdown}`}
                        className="w-[40%] p-3 border rounded focus:outline-none focus:ring focus:ring-blue-50"
                        onChange={(e) => {
                            handleInputChange(e)
                            setSearchValue(e.target.value)
                        }}
                        value={searchValue}
                        autoFocus
                    />


                    <button
                        // onClick={() => Setsearch(false)}
                        onClick={() => {
                            SearchButton()
                            setInterval(() => {
                                Setsearch(false)
                            }, 1000)
                        }

                        }
                        className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        <FaSearchDollar />
                    </button>




                    <div className="absolute top-24 text-center w-fit max-h-[500px] overflow-y-scroll scrollbar-hidden">
                        {
                            searchSuggestions.map((data, index) => (
                                <h1
                                    key={index}
                                    onClick={(e) => setSearchValue(e.target.innerText)}
                                    className="p-2 bg-gray-100 border-b border-gray-200 text-gray-800 cursor-pointer hover:bg-blue-100 rounded w-[45rem]"
                                >
                                    {data}
                                </h1>
                            ))
                        }
                    </div>

                </div>





            </div>

        </ >

    )
}

export default Search_Menu