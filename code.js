const recipes = document.querySelectorAll(".recipe-tile")

for (recipe of recipes){
    recipe.addEventListener("click", (event)=>{
        console.log(event);
        window.open(event.currentTarget.dataset.link);
    })
}