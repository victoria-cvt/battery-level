let  qntd = document.querySelector(".qntd");
let  porcentagem = document.querySelector(".porcentagem");

navigator.getBattery().then(function(battery){
qntd.style.width = battery.level * 100 + "%";
porcentagem.innerHTML = battery.level * 100 + "%";
})

let sec = document.querySelector(".sec");
let toggle = document.querySelector('.toggle')

toggle.onclick = function(){
    sec.classList.toggle('dark')
}
   