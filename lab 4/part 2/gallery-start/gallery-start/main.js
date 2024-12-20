const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const alter = ["eye close up", "weird wave picture",  "flowers", "Egyptian gods", "butterfly"];
/* Looping through images */

for (let i = 0; i < images.length; i++)
{
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${images[i]}`);
  newImage.setAttribute('alt', alter[i]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', event => {
    displayedImage.setAttribute('src', `images/${images[i]}`); 
    displayedImage.setAttribute('alt', alter[i]);
  });
}

/* Wiring up the Darken/Lighten button */
function overlayChange(){

if(btn.getAttribute("class") == "dark"){
btn.setAttribute("class", "light");
btn.textContent = "Lighten";
overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
}
else
{
btn.setAttribute("class", "dark");
btn.textContent = "Darken";
overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
}
}

btn.addEventListener("click", overlayChange)
