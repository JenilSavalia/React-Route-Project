import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CategoryPage = () => {
    const { category } = useParams(); // Get category name from URL
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isClicked, SetisClicked] = useState({})

    // function handleClick(id) {

    // SetisClicked((prev)=>(
    //     {
    //         ...prev,
    //         []
    //     }
    // ))
    // }

    useEffect(() => {
        // Fetch meals by category
        const fetchMeals = async () => { 
            try {
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
                );
                const data = await response.json();
                setMeals(data.meals || []);
            } catch (error) {
                console.error("Error fetching meals:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, [category]);

    return (
        <div className="px-10 py-6">
            {loading ? (
                <div className="text-center">
                    <p className="text-xl font-semibold">Loading Meals...</p>
                    <div className="spinner mt-4 border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
                </div>
            ) : (
                <>
                    <div className="flex justify-between p-5 ">
                        <h1 className="text-4xl font-bold mb-6">
                            {category} Recipes
                        </h1>
                        <div className=" text-white ">
                            <p className="hover:bg-blue-600 bg-blue-500 p-5 flex items-center">
                                <div class=" w-5 h-5 bg-red-500 rounded-full flex justify-center items-center text-center p-4 mr-2">
                                    1
                                </div>
                                My Recipie Book
                            </p>
                        </div>
                    </div>
                    {meals.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {meals.map((meal) => (
                                <div key={meal.idMeal} className="border rounded-lg shadow hover:shadow-lg">
                                    <img
                                        src={meal.strMealThumb}
                                        alt={meal.strMeal}
                                        className="rounded-t-lg w-full h-52 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold">{meal.strMeal}</h2>
                                        <button 
                                        
                                        className={`mt-4 text-white px-4 py-2 rounded-lg
                                            ${isClicked ? "bg-blue-500" : "bg-green-500"}`
                                        }

                                            onClick={handleClick(meals.idMeal)}
                                        >

                                            Add to Recipic Book
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-xl">No meals found for this category.</p>
                    )}
                </>
            )}
        </div>
    );
};

export default CategoryPage;
