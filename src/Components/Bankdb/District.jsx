import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { AllDist, StateWiseDistrictData } from './Data/Data.js'
import BankDetailsHorizontalTable from './BankDetailsHorizontalTable.jsx'
const District = () => {


  const [DistBANKdata, SetDistBANKdata] = useState()

  var temp = undefined
  const { dist } = useParams()


  let text = dist.toString();
  const DynamicStateFinder = (text) => {
    for (let key in StateWiseDistrictData) {
      if (StateWiseDistrictData.hasOwnProperty(key)) {
        for (const ele of StateWiseDistrictData[key]) {
          if (ele == dist) {

            return key;
            break;
          }
        }
      }
    }
    return console.log("District not found!");
  }


  const fetchAllBanksInDistrict = async (state, district) => {
    const citiesResponse = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/`);
    const cities = await citiesResponse.json();

    const allBanks = [];

    for (const city of cities) {
      const centersResponse = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/`);
      const centers = await centersResponse.json();

      for (const center of centers) {
        const branchesResponse = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/${center}/`);
        const branches = await branchesResponse.json();

        for (const branch of branches) {
          // Fetch additional details for each branch
          const innerResponse = await fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/${center}/${branch}`);
          const inner = await innerResponse.json();

          // Push detailed branch information to allBanks array
          allBanks.push(inner);
        }
      }
    }

    console.log(allBanks);
    SetDistBANKdata(allBanks)
    return allBanks;
  };


  useEffect(() => {

    fetchAllBanksInDistrict(DynamicStateFinder(), dist)

  }, [])


  return (
    <>
    <div className='max-sm:text-xs max-sm:space-x-2 pt-5 bg-gray-50 flex justify-center space-x-5'>
      <span>State :</span>
      <div className='font-bold text-blue-900'>{DynamicStateFinder()}</div>
      <span>District : </span>
      <div className='font-bold text-blue-900'>{dist}</div>
    </div>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center overflow-x-scroll">
        <BankDetailsHorizontalTable data={DistBANKdata} />
      </div>

    </>

  )
}

export default District