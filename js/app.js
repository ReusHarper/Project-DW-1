
// Variables locales:

let ele1 = document.querySelectorAll('.animation.vt');
let ele2 = document.querySelectorAll('.animation.vl');
let ele3 = document.querySelectorAll('.animation.vr');

// Funciones:

// Funcion encargada de mostrar cada elemento dependiendo
// de la posicion del scroll.

function viewScrollTop() {

    // Variables:
    let scrollTop = document.documentElement.scrollTop;

    // Procesos:
    for (var i = 0; i < ele1.length ; i++){
        let heightAni = ele1[i].offsetTop;
        if (heightAni - 700 < scrollTop){
            ele1[i].style.opacity = 1;
            ele1[i].classList.add("viewTop");
        }
    }

}

function viewScrollLeft() {

    // Variables:
    let scrollTop = document.documentElement.scrollTop;

    // Procesos:
    for (var i = 0; i < ele2.length ; i++){
        let heightAni = ele2[i].offsetTop;
        if (heightAni - 700 < scrollTop){
            ele2[i].style.opacity = 1;
            ele2[i].classList.add("viewLeft");
        }
    }

}

function viewScrollRight() {

    // Variables:
    let scrollTop = document.documentElement.scrollTop;

    // Procesos:
    for (var i = 0; i < ele3.length ; i++){
        let heightAni = ele3[i].offsetTop;
        if (heightAni - 700 < scrollTop){
            ele3[i].style.opacity = 1;
            ele3[i].classList.add("viewRight");
        }
    }
}

window.addEventListener('scroll', viewScrollTop);
window.addEventListener('scroll', viewScrollLeft);
window.addEventListener('scroll', viewScrollRight);
