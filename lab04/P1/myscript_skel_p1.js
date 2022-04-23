/**
 * TODO - Add an alert to be displayed
 *        when the page is _loaded_
 * 
 * > Hint - EventListener()
 */
function myFunction() {
    window.alert("Pagina a fost încărcată complet !");
}

/**
 * TODO - Replace the text of the <h1 /> header
 * 
 * > Hint - use the _id_ associated with it
 */
let head = document.getElementById("header_1");
head.innerHTML = `<h1 id="header_1"">Am înlocuit textul</h1>`;

/**
 * TODO - Display a message when the button with the id = "btn"
 *        is clicked
 *  - you can either display it as an alert, or as a text in the page
 */
function buton() {
    window.alert("Ai apăsat butonul !");
}

/**
 * Don't change
 */

let curr = ``;
let ids = [];

for (let i = 0; i < 10; i++) {
    let aux = "d_" + i;
    ids.push(aux);

    curr += `<div class="ex2" id = ${ids[i]}> </div>`;
}

// use console.log() to check the content of ids
console.log(ids);

document.getElementById('res').innerHTML = curr;

for (let i = 0; i < 10; i++) {
    randColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById(ids[i]).style.backgroundColor = "#" + randColor;
}

/**
 * TODO - For each element having the id "d_<even_number>"
 *        remove the "ex2" class and replace it with "ex" class
 * 
 *      - Also, for each of these elements, add some text
 * > Hint - classList()
 */
document.getElementById("header_1").classList.remove('ex2');
document.getElementById("header_1").classList.add('ex');
document.getElementById("header_1").textContent += ". Acest text a fost adăugat acum !";
/**
 * TODO - For each element having the class "ex2"
 *        add a border
 * 
 * > Hint - getElementsByClassName()
 */
document.getElementByClassName("ex2").style.border = "thick solid #0000FF";