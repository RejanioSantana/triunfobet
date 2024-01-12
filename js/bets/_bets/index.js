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

var drop_down = document.querySelectorAll('.bets');
drop_down.forEach(e => e.addEventListener('click', e => e.stopPropagation())) 

var market_odds = document.querySelectorAll('.oddsBetName');
market_odds.forEach( e => e.addEventListener('click',
 e =>{
    var cls = e.target;
    cls.classList.toggle('marketOdd')
    }))