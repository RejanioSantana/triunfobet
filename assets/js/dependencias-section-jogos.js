// Dps alterar para querySelectorAll.
var btn_sction_bolao = document.querySelector('.btn-area-bolao');
btn_sction_bolao.addEventListener('click',
() =>fetchSectionBolao(btn_sction_bolao));

async function fetchSectionBolao(el){
    try{
        const href = el.getAttribute('href');
        const request = await  fetch(href);
        if(request.status !== 200) throw new Error('ERRO 404 meu');
        const html = await request.text();
        carregarAreaBolao(html);

    } catch(e){ console.log(e);}

}
function carregarAreaBolao(response){

    // Original
    const mainCentral = document.querySelector("#main-central");
    // console.log(response);
    mainCentral.innerHTML = response;

// ****************************
    let script = document.querySelector(
        'script[src="assets/js/dependencias-section-jogos.js"]');

    // Verifique se o elemento existe antes de tentar removê-lo
    if(script){
        let parentElement = script.parentNode;
        // Remova o elemento <script> do pai
        parentElement.removeChild(script);
    }

    script = document.createElement('script');
    script.src = 'assets/js/bolao.js';
    script.async = true;
    document.body.appendChild(script);

}
