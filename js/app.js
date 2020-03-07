document.addEventListener('DOMContentLoaded', function () {

    var button = document.querySelector('#button');
    var counter = 1;

    button.addEventListener('click', function () {
        document.querySelector('p span').innerText = counter;
        counter++;
    });

}); 