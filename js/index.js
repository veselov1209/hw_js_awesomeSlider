const leftSlider = document.querySelector('.leftSlider');
const rightSlider = document.querySelector('.rightSlider');


const buttonUp = document.querySelector('.btnUp');
const buttonDown = document.querySelector('.btnDown');


const leftSliderItem = document.querySelectorAll('.leftSliderItem');

let itemIndex = 0;

leftSlider.style.top = `${-(leftSliderItem.length-1)*100}%`;

buttonUp.addEventListener('click', topItem);
buttonDown.addEventListener('click', downItem);



function topItem() {
    itemIndex++;
    if(itemIndex > leftSliderItem.length-1){
        itemIndex = 0;
    }
    rightSlider.style.transform = `translateY(-${itemIndex*100}%)`;
    leftSlider.style.transform = `translateY(${itemIndex*100}%)`;
}

function downItem() {
    itemIndex--;
    if(itemIndex < 0){
        itemIndex = leftSliderItem.length-1;
    }
    rightSlider.style.transform = `translateY(-${itemIndex*100}%)`;
    leftSlider.style.transform = `translateY(${itemIndex*100}%)`;
}

