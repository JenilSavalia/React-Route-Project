import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import './App.css'
import Mealdb from './Components/Mealbd/Mealdb'
import Cocktaildb from './Components/Cocktaildb/Cocktail'
import Harrypotter from './Components/Harrypotter/Harrypotter'
import Bankdb from './Components/Bankdb/Bankdb'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import CategoryPage from './Components/Mealbd/CategoryPage';

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
            <Route path='/bankdb' element={<Bankdb />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
