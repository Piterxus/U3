let number = 0;
let parrafo = document.getElementsByTagName('p');


function incrementar() {
    parrafo[0].innerHTML = number;
    return number++;

}

function reset1() {
    number = 0;
    parrafo[0].innerHTML = number;

}



export {
    incrementar,
    reset1
}


