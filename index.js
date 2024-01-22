
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
console.log(image.getAttribute('alt'))

/* What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
{
  url: string
  height: number,
  width: number,
} */

let imageObject = {
    url: image.getAttribute('src'),
    height: image.height,
    width: image.width
}

for (let item in imageObject) {
    console.log(item + ":" + imageObject[item])
}
/* 
How many ingredients has the paste? */

let ingredients = document.querySelector('.ingredients-list-paste')
console.log(ingredients.children.length)

/* Which is the forth element in the list containing the 
ingredients for the paste? */

console.log(ingredients.children[3].innerText)

/* Create an an array of objects from the instructions. 
Each element in the array should be an object that looks like this:
{
  order: number;
  text: instruction;
} */

let instructions = document.querySelector('.instructions-list')
let instructionsArray = []

for (let i = 0; i < 10; i++) {
    instructionsArray[i] = {order: i+1, text: instructions.children[i].innerText}    
}

console.log('*********************')

for (const item in instructionsArray) {
    console.log(instructionsArray[item])
}