import { mostrarAlerta, validar } from "./funciones.js";//-> en react ya no se le pone la extension
import { nuevoCliente } from "./API.js";//-> en react ya no se le pone la extension

//Lo hacemos local con un IIFE
(function(){
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        nuevoCliente(cliente);
    }

})();