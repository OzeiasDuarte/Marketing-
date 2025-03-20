var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icone');
var iconeMenu = document.querySelector('nav .menu-icone img');

menuBar.addEventListener('click',function(){

    if (iconeMenu.getAttribute("src") == 'img/menu.png') {
        iconeMenu.setAttribute("src","img/close.png");

    }else{
        iconeMenu.setAttribute("src","img/menu.png");
    }

    menu.classList.toggle('active');
});