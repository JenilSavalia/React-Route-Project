import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";


const IFSC = () => {

  const [IFSCdata, SetIFSCdata] = useState(null)

  // const [buttonState, SetbuttonState] = useState(false)

  const [IFSC_Input, SetIFSC_Input] = useState("")

  const [allDistrict, SetallDistrict] = useState([])

  const fetchIFSC = async () => {
    const responce = await fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${IFSC_Input}`);
    const data = await responce.json();
    SetIFSCdata(data)
    console.log(data)
  }


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


  const getListofPossibleDistricts = async () => {

    const states = await fetch('https://bank-apis.justinclicks.com/API/V1/STATE');
    const response = await states.json();

    const Alldistrict = []
    for (const state of response) {
      const districtResponse = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}`);
      const district = await districtResponse.json();

      Alldistrict.push(district)

    }
    // console.log(Alldistrict)
    SetallDistrict(Alldistrict)
    console.log(AllDist)
  }
  // getListofPossibleDistricts()


  return (
    <>
      <div>IFSC</div>
      <input
        className='bg-blue-200 p-2'
        placeholder='Enter IFSE'
        type="text"
        value={IFSC_Input}
        onChange={(e) => SetIFSC_Input(e.target.value)} />
      <button
        className='bg-gray-300 p-3'
        onClick={() => getListofPossibleDistricts()}
      >
        Give Details
      </button>
      <Outlet />
    </>
  )
}

export default IFSC