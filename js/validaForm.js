function validaEmail(id) {
    //search
    //length

    var email = document.getElementById(id).value;
    var alertP = document.getElementById("alert-tamanho-caracter");
    var alertArroba = document.getElementById("alert-arroba-caracter");

    if (email.length < 5) {
        alertP.style.display = "inline";
    }
    else {
        alertP.style.display = "none";
    }

    if(email.search("@") > 0){
        alertArroba.style.display = "none";
    }
    else{
        alertArroba.style.display = "inline";
    }
    console.log(email);
}

function validaSenha(id) {
    //search
    //length
    //setAttribute(" , ")

    var senha = document.getElementById(id).value;
    var alertP = document.getElementById("alert-tamanho-caracter-senha");

    if (senha.length < 5) {
        alertP.style.display = "inline";
    }
    else {
        alertP.style.display = "none";
    } 
}

function mostraSenha(idSenha, idCheckbox){
    var senha = document.getElementById(idSenha);
    var checkbox = document.getElementById(idCheckbox);

    if(checkbox.checked == true) {
        senha.setAttribute("type" , "text");
    }
    else {
        senha.setAttribute("type" , "password");
    }
}