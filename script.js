
/* Botão modo dark */
var bttModeDark = document.getElementById("bttDarkMode")
var bttDarkModeSide = document.getElementById("bttDarkMode-side")

function modeDark() {
    document.body.classList.toggle('dark')
}

bttModeDark.addEventListener('click', modeDark, false)
bttDarkModeSide.addEventListener('click', modeDark, false)

/* Deslize das imagens principais */

window.addEventListener('scroll', () => {
    let bg1 = document.getElementById("bg1")
    let bg2 = document.getElementById("bg2")
    let bgwave = document.querySelector('main')
    let textlg = document.getElementById("secmainh1")
    let value = window.scrollY;

    textlg.style.top = value * -0.8 + 'px';
    bg1.style.left = value * -0.8 + 'px';
    bg2.style.left = value * -0.8 + 'px';
    bgwave.style.backgroundPositionX = value * 0.8 + 'px';

})

/* Barra lateral */

const navSide = document.getElementById("nav-side")
var bttNav = Array.from(document.getElementsByClassName('bttNav-side'))
const arrImgZI = Array.from(document.getElementsByClassName('cImgZI'))
var prodBox = document.getElementById("product-box")


function abrirNavSide() {
    if (bttNav[0].style.background !== 'white') {
        bttNav[0].classList.toggle('bttNav-size-act');
        bttNav[1].classList.toggle('bttNav-size-act');
        navSide.classList.toggle('navside-active')
        bttDarkModeSide.classList.toggle("bttDarkMode-side-act")
        for (i = 0, letarr = arrImgZI.length; i < letarr; i++) {
            arrImgZI[i].style.zIndex = '-1'
        }
    }
}

for (i = 0, len = bttNav.length; i < len; i++) {
    bttNav[i].onclick = abrirNavSide;
}

/* Menu lateral fixo */

$(function () {
    var nav = $('.bttNav-side');
    var menuLinkSide = Array.from(document.getElementsByClassName('ulmenu'))
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600 && $(this).scrollTop() < 650) {
            nav.addClass("fixar");
            bttDarkModeSide.style.top = '400px'
            bttDarkModeSide.style.transition = '0.2s' 
        } else if ($(this).scrollTop() >= 650) {
            bttDarkModeSide.style.top = '700px'
        }
        else {
            nav.removeClass("fixar");
            menuLinkSide.removeClass("teste")
        }
    });
});

/* document.addEventListener('scroll', function() {
    if (offsetMenu <= window.scrollY()) {
        bttNav.classList.add('fixar')
    } else {
        bttNav.classList.remove('fixar')
    }
}) */

/* Botões de favoritar e adicionar ao carrinho */

const favheart = Array.from(document.getElementsByClassName("favheart"))
const favheartAct = Array.from(document.getElementsByClassName("heart-act"))
const sac = Array.from(document.getElementsByClassName("sac-icon"))


function fav() {
    favheartAct[0].classList.toggle('heartAct');
}
function fav1() {
    favheartAct[1].classList.toggle('heartAct');
}
function fav2() {
    favheartAct[2].classList.toggle('heartAct');
}
function fav3() {
    favheartAct[3].classList.toggle('heartAct');
}
function fav4() {
    favheartAct[4].classList.toggle('heartAct');
}
function fav5() {
    favheartAct[5].classList.toggle('heartAct');
}
function fav6() {
    favheartAct[6].classList.toggle('heartAct');
}
function fav7() {
    favheartAct[7].classList.toggle('heartAct');
}

favheart[0].addEventListener('click', fav, false);
favheart[1].addEventListener('click', fav1, false);
favheart[2].addEventListener('click', fav2, false);
favheart[3].addEventListener('click', fav3, false);
favheart[4].addEventListener('click', fav4, false);
favheart[5].addEventListener('click', fav5, false);
favheart[6].addEventListener('click', fav6, false);
favheart[7].addEventListener('click', fav7, false);

function noProd() {
    window.alert("[ERRO] Este produto não está disponível por enquanto");
}


