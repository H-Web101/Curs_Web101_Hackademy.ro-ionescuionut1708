const iconMoon = document.querySelector('.night');
const iconSun = document.querySelector('.day');

const body = document.body;

/**
 * Initial states of the icons
 */
iconMoon.style.display = 'block';
iconSun.style.display = 'none';

const btnMode = document.querySelector('.btn');
btnMode.addEventListener('click', () => {
    /**
     * TODO - Add/Remove the 'active' class depending on
     *        the Day/Night Mode
     * 
     *   -> the 'active' class is used to change the background
     *      when switching to Day Mode (see body.active in .css)
     * 
     * ++ - try using only one command
     */


    /**
     * TODO - Create a function to change the text
     *        and call it (e.g. from 'Night Mode' to 'Day Mode')
     * 
     *   - you can pass any parameters to the function
     */


    /**
     * TODO - Create a function to switch the icon
     * 
     * > Hint - which attribute can you change?
     */
    document.body.style.backgroundColor = "#eeee";
    document.getElementsByClassName("btn").style.backgroundColor = "#eeee";

    /* Nu am apucat să termin P2 ! */
});