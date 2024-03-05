import { obtenerCliente, editarCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function(){

    // Campos del formulario
    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const telefonoInput = document.querySelector("#telefono");
    const empresaInput = document.querySelector("#empresa");
    const idInput = document.querySelector("#id");

    document.addEventListener('DOMContentLoaded', async () => {
        // Para extraer el id de la URL
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);//await bloquea el código hasta que se cumpla la consulta, y para que haya un await tiene que haber un async

        llenarCampos(cliente);

        // Editar cliente
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    })

    function llenarCampos(cliente){
        const { nombre, empresa, email, telefono, id } = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }

    function validarCliente(e){
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }

        if(validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        editarCliente(cliente);
    }
})();