const url = 'http://localhost:3000/clientes';

// Cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}
// Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);//por default fetch tendrá como method GET
        const clientes = resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

// Elimina un cliente
export const eliminarCliente = async id => {
    try {
        
        await fetch(`${url}/${id}`,{
            method: 'DELETE'
        });
        
    } catch (error) {
        console.log(error);
    }
}

export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);//no especificamos el method ya que por defecto fetch trae GET
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

export const editarCliente = async cliente =>{
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}