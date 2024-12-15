import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";


const MealdbHome = () => {


    const [loading, Setloading] = useState(true)
    const [category, Setcategory] = useState([])

    const fetch_Mealdb = async () => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await response.json();

            const CategoryData = data.categories.map((e) => (
                {
                    id: e.idCategory,
                    category: e.strCategory,
                    categoryThumb: e.strCategoryThumb,
                    categoryDescription: e.strCategoryDescription
                }
            ))

            console.log(CategoryData)
            Setcategory(CategoryData)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetch_Mealdb();
        setTimeout(() => {
            Setloading(false)
        }, 2000);
    }, [])


    return (
        <>
            {
                loading ? (
                    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-700 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="px-36">

                        <h1 className="text-4xl font-semibold my-6">Explore Top Meal Categories</h1>


                        <div className="grid grid-cols-1 sm:gird-cols-2 lg:grid-cols-4 gap-4 ">

                            {category.map((e) => (
                                <Link to={`/mealdb/${e.category}`} key={e.id}>
                                    <div key={e.id}>
                                        <div className="bg-blue-100 ease-in duration-300 rounded-t-lg hover:bg-opacity-45 shadow-2xl ">
                                            <img
                                                src={e.categoryThumb} alt=""
                                                className="p-8" />
                                        </div>
                                        <p className="text-2 p-1 w-full bg-blue-300 shadow-2xl rounded-b-lg text-left pl-3 font-sans text-white">{e.category}</p>
                                    </div>
                                </Link>

                            ))}
                        </div>
                    </div>
                )
            }
        </>
    )

}

export default MealdbHome;