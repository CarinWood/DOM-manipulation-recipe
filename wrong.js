/* The logo text of the site has the wrong color. 
Change it to the correct one. */

let text = document.querySelector('.logo-text')
text.style.color = 'black'

/* The alignment of the elements inside the header element are wrong. 
Change it to the correct one. 
Hint, check the flex properties for the correct alignment. */

let header = document.querySelector('header');
header.style.justifyContent = 'flex-start'

/* The header has a border at the bottom, but it has the wrong color. 
Change it do the correct one. */

header.style.borderBottom = "1px solid lightgray"

/* The recipe name is wrong, change it to the correct one. */

let cakeName = document.querySelector('#recipe-name')
cakeName.innerHTML = 'Frozen Cheescake'

/* The clock icon beneath the recipe name has disappeared and been replaced by a text instead. 
This can be fixed by adding a class to that element. */

let timeSpan = document.querySelector('.time-container span')
timeSpan.classList.add('material-icons')

/* The estimated time of the recipe is also incorrect. 
Change it to the correct time estimation. */

let timeText = document.querySelector('.time')
timeText.innerHTML = '60+ min'

/* The src path to the image is wrong, or atleast it's showing the wrong image. 
Change it to the correct one.  */

let image = document.querySelector('img')
console.log(image.getAttribute('src'))
image.src = "assets/frozen-cheesecake-slice.jpg"

/* The background color of the ingredients list container is wrong. 
Fix it. */

let container = document.querySelector(".ingredients-container")
container.style.backgroundColor = "#f9f9f9"

/* The ingredients are divided in to two parts, 
one for the bottom and one for the paste. 
In the list of the ingredients to the bottom, 
there is a text instead of two list items. 
Remove the text and add those two list items. */

let listBottom = document.querySelector('.ingredients-list-bottom')
let pTag = listBottom.querySelector('p')
listBottom.removeChild(pTag)

let itemOne = document.createElement('li')
itemOne.innerHTML = '15st digistivekex'

let itemTwo = document.createElement('li')
itemTwo.innerHTML = 'Lite smör'

listBottom.appendChild(itemOne)
listBottom.appendChild(itemTwo)

/* The third ingredient in the list of ingredients to the paste is wrong. 
Change that specific ingredient to the correct one. */

let ingredients = document.querySelector('.ingredients-list-paste')
ingredients.children[2].innerHTML = '3tsk vaniljsocker'

/* There is also a missing ingredient in the list of ingredients to the paste. 
Look and see what it is and add that one the the end of the list. */

let missingIngredient = document.createElement('li')
missingIngredient.innerHTML = '400g naturell philadelphiaost'
ingredients.appendChild(missingIngredient)

/* The text "Instructions" to the left, beneath the image, 
has some shadow styling applied to it. Remove that styling. */

let instructionsHeading = document.querySelector('.shadow')
instructionsHeading.style.boxShadow = 'none'

/* Two list elements of the list of instructions are incorrect. 
Find them and change them to the correct ones. */

let listParent = document.querySelector('.instructions-list')
listParent.children[1].innerHTML = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.'
listParent.children[8].innerHTML = 'Ställ in i frysen över natten.'