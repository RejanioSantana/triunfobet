var form = document.getElementById('formContact')
form.addEventListener('submit',e =>{
    e.preventDefault();
    carregarSection(e.target.action)

})

async function carregarSection(el){
    try{
        const request = await  fetch(el);
        if(request.status !== 200) throw new Error('ERRO 404 meu');
        const html = await request.text();
        carregarResultado(html);
    } catch(e){ console.log(e);}
}
function carregarResultado(response){
    const mainCentral = document.querySelector("#mainCenter");
    mainCentral.innerHTML = 'response'; 
}

