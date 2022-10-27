import "./styles.css";

let number = 0;
let parrafo = document.getElementsByTagName('p');


function incrementar() {
    parrafo[0].innerHTML = "fr";
    
    return number++;
}

function reset() {
    return number = 0;
}



// console.log(incrementar())
// console.log(incrementar())
// console.log(incrementar())
// console.log(number)
// reset();
// console.log(number)

export {
    incrementar,
    reset
}