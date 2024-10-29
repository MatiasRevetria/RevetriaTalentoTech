const form = document.getElementById("form");
const us = document.getElementById("user");
const err = document.querySelector("#error")

form.addEventListener("submit",(e)=>{   
    if(us.value == ""){
        e.preventDefault();
        err.innerHTML = "El usuario esta vacio..."
    }else{
        form.innerHTML = `<h1>Bienvenido, ${us.value}!</h1>` 
    }
})