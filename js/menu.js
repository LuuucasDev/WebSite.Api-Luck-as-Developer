const menu = document.querySelector('.menu');
const botaoMenu = menu.querySelector('.icone');

botaoMenu.addEventListener('click', function(event){
    event.preventDefault();
    menu.classList.toggle('responsivo');
});