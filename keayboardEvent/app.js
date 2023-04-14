let inputBox = document.querySelector("#inputBox");
let text = document.querySelector(".text");

// function keyaEvent(e){
//     console.log(e.type);
// }

// inputBox.addEventListener('keyup', keyaEvent);
// inputBox.addEventListener('keydown', keyaEvent);
// inputBox.addEventListener('keypress', keyaEvent);

inputBox.addEventListener('keypress', (x)=>{
    text.innerHTML = x.key;
});