const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const verCarrito = document.getElementById("verCarrito");
const cerrarModal = document.getElementById("cerrarModal");
const mensajeBienvenida = document.getElementById("mensajeBienvenida");
const mensajeBienvenidaButton = document.getElementById("mensajeBienvenidaButton");
const shopContent = document.getElementById("shopContent");
const modalContainer = document.getElementById("modalContainer");

let esMayorDeEdad = true;

let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

function deshabilitarElementosInteractivos() {
    shopContent.disabled = true;
    searchBar.disabled = true;
    searchButton.disabled = true;
    verCarrito.disabled = true;
    cerrarModal.disabled = true;
    mensajeBienvenida.disabled = true;
    mensajeBienvenidaButton.disabled = true;
};

function mostrarMensajeConfirmacion() {
    Swal.fire({
        title: "¿Eres mayor de 18 años?",
        text: "Estás por ingresar a un sitio de venta alcohólica, debes ser mayor de 18 años para poder continuar.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("¡Bienvenido!", "Puedes acceder al contenido de la página.", "success");
        } else {
            Swal.fire("Lo siento", "Debes ser mayor de 18 años para acceder a este contenido.", "error");
            esMayorDeEdad = false;
            deshabilitarElementosInteractivos();
        };
    });
};

document.addEventListener('DOMContentLoaded', mostrarMensajeConfirmacion);

searchButton.addEventListener("click", () => {
    if (!esMayorDeEdad) {
        return;
    };
    const searchTerm = searchBar.value.toLowerCase();
    filterProducts(searchTerm);
});

function filterProducts(searchTerm) {
    const filteredProducts = productos.filter((producto) => {
        const nombre = producto.nombre.toLowerCase();
        const tipo = producto.varietal.toLowerCase();
        return nombre.includes(searchTerm) || tipo.includes(searchTerm);
    });

    shopContent.innerHTML = "";

    filteredProducts.forEach((producto) => {
        const content = createProductCard(producto);
        shopContent.append(content);
    });
};

searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();
    filterProducts(searchTerm);
});

function createProductCard(producto) {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${producto.imagen}" alt="Imagen del producto">
        <h3 class= "nombre">"${producto.nombre}"</h3>
        <h4 class= "varietal">${producto.varietal}</h4>
        <p>${producto.descripcion}</p>
        <p class="price">$${producto.precio}</p>
        `;

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    comprar.addEventListener("click", () => {
        if (!esMayorDeEdad) {
            return;
        };
        Swal.fire({
            title: "Genial!",
            text: "Producto agregado con éxito!",
            icon: "success",
            confirmButtonText: "Sí",
        });
        carrito.push({
            codigo: producto.codigo,
            img: producto.imagen,
            nombre: producto.nombre,
            varietal: producto.varietal,
            precio: producto.precio
        });

        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    });

    content.append(comprar);

    return content;
};

productos.forEach((producto) => {
    if (!esMayorDeEdad) {
        return;
    };
    const content = createProductCard(producto);
    shopContent.append(content);
});

verCarrito.addEventListener("click", () => {
    if (!esMayorDeEdad) {
        return; 
    };
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    modalContainer.innerHTML = "";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    cerrarModal.addEventListener("click", () => {
        modalContainer.innerHTML = "";
    });

    const modalButton = document.createElement("h1");
    modalButton.innerText = "✖"
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((producto, index) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
        `;
        modalContainer.append(carritoContent);

        let eliminar = document.createElement("button");
        eliminar.innerText = "Eliminar";
        eliminar.className = "eliminar";

        carritoContent.append(eliminar);

        eliminar.addEventListener("click", () => {
            Swal.fire({
                title: "¿Está seguro de eliminar el producto?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí",
                cancelButtonText: "No",
            }).then((result) => {
                if (result.isConfirmed) {
                    carrito.splice(index, 1);
                    sessionStorage.setItem("carrito", JSON.stringify(carrito));

                    modalContainer.innerHTML = "";
                    verCarrito.click();
                };
            });
        });
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalSumado = document.createElement("div");
    totalSumado.className = "total-content";
    totalSumado.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalSumado);
});

function ocultarCuadroBienvenida() {
    mensajeBienvenida.style.display = "none";
    mensajeBienvenidaButton.style.display = "none";
};

async function obtenerDatosUsuario(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error("Error al obtener datos del usuario");
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error("Hubo un error al obtener los datos del usuario", error);
        throw error;
    };
};

function crearCuadroBienvenida(userData) {
    const username = userData.username;
    const mensaje = `Bienvenido ${username}, estos son nuestros vinos disponibles, vas a acceder a la mejor oferta del mercado. Puedes utilizar la barra de búsqueda para filtrar según tus preferencias, tanto por nombre del vino como por varietal. De parte de ®Mercado de Tintas deseamos que disfrutes tu experiencia de compra y que vuelvas pronto!`;

    mensajeBienvenida.innerHTML = `
        <h2>Bienvenido a Mercado de Tintas</h2>
        <p>${mensaje}</p>
    `;

    mensajeBienvenida.style.display = "block";

    mensajeBienvenidaButton.textContent = "Entendido";

    mensajeBienvenidaButton.addEventListener("click", () => {
        ocultarCuadroBienvenida();
    });

    mensajeBienvenida.appendChild(mensajeBienvenidaButton);
    mensajeBienvenida.style.display = "block";
};

async function main() {
    try {
        const userId = 7;
        const userData = await obtenerDatosUsuario(userId);
        crearCuadroBienvenida(userData);
    } catch (error) {
        console.error("Hubo un error en la función principal", error);
    };
};

main();