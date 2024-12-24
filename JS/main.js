const form = document.getElementById("form");
const us = document.getElementById("user");
const us_err = document.querySelector("#error");
const pass = document.getElementById("password");
const pass_err = document.querySelector("#error2");
const cpass = document.getElementById("confirm-password");
const cpass_err = document.querySelector("#error3");

form.addEventListener("submit",(e)=>{   
    if(us.value == ""){
        e.preventDefault();
        us_err.innerHTML = "El usuario esta vacio..."
    }else{
        us_err.innerHTML = ""
    }

    if(pass.value.length < 8){
        e.preventDefault();
        pass_err.innerHTML = "La password debe tener mas de 8 caracteres..."
    }else{
        pass_err.innerHTML = ""
    }

    if(cpass.value != pass.value){
        e.preventDefault();
        cpass_err.innerHTML = "Las password no coinciden..."
    }else{
        cpasspass_err.innerHTML = ""
    }
})

const cursos = document.querySelectorAll('.agregar-carrito');
const listaCarrito = document.getElementById('lista-carrito');
const total = document.getElementById('total');
const finalizarCompra = document.getElementById('finalizar-compra');

let carrito = [];
let totalPrecio = 0;

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
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombreCurso} - $${item.precio}`;
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'X';
        btnEliminar.addEventListener('click', () => {
            eliminarCurso(item);
        });
        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
    });
    totalPrecio = carrito.reduce((acc, item) => acc + item.precio, 0);
    total.textContent = totalPrecio;
}

function eliminarCurso(curso) {
    carrito = carrito.filter(item => item !== curso);
    actualizarCarrito();
}

finalizarCompra.addEventListener('click', () => {
    alert(`Has inscrito los cursos por un total de $${totalPrecio}`);
    carrito = [];
    actualizarCarrito();
});
