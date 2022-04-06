
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    

    let numero = document.querySelector('#number');

    let increment = document.querySelector('#increment');

    let decrement = document.querySelector('#decrement');


    increment.addEventListener('click', function () {
        numero.innerHTML = parseInt(numero.innerHTML) + 1;
    });

    decrement.addEventListener('click', function () {
        numero.innerHTML = parseInt(numero.innerHTML) - 1;
    });







}
