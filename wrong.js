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