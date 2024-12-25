// Validación de formulario
const form = document.getElementById("form");
const us = document.getElementById("user");
const us_err = document.querySelector("#error");
const pass = document.getElementById("password");
const pass_err = document.querySelector("#error2");
const cpass = document.getElementById("confirm-password");
const cpass_err = document.querySelector("#error3");

form.addEventListener("submit", (e) => {
    if (us.value == "") {
        e.preventDefault();
        us_err.innerHTML = "El usuario está vacío...";
    } else {
        us_err.innerHTML = "";
    }

    if (pass.value.length < 8) {
        e.preventDefault();
        pass_err.innerHTML = "La contraseña debe tener más de 8 caracteres...";
    } else {
        pass_err.innerHTML = "";
    }

    if (cpass.value != pass.value) {
        e.preventDefault();
        cpass_err.innerHTML = "Las contraseñas no coinciden...";
    } else {
        cpass_err.innerHTML = "";
    }
});

// Carrito de compras con persistencia en localStorage
const cursos = document.querySelectorAll('.agregar-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const total = document.getElementById('total');
const finalizarCompra = document.getElementById('finalizar-compra');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let totalPrecio = carrito.reduce((acc, item) => acc + item.precio, 0); // Cargar total inicial

// Inicializar el carrito desde localStorage
actualizarCarrito();

// Agregar cursos al carrito
cursos.forEach(curso => {
    curso.addEventListener('click', () => {
        const nombreCurso = curso.parentElement.querySelector('p').textContent.split('.')[0];
        const precio = 1000;
        carrito.push({ nombreCurso, precio });
        actualizarCarrito();
    });
});

function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombreCurso} - $${item.precio}`;
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'X';
        btnEliminar.addEventListener('click', () => {
            eliminarCurso(index); // Pasar índice del elemento
        });
        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
    });
    totalPrecio = carrito.reduce((acc, item) => acc + item.precio, 0);
    total.textContent = totalPrecio;

    // Guardar carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function eliminarCurso(index) {
    carrito.splice(index, 1); // Eliminar por índice
    actualizarCarrito();
}

finalizarCompra.addEventListener('click', () => {
    alert(`Has inscrito los cursos por un total de $${totalPrecio}`);
    carrito = [];
    actualizarCarrito();
});
