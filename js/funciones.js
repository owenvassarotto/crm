export function mostrarAlerta(msg){

    const existeAlerta = document.querySelector('.alerta');

    if(!existeAlerta){
        const alerta = document.createElement('P');
        alerta.classList.add('alerta', 'bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">¡Error!</strong>
            <span class="block sm:inline">${msg}</span>
        `;
        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

export function validar(obj){
    // Object.values() convierte las propiedades del objeto en un array
    return !Object.values(obj).every(input => input !== '');//si no está completo devuelve TRUE
}