const form = document.querySelector('form') 
const colors = function (event) {
event.preventDefault();
const color = form.color.value

if (color==="red") {
    
    console.log('You picked red')

} 

else if (color==='blue') {

    console.log('You picked blue')

}

else if(color==='green') {

    console.log('You picked green')
}


else {

    console.log('Please pick a color')

}

document.body.style.backgroundColor = color;
 
}

form.addEventListener('submit', colors)
