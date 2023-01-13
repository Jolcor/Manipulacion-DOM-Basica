/*const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo'; // combierte todo a html
h1.innerText = 'Patito <br> Feo'; // combierte todo a texto
// console.log(h1.getAttribute('Pantalla')); //nos ayuda a leer los atributos
// h1.setAttribute('class', 'rojo') // remplazar atributos 
h1.classList.add('rojo')// agregar clase
h1.classList.remove('verde')//eliminar clase
// h1.classList.toggle('verde');//poner y quitar clases
// h1.classList.contains('verde');//condicional true o false

input.value = '456';

const img = document.createElement('img'); // creamos la etiqueta img
img.setAttribute('src', 'https://fotografias.lasexta.com/clipping/cmsimages02/2020/09/21/86828440-B1FB-43AC-9E9C-A94AC6A4B8BD/default.jpg?crop=1300,731,x0,y0&width=800&height=450&optimize=medium'); // le colocamos los atributos 
console.log(img);


pid.innerHTML = ''; // eliminar contenido anterior
pid.append(img);
pid.appendChild(img); // insertamos dentro de una contenedor 
*/


const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumaInputValeu);

// function sumaInputValeu(event) {
    //console.log({event});
//    event.preventDefault();
//    const sumaInputs = input1.value + input2.value;
//    pResult.innerText = 'Resultado: ' + sumaInputs;
// }

btn.addEventListener('click', sumaInputValeu);

function sumaInputValeu() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = 'Resultado: ' + sumaInputs;
}
