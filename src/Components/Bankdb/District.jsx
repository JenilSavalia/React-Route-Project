import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { AllDist, StateWiseDistrictData } from './Data/District.js'

const District = () => {

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
          allBanks.push({
            ...inner,      // Include all details from the inner API response
            state,         // Add the state
            district,      // Add the district
            city,          // Add the city
            center         // Add the center
          });
        }
      }
    }
  
    console.log(allBanks);
    return allBanks;
  };
  

  useEffect(() => {

    fetchAllBanksInDistrict(DynamicStateFinder(), dist)
  }, [])


  return (
    <>
      <div>State : {DynamicStateFinder()}</div>
      <div>District : {dist}</div>
    </>

  )
}

export default District