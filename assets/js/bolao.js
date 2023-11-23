var btn_down = document.querySelectorAll('.down-apost'); 
var btn_up = document.querySelectorAll('.up-apost'); 

btn_down.forEach(e=>{
    e.addEventListener('click',i =>{
        var el = i.target;
        var pai = el.parentElement;
        var num_info = pai.querySelector('.qtd-apost');
        num =parseInt(num_info.innerHTML );
        if (num != 0) {
            num_info.innerHTML = num - 1;
        }
    })
})
btn_up.forEach(e=>{
    e.addEventListener('click',i =>{
        var el = i.target;
        var pai = el.parentElement;
        var num_info = pai.querySelector('.qtd-apost');
        num =parseInt(num_info.innerHTML );
        if (num >= 0) {
            num_info.innerHTML = num + 1;
        }
    })
})

// fade geral e btn

var btn_apostar = document.querySelector("#btn-apostar");
var modal_bet = document.querySelector(".modal-bet");
var toggleBetModal = () => modal_bet.classList.toggle("hidden");
btn_apostar.addEventListener('click', ()=> {
    toggleModalFade();
    toggleBetModal();
});