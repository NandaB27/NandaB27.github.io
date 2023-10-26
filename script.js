/*CONTAINERS*/

const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3');
const container4 = document.getElementById('container4');
const container5 = document.getElementById('container5');
const container6 = document.getElementById('container6');
const container7 = document.getElementById('container7');
const container8 = document.getElementById('container8');
const container9= document.getElementById('container9');
const container10 = document.getElementById('container10');

/*POP-UPS*/

const popup = document.getElementById('popup');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');
const popup4 = document.getElementById('popup4');
const popup5 = document.getElementById('popup5');
const popup6 = document.getElementById('popup6');
const popup7 = document.getElementById('popup7');
const popup8 = document.getElementById('popup8');
const popup9 = document.getElementById('popup9');
const popup10 = document.getElementById('popup10');

/*CLOSE BUTTONS*/

const closeButton = document.getElementById('closeButton');
const closeButton2 = document.getElementById('closeButton2');
const closeButton3 = document.getElementById('closeButton3');
const closeButton4 = document.getElementById('closeButton4');
const closeButton5 = document.getElementById('closeButton5');
const closeButton6 = document.getElementById('closeButton6');
const closeButton7 = document.getElementById('closeButton7');
const closeButton8 = document.getElementById('closeButton8');
const closeButton9 = document.getElementById('closeButton9');
const closeButton10 = document.getElementById('closeButton10');

/*EVENT LISTENERS CONTAINER*/

container1.addEventListener('click', () => {
    popup.style.display = 'block';
});

container2.addEventListener('click', () => {
    popup2.style.display = 'block';
});

container3.addEventListener('click', () => {
    popup3.style.display = 'block';
});

container4.addEventListener('click', () => {
    popup4.style.display = 'block';
});

container5.addEventListener('click', () => {
    popup5.style.display = 'block';
});

container6.addEventListener('click', () => {
    popup6.style.display = 'block';
});

container7.addEventListener('click', () => {
    popup7.style.display = 'block';
});

container8.addEventListener('click', () => {
    popup8.style.display = 'block';
});

container9.addEventListener('click', () => {
    popup9.style.display = 'block';
});

container10.addEventListener('click', () => {
    popup10.style.display = 'block';
});

/*EVENT LISTENERS CLOSE BUTTONS*/

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

closeButton2.addEventListener('click', () => {
    popup2.style.display = 'none';
});

closeButton3.addEventListener('click', () => {
    popup3.style.display = 'none';
});

closeButton4.addEventListener('click', () => {
    popup4.style.display = 'none';
});

closeButton5.addEventListener('click', () => {
    popup5.style.display = 'none';
});

closeButton6.addEventListener('click', () => {
    popup6.style.display = 'none';
});

closeButton7.addEventListener('click', () => {
    popup7.style.display = 'none';
});

closeButton8.addEventListener('click', () => {
    popup8.style.display = 'none';
});

closeButton9.addEventListener('click', () => {
    popup9.style.display = 'none';
});

closeButton10.addEventListener('click', () => {
    popup10.style.display = 'none';
});

// Close the popup if the user clicks outside of it
document.addEventListener('click', (event) => {
    if (event.target !== container1 && event.target !== container2) {
        popup.style.display = 'none';
    }
});

// Prevent clicks inside the popup from closing it
popup.addEventListener('click', (event) => {
    event.stopPropagation();
});
