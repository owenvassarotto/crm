# CRM con JSON-SERVER, JavaScript y TailwindCSS

Este proyecto es un CRM (Customer Relationship Management) que utiliza JSON-SERVER para abrir un servidor local en tu PC y JavaScript con la función fetch para consumir los datos. Los estilos están hechos con TailwindCSS, un framework genial de CSS que se carga a través de un CDN.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados Node.js y Git en tu sistema. Si no los tienes instalados, sigue estos pasos:

### Instalación de Node.js

1. Descarga e instala Node.js desde [Node.js website](https://nodejs.org/).
2. Verifica que Node.js esté instalado correctamente ejecutando `node -v` en tu terminal. Deberías ver la versión instalada de Node.js.

### Instalación de Git

1. Descarga e instala Git desde [Git website](https://git-scm.com/).
2. Verifica que Git esté instalado correctamente ejecutando `git --version` en tu terminal. Deberías ver la versión instalada de Git.

## Instalación de JSON-SERVER

Para instalar JSON-SERVER globalmente en tu sistema, sigue estos pasos:

1. Abre tu terminal.
2. Ejecuta el siguiente comando:

   ```bash
   npm install -g json-server
   ```

## Uso

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone <URL del repositorio>
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd crm
   ```

3. Inicia el servidor JSON-SERVER:

   ```bash
   json-server --watch db.json --port 3000
   ```

   Esto iniciará un servidor local en `http://localhost:3000` y cargará los datos del archivo `db.json`.

4. Para visualizar la aplicación, puedes utilizar Live Server en Visual Studio Code o abrir la URL del servidor local en tu navegador. Si prefieres utilizar Live Server en Visual Studio Code, sigue estos pasos para instalarlo:

   - Abre Visual Studio Code.
   - Ve a la barra lateral izquierda y haz clic en el icono de Extensiones (cuatro cuadrados).
   - En el campo de búsqueda, escribe "Live Server".
   - Debería aparecer la extensión "Live Server" en los resultados. Haz clic en "Install" para instalarla.
   - Una vez instalada, ve al archivo `index.html` dentro de la carpeta `public` del proyecto y haz clic derecho en él.
   - Selecciona "Open with Live Server" para iniciar Live Server y ver la aplicación en tu navegador predeterminado.

5. Una vez que la aplicación esté cargada, podrás agregar, editar y eliminar personas en el CRM.

## Estructura del proyecto

En la raíz principal del proyecto, encontrarás los siguientes elementos:

1. **`css/`**: Una carpeta que contiene el archivo `tailwind.min.css`, que es el archivo de estilos de TailwindCSS.

2. **`js/`**: Una carpeta que contiene los siguientes archivos JavaScript:

   - **`API.js`**: Archivo que maneja las llamadas a la API del servidor JSON.
   - **`app.js`**: Archivo principal de la aplicación que inicializa y controla el funcionamiento del CRM.
   - **`editarcliente.js`**: Archivo que proporciona la funcionalidad para editar clientes en el CRM.
   - **`funciones.js`**: Archivo que contiene funciones auxiliares utilizadas en la aplicación.
   - **`nuevocliente.js`**: Archivo que permite agregar nuevos clientes al CRM.

3. **`db.json`**: Archivo JSON que actúa como la base de datos simulada para el servidor JSON. Contiene los datos de los clientes.

4. **`editar-cliente.html`**: Archivo HTML independiente que proporciona la interfaz para editar un cliente. Este archivo se puede abrir directamente en el navegador para editar clientes sin iniciar la aplicación completa.

5. **`index.html`**: Archivo HTML principal de la aplicación CRM. Este archivo es la página de inicio de la aplicación y muestra la lista de clientes y otras funcionalidades principales.

6. **`nuevo-cliente.html`**: Archivo HTML independiente que proporciona la interfaz para agregar un nuevo cliente. Similar a `editar-cliente.html`, este archivo se puede abrir directamente en el navegador para agregar nuevos clientes sin iniciar la aplicación completa.

Con esta estructura, puedes acceder fácilmente a las diferentes partes de la aplicación y realizar diferentes acciones, como agregar, editar o ver clientes, simplemente abriendo los archivos HTML correspondientes en tu navegador web.

Espero que esta guía te sea útil para tu proyecto. Si tienes alguna pregunta o necesitas más ayuda, ¡no dudes en preguntar!

