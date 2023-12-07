    const food_pic = document.querySelector('.pic')
    const search = document.querySelector('.search-bar')
    const ingredients = document.querySelector('#ing-btn')
    const searched_name = document.querySelector('.value')
    const rtarrow = document.querySelector('.rtarrow')
let foodName = '';

document.addEventListener('keyup', () => {
  foodName = search.value;
  console.log(foodName)
  fetch_api(foodName);
});

function fetch_api(foodName) {
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodName}`    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            fetch_data(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
}
console.log(foodName)

food_count = 1;
image_count = 1;
function fetch_data(data){
    const name = data.meals[`${food_count}`].strMeal
    food_count+=1
    food_pic.src = data.meals[`${image_count}`].strMealThumb
    image_count+=1
    searched_name.textContent = name;
    // const ingredients = data.
}

rtarrow.onclick=()=>{
    fetch_api(foodName)
}

const popup = document.querySelector(".container")

const url1 = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
function fetch_ingredients(foodName){
    fetch(url1)
    .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // fetch_data(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
}
fetch_ingredients()

function fetch_ingre(data){
    const ingredient = data.meals.strIngredient
    popup.textContent = ingredient
}