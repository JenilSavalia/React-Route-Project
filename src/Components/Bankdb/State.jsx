import React, { useEffect, useState } from "react";
import { AllStates } from './Data/Data.js'
import { Link, Links } from "react-router-dom";

const State = () => {

  const [searchValue, SetsearchValue] = useState('')

  const [stateData, SetstateData] = useState(AllStates)


  const DynamicSearch = (value) => {
    if (value === '') {
      SetstateData(AllStates)
    }
    console.log(value)
    let input = `${value}`.toUpperCase();
    SetstateData(AllStates.filter((element) => element.startsWith(input)))
  }

  return (

    <div>
      {/* <h1>dtststds</h1> */}
      <input type="text"
        placeholder="Search State"
        className="bg-gray-100 w-[40%] p-3 mt-2 rounded text-xs block mx-auto border-2 border-blue-100 focus:outline-none focus:ring focus:ring-violet-200"
        value={searchValue}
        onChange={(e) => {
          const value = e.target.value;
          SetsearchValue(value)
          DynamicSearch(value)
        }}
      />

      <div className="bg-gray-50 w-[80%] block p-5 mx-auto mt-8 flex flex-wrap justify-center space-x-5">

        {
          stateData.map((data) => (
            <Link to={`/bankdb/district/${data}`}>
              <div 
              onClick={(e)=> SetsearchValue(e.target.innerText)}
              key={data} className="max-sm:text-sm w-fit bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 my-2 cursor-pointer">{data}</div>
            </Link>
          ))
        }

      </div>
    </div>

  )

};

export default State;
