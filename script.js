let text = document.getElementById('text1');
let barbie = document.getElementById('w-right');

window.addEventListener('scroll', ()=> {
    let value = window.scrollY;
    text.style.marginTop = value*2.3+'px';
    barbie.style.left = value * -2.0 + 'px';
})