const divElement = document.querySelector('#Saludo');

divElement.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

function myFunction() {
    event.stopPropagation();
    alert("Hola!");
}
