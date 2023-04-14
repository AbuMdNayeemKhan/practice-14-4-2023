// document.addEventListener("DOMContentLoaded", (x) => {
//     alert ("Dom is full loaded.");
// });

// addEventListener("load", ()=>{
//     alert ("I'm load function.");
// });

addEventListener("beforeunload", (para)=>{
    para.preventDefault();
    para.returnValue = '';
});