// Code 1 
const t1 =performance.now();
for ( let i = 1; i <=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is first list  para " + i ;
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log("Total time by code 1 :" (t1-t2));



//code 2 
const t3 = performance.low();
let mydiv = document.createElement('div');
for ( let i = 1; i <= 100; i++){
    let para  = document.createElement('p');
    para.textContent = 'This is my Second list para' + i;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);

const t4 = performance.low();
console.log("Total time by code 1 :" (t3-t4));