import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";


const IFSC = () => {


  // const [buttonState, SetbuttonState] = useState(false)

  const [IFSC_Input, SetIFSC_Input] = useState("")

  // const [allDistrict, SetallDistrict] = useState([])



  // const fetchAllBanksInDistrict = async () => {
  //   // const citiesResponse = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/`);
  //   const cities = await citiesResponse.json();

  //   const allBanks = [];

  //   for (const city of cities) {
  //     const centersResponse = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/`);
  //     const centers = await centersResponse.json();

  //     for (const center of centers) {
  //       const branchesResponse = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/${center}/`);
  //       const branches = await branchesResponse.json();

  //       branches.forEach(branch => {
  //         allBanks.push({ state, district, city, cexh });
  //       });
  //     }
  //   }

  //   console.log(allBanks);
  //   return allBanks;
  // }

  // fetchAllBanksInDistrict('TELANGANA', 'WARANGAL')


  // const getListofPossibleDistricts = async () => {

  //   const states = await fetch('https://bank-apis.justinclicks.com/API/V1/STATE');
  //   const response = await states.json();

  //   const Alldistrict = []
  //   for (const state of response) {
  //     const districtResponse = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}`);
  //     const district = await districtResponse.json();

  //     Alldistrict.push(district)

  //   }
  //   // console.log(Alldistrict)
  //   SetallDistrict(Alldistrict)
  //   console.log(AllDist)
  // }
  // getListofPossibleDistricts()


  return (
    <>
      <div className='flex justify-center align-center mt-16 h-screen overflow-y-hidden'>
        <div className='w-full bg-gray-50 h-full text-center p-5 rounded'>

          <div className='font-bold text-blue-900'>Get Bank Details By IFSC</div>

          <input
            className='bg-blue-50 p-2 mt-5 w-full sm:w-[50%] xl:w-[30%] border-2 text-blue-500 font-bold border-blue-300 rounded text-sm w-full focus:outline-none focus:ring focus:ring-violet-200'
            placeholder='Enter IFSE'
            type="text"
            value={IFSC_Input}
            onChange={(e) => SetIFSC_Input(e.target.value)} />
          <div>

            <Link to={`/bankdb/IFSC/${IFSC_Input}`}>
              <button
                className='bg-blue-600 p-3 text-white rounded hover:bg-blue-700 mt-5 w-full sm:w-[50%] xl:w-[30%]'
              >
                Search Bankdb
              </button>
            </Link>


            <Link to='/bankdb'>
              <h1 className='text-5xl font-bold text-blue-700 mt-20 bg-blue-50 p-8 rounded'>
                <span className="bg-blue-200 rounded-full text-md mr-2 ">🏦</span>
                BankDd</h1>
            </Link>
          </div>
          <Outlet />
        </div>
      </div>


    </>
  )
}

export default IFSC