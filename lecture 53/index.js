// function changeText(event){
//     console.log(event);
//     let fpara = document.getElementById('fpara');
//     fpara.textContent ="pritam kumar"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click',changeText);

// fpara.removeEventListener('click',changeText);

function anchorAction(event){
    event.preventDefault();
    let anchorElement = document.getElementById('fanchor');
    
    anchorElement.textContent ="Click done Bade Bhaiya"
}

let anchorElement = document.getElementById('fanchor');
anchorElement.addEventListener('click' ,anchorAction);