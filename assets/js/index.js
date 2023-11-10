document.addEventListener('click',e =>{
    e.preventDefault();
});
const btn_login_header = document.querySelector(".login-header");
const fade = document.querySelector(".fade");
const fade_menu = document.querySelector(".fade-menu");
const modal_login = document.querySelector(".modal-login");
const btn_menu_modal = document.querySelector(".btn-menu-modal");
const modal_menu = document.querySelector(".modal-menu");

const toggleModalFade = () => fade.classList.toggle("hidden");
const toggleModalFadeMenu = () => fade.classList.toggle("hidden");
const toggleModalLogin = () =>modal_login.classList.toggle("hidden");
const toggleModalMenu = () => modal_menu.classList.toggle("hidden");

btn_login_header.addEventListener("click",()=> {
    toggleModalLogin();
    toggleModalFade()});
btn_menu_modal.addEventListener("click",() => {
    toggleModalMenu();
    toggleModalFadeMenu()});

const btn_section_jg = document.querySelector(".btn-section-jogos");
const btn_section_apostas = document.querySelector(".btn-section-apostas");

const toggleSection = () =>{
    btn_section_jg.classList.toggle("action");
    btn_section_apostas.classList.toggle("action");
}

// carregando section e dependencias automaticamente
if(btn_section_jg.classList.contains("action")){
    addDependenciasSectionJogos(btn_section_jg);
}

// event click section principal.
[btn_section_apostas,btn_section_jg].forEach( (e)=>{
    e.addEventListener("click",()=>{
        e.target;
        if(e.classList.contains('btn-section-jogos')){
            addDependenciasSectionJogos(e)
            if(e.classList.contains("action")){
                return
            }
            toggleSection();
        }
    });
});

async function addDependenciasSectionJogos(e){
    await carregarSectionJogos(e);
}
function reniciandoDependencias(){
    var scripts = document.getElementsByTagName('script');
    scripts.forEach(e =>{
        console.log(e)
    })
}
// Ajax
async function carregarSectionJogos(el){
    try{
        const href = el.getAttribute('href');
        const request = await  fetch(href);
        if(request.status !== 200) throw new Error('ERRO 404 meu');
        const html = await request.text();
        carregarResultado(html);
    } catch(e){ console.log(e);}
}
function carregarResultado(response){
    const mainCentral = document.querySelector("#main-central");
    mainCentral.innerHTML = response;
    reniciandoDependencias();
    let script = document.querySelector(
    'script[src="assets/js/dependencias-section-jogos.js"]');
    if(script){
        let parentElement = script.parentNode;
        // Remova o elemento <script> do pai
        parentElement.removeChild(script);
    }

    script = document.createElement('script');
    script.src = 'assets/js/dependencias-section-jogos.js';
    script.async = true;
    document.body.appendChild(script);
}
// Function deletar scripts desnecessarios!
function reniciandoDependencias(){
    var scripts = document.querySelectorAll('script[src="assets/js/bolao.js"]');
    scripts.forEach(e =>{
        let parentElement = e.parentNode;
        // Remova o elemento <script> do pai
        parentElement.removeChild(e);
    })
}