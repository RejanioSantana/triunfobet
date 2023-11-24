// funções responsavel pelos dados do formulario.
function carregarDados(){
    var frmCasa = document.getElementById('frm-casa');
    var frmFora = document.getElementById('frm-fora');
    var placarCasa = document.getElementById('num-casa');
    var placarFora = document.getElementById('num-fora');
    var frmPlacar = document.getElementById('frm-placar');
    frmCasa.value = placarCasa.textContent ;
    frmFora.value = placarFora.textContent ;
    frmPlacar.innerHTML = frmCasa.value +" - "+frmFora.value;
    document.querySelector('.qtd-modal-bet').innerHTML = 1;
}
function carregarValores(){
    var vlrFormBolao = document.getElementById('frm-vlr-bolao').value;
    var TotModal = document.getElementById('total-modal-bet');
    TotModal.innerHTML = "R$ "+ parseInt(vlrFormBolao) * parseInt(
        document.querySelector('.qtd-modal-bet').textContent);
}
// *************************************************

var btn_down = document.querySelectorAll('.down-apost'); 
var btn_up = document.querySelectorAll('.up-apost'); 
btn_down.forEach(e=>
    e.addEventListener('click',i =>{
        var el = i.target;
        var pai = el.parentElement;
        var num_info = pai.querySelector('.qtd-apost');
        num =parseInt(num_info.innerHTML );
        if (num != 0) {num_info.innerHTML = num - 1;}
    }));
btn_up.forEach(e => e.addEventListener('click',i =>{
        var el = i.target;
        var pai = el.parentElement;
        var num_info = pai.querySelector('.qtd-apost');
        num =parseInt(num_info.innerHTML );
        if (num >= 0) {num_info.innerHTML = num + 1;}
    }));
// fade geral e btn
var btn_apostar = document.querySelector("#btn-apostar");
var modal_bet = document.querySelector(".modal-bet");
var fade_bet = document.querySelector(".fade-bolao");
var toggleBetModal = () => modal_bet.classList.toggle("hidden");
var toggleFadeBet = () => fade_bet.classList.toggle("hidden");
[btn_apostar,fade_bet].forEach(e => e.addEventListener('click',()=> {
        toggleFadeBet();
        toggleBetModal();
        carregarDados();
        carregarValores();
    }));
// tratando info modal-bet

var btnUpModal = document.querySelector('.up-modal-bet');
var infQtdModal = document.querySelector('.qtd-modal-bet');
var btnDownModal = document.querySelector('.down-modal-bet');
btnDownModal.addEventListener('click',() =>{
        num =parseInt(infQtdModal.innerHTML);
        if (num != 1) {infQtdModal.innerHTML = num - 1;carregarValores();}
    });
btnUpModal.addEventListener('click',() =>{
        num =parseInt(infQtdModal.innerHTML);
        if (num >= 0) {infQtdModal.innerHTML = num + 1;carregarValores();}
    });

