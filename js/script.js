//MENU MOBILE SCRIPT
function showMenu() {
    let menu = document.getElementById('container-menu');
    let botao = document.getElementById('mobile-btn');
    let searchnav = document.getElementById('search');
//menu-mobile
    if(menu.style = 'display:none') {
        menu.style = 'display:block; animation: menuanimation 1s;';
        botao.setAttribute('onclick', 'hideMenu()');
    }
//search-nav
    if(window.innerWidth < 685, searchnav.style = 'display:none;') {
        searchnav.style = 'display:block;';
    }
    else {
        return(false)
    }
//HIDE MENU FUNCTION
}
function hideMenu() {
    let searchnav = document.getElementById('search');
    let menu = document.getElementById('container-menu');
    let botao = document.getElementById('mobile-btn');
    if(menu.style = 'display:block;') {
        menu.style = 'display:none;';
        botao.setAttribute('onclick', 'showMenu()');
    }
//hide search-nav
    if(window.innerWidth < 685, searchnav.style = 'display:block;') {
        searchnav.style = 'display:none;';
    }
    else {
        return(false)
    }
 }
//EVENT SCROLL SCRIPT 
function scrollToTop() {
    let pageup = window.pageYOffset;
    let group1 = document.getElementById('group1');
    let group2 = document.getElementById('group2');
    //fazendo animação imagem e linha
    if(pageup > 472) {
        group1.style = 'animation: group1-animation 0.5s; opacity: 1;';
        group2.style = 'animation: group2-animation 0.5s; opacity: 1;';
    }
    console.log(pageup)
    //menu fixo
    let nav = document.getElementById('header-menu')
    if(pageup > 30) {
        nav.style ='position: fixed; width:100%; background:rgba(255,255,255,0.2); top:0;';
    }
    else {
        nav.style = 'position:relative;';
    }
}
window.addEventListener('scroll', function(){
    scrollToTop();
})