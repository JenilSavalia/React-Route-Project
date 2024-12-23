import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";


function Navbar() {

    return (

        <>
             {/* <div className='text-[1.8rem] bg-red-500 flex list-none'>
                <Link to='/mealdb' className="pr-10">mealdb</Link>
                <Link to='/cocktaildb' className="pr-10">cocktailbd</Link>
                <Link to='/harrypotterdb' className="pr-10">harrypotter</Link>
                <Link to='/bankdb' className="pr-10">bankdb</Link>
                <Link to='/' className="pr-10">About us</Link>
            </div>  */}
            <Outlet />
        </>

    )
}

export default Navbar
