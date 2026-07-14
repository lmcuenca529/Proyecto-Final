

const frases = [
    '"Mi mente está abierta a nuevas ideas y posibilidades."',
    '"Estoy en constante evolución y mejora."',
    '"Tengo derecho a obtener felicidad, abundancia y éxito."',
    '"Cada pequeño hábito me acerca a mi mejor versión."',
    '"Hoy elijo cuidar de mi cuerpo y mi mente."'
];

document.addEventListener("DOMContentLoaded", function(){

    const frase = document.getElementById("frase");

    let indice = 0;

    setInterval(function(){

        frase.style.opacity = "0";

        setTimeout(function(){

            indice++;

            if(indice >= frases.length){
                indice = 0;
            }

            frase.textContent = frases[indice];

            frase.style.opacity = "1";

        },500);

    },10000);

});

const cards = document.querySelectorAll(".stack-card");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;

//--------------------------------
// Actualizar posiciones
//--------------------------------

function updateCarousel(){

    cards.forEach(card=>{
        card.classList.remove("active","left","right","hidden");
    });

    dots.forEach(dot=>dot.classList.remove("active"));

    const total = cards.length;

    const left = (current - 1 + total) % total;
    const right = (current + 1) % total;

    cards[current].classList.add("active");
    cards[left].classList.add("left");
    cards[right].classList.add("right");

    cards.forEach((card,index)=>{

        if(
            index !== current &&
            index !== left &&
            index !== right
        ){
            card.classList.add("hidden");
        }

    });

    dots[current].classList.add("active");

}

//--------------------------------
// Botón siguiente
//--------------------------------

nextBtn.addEventListener("click",()=>{

    current++;

    if(current >= cards.length){
        current = 0;
    }

    updateCarousel();

});

//--------------------------------
// Botón anterior
//--------------------------------

prevBtn.addEventListener("click",()=>{

    current--;

    if(current < 0){
        current = cards.length-1;
    }

    updateCarousel();

});

//--------------------------------
// Indicadores
//--------------------------------

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        current=index;

        updateCarousel();

    });

});

//--------------------------------
// Inicio
//--------------------------------

updateCarousel();