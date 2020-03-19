// In childModule1.js

let myFunction = function(img){
    let image = document.createElement('img')
    image.src = img;
    document.body.appendChild(image)
}; 
// assign something useful to myFunction
let myVariable = 'chMOne Variable'; // assign something useful to myVariable
export {myFunction, myVariable};