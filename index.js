
/* What is the name of the recipe? */
 let recipeName = document.getElementById("recipe-name")
console.log(recipeName.innerText) 

/* What HTML tag is used to display the Recipe name? */
console.log(recipeName)


/* What is the font size of the paragraph tag with the class "description". */
let description = document.querySelector('.description')
console.log(window.getComputedStyle(description).fontSize)

/* What is the value of the alt atrribute on the image? */
let image = document.querySelector('img')
console.log()