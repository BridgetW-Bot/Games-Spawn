document.getElementByClass('Pre-Button').onclick = function(){
    const widthItem = document.querySelector('.FR-Card').offsetWidth;
    document.getElementByClass('FR-Container').scrollleft += widthItem;
}
document.getElementByClass('Next-Button').onclick = function(){
    const widthItem = document.querySelector('.FR-Card').offsetWidth;
    document.getElementByClass('FR-Container').scrollleft -= widthItem;    
}


const selector = document.querySelector('.Sorting');

selector.addEventListener('change', e =>{
    console.log('change')
})