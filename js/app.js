document.addEventListener('DOMContentLoaded', function () {

    var button = document.querySelector('#button');
    var counter = 1;
    
    button.addEventListener('click', function () {
        document.querySelector('p span').innerText = counter;
        document.querySelector('p span').style.color = "#ff0000"
        document.querySelector('p span').style.backgroundColor = "#00ff7f"
        counter++;
    });

}); 