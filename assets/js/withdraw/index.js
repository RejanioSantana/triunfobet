document.addEventListener('click',e =>{
     e.preventDefault()
    if( e.target.tagName == "A"){
       var href =  e.target.getAttribute('href')
       window.location.href = href

    }
    });
var btnForm = document.getElementById('btn');
var btnHist = document.getElementById('withdrawalHistory');
var fade = document.getElementById('fadeInfoSaque');
var modal = document.getElementById('modalInfoSaque');
var btnCloseModal = document.getElementById('btn-closeModal');

var funToggle = () => [fade,modal].forEach(e => e.classList.toggle('hidden'))


btnForm.addEventListener("click",()=>{
    console.log("click")
})
btnHist.addEventListener("click", () => funToggle());
[fade,btnCloseModal].forEach(e => e.addEventListener("click", ()=> funToggle()))