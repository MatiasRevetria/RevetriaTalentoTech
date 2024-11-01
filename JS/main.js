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