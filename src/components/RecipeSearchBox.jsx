import React, { useEffect, useState, useRef } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const RecipeSearchBox = () => {

    const[search, setSearch] = useState("");
    const[Myfood, setFood] = useState([{
        'label': 'No Food Found',
    }]);
    const timerRef = useRef(null);
    const searchFood = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                if(!Array.isArray(data.meals)) {
                    setFood(
                        [{
                            'label': 'No Food Found',
                        }]
                    );
                } else {
                    setFood(data.meals)   
                }
            })
    }

    const handleSearch = (searchString) => {
        setSearch(searchString);
        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            searchFood();
        }, 1000);
        
    }


    useEffect(() => {
        searchFood();
    }, [])

    useEffect(() => {
        console.log(JSON.stringify(Myfood, null, 2));
    }, [Myfood]);

    // const recipeList = [
        // {
            // label: 'Recipe1',
            // type: 'Indian',
        // },
        // {
            // label: 'Recipe2',
            // type: 'Pakisthani',
        // }
    // ]

    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={
                    Myfood?.map((food) => {
                        return{
                            label: food?.strMeal ? food?.strMeal : "Not Fount",
                        }
                    })
                }
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Recipe" onChange={(e) => {
                    handleSearch(e.target.value);
                }} />}
            />
        </div>
    )
}

export default RecipeSearchBox
