// Select the boxes from the html document
const boxes = document.querySelectorAll('.box');
/* Add event listener for scroll and then run function */
window.addEventListener('scroll', checkBoxes);
/* Run the function */
checkBoxes();
/* Create the function depending on screen size */
function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
/* Add and remove class to display the boxes */
        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}