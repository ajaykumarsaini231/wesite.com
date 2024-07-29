const s1 = document.getElementById('nav-toggle');
const s2 = document.getElementById('nav-links');

s1.addEventListener('click',function(){
    s2.classList.toggle('active');
})