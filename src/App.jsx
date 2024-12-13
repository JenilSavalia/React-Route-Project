import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import './App.css'
import Mealdb from './Components/Mealbd/Mealdb'
import Cocktaildb from './Components/Cocktaildb/Cocktail'
import Harrypotter from './Components/Harrypotter/Harrypotter'
import Bankdb from './Components/Bankdb/Bankdb'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<Navbar />} >
            <Route path='/' element={<Home />} />
            <Route path='/mealdb' element={<Mealdb />} />
            <Route path='/cocktaildb' element={<Cocktaildb />} />
            <Route path='/harrypotterdb' element={<Harrypotter />} />
            <Route path='/bankdb' element={<Bankdb />} />
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
