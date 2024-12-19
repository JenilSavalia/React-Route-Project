import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import './App.css'
import Mealdb from './Components/Mealbd/Mealdb'
import Cocktaildb from './Components/Cocktaildb/Cocktail'
import Harrypotter from './Components/Harrypotter/Harrypotter'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import CategoryPage from './Components/Mealbd/CategoryPage';
import State from './Components/Bankdb/State';
import District from './Components/Bankdb/District';
import City from './Components/Bankdb/City';
import Branchlist from './Components/Bankdb/Branchlist';
import BankDetail from './Components/Bankdb/BankDetail';
import BankLayout from './Components/Bankdb/BankLayout';
import BankHome from './Components/Bankdb/BankHome';
import IFSC from './Components/Bankdb/IFSC';
import IFSC_Detail from './Components/Bankdb/IFSC_Detail';

function App() {


  return (
    <>
      <Router>
        <Routes>
          {/* Navbar is parent Component and inside we have outlet to accept all child components */}
          <Route element={<Navbar />} >
            <Route path='/' element={<Home />} />
            <Route path='/mealdb'  >
              <Route index element={<Mealdb />} />
              <Route path=':category' element={<CategoryPage />} />
            </Route>
            <Route path='/cocktaildb' element={<Cocktaildb />} />
            <Route path='/harrypotterdb' element={<Harrypotter />} />


            <Route path='/bankdb' element={<BankLayout />}>
              <Route index element={<BankHome />} />

              <Route path='IFSC' element={<IFSC />} >
                <Route path=':code' element={<IFSC_Detail />} />
              </Route>


              <Route path='search'>
                <Route path='district'>
                  <Route path=':dist' element={<District />} />
                </Route>

              </Route>

            </Route>


          </Route>
        </Routes>
      </Router >
    </>
  )
}

export default App
