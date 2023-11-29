var btnInfoBet = document.querySelectorAll('.btn-info-bet');
var fadeMyBets = document.querySelector('.fade-my-bets');
var modalMyBets = document.querySelector('.modal-my-bets');
var btnCloseModal = document.getElementById('btn-header-close');

var toggleFadeMyBets =()=>[fadeMyBets,modalMyBets].forEach(
    e => e.classList.toggle("hidden"));

btnInfoBet.forEach(e => e.addEventListener('click', () => {
    toggleFadeMyBets();
    e.target;
    carregarInfoMyBet(e);
}));
fadeMyBets.addEventListener('click', ()=> toggleFadeMyBets());
btnCloseModal.addEventListener('click', ()=> toggleFadeMyBets());

async function carregarInfoMyBet(el){
    try{
        const href = el.getAttribute('href');
        const request = await  fetch(href);
        if(request.status !== 200) throw new Error('ERRO 404 meu');
        const html = await request.text();
        infoMyBet(html);
    } catch(e){ console.log(e);}
}
function infoMyBet(response){
    const mainCentral = document.getElementById("main-modal-info");
    mainCentral.innerHTML = response; 
}