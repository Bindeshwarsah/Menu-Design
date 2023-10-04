const selectText=document.getElementById("selectText");
const selectField=document.querySelector(".firstCard");
const Arrow=document.getElementById("arrow");
const Options=document.getElementsByClassName("options");
const MediaIcon=document.getElementById("listItems");



// selectField.onclick=function(){
//     MediaIcon.classList.toggle("hide");
//     Arrow.classList.toggle("rotate");
// }

// for(option of Options){
//     option.onclick=function(){
//         selectText.innerHTML = this.textContent;
//         MediaIcon.classList.toggle("hide");
//         Arrow.classList.toggle("rotate");
//     }
// }





selectField.addEventListener('click', ()=>{
    MediaIcon.classList.toggle("hide");
    Arrow.classList.toggle("rotate");

});

for(option of Options){
    option.addEventListener('click', (event)=>{
        selectText.innerHTML = event.target.textContent;
        MediaIcon.classList.toggle("hide");
        Arrow.classList.toggle("rotate");

    });
}