// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

// 1 soluzione

// var quadrato = $('.quadrato');
// var numero_random = 0;
//
// for(var i=0; i < quadrato.length; i++){
//     numero_random = Math.floor(Math.random() * 11);
//     $(quadrato[i]).text(numero_random);
// }

// 2 soluzione
//
for (var i = 0; i < 25; i++) {
    $('#griglia').append('<div class="quadrato"></div>')
}

var numero_random = 0;

$('.quadrato').each(function() {
    numero_random = Math.floor(Math.random() * 11);
    $(this).text(numero_random);
})
