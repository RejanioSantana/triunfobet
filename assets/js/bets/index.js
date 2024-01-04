// Dps alterar para querySelectorAll.
var btn_sction_bolao = document.querySelector('.btn-area-bolao');
btn_sction_bolao.addEventListener('click',
() =>sectionBolao(btn_sction_bolao));
async function sectionBolao(e){
    await carregarSection(e);
    reniciandoDependencias();
    script = document.createElement('script');
    script.src = 'assets/js/bets/_bets/index.js';
    script.async = true;
    document.body.appendChild(script);
}
