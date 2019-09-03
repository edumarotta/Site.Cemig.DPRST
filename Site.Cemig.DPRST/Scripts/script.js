

function ValidacaoForm() {

    var cNome = document.getElementById('nome');
    var cEmail = document.getElementById('email');
    var cGerencia = document.getElementById('gerencia');
    var cTelefone = document.getElementById('telefone');
    var cMensagem = document.getElementById('areadetexto');
    var nomeBool = false,
        emailBool = false,
        gerenciaBool = false,
        telefoneBool = false,
        mensagemBool = false;
    var mensagemErro;

    msgDanger.style.display = "block"
    msgSuccess.style.display = "none"

    mensagemErro = "Erro na autenticação do formulário"



    nomeBool = ValidaCampos(cNome);
    emailBool = ValidaCampos(cEmail);
    gerenciaBool = ValidaCampos(cGerencia);
    telefoneBool = ValidaCampos(cTelefone);
    mensagemBool = ValidaCampos(cMensagem);



    if ((nomeBool == true) &&
        (emailBool == true) &&
        (gerenciaBool == true) &&
        (telefoneBool == true) &&
        (mensagemBool == true)) {

        msgSuccess.style.display = "block";
        msgDanger.style.display = "none";
        msgSuccess.textContent = "Mensagem Enviada com Sucesso!"

        nome.value = "";
        nome.style.border = "";

        email.value = "";
        email.style.border = "";

        gerencia.value = "";
        gerencia.style.border = "";

        telefone.value = "";
        telefone.style.border = "";

        areadetexto.value = "";
        areadetexto.style.border = "";

    }

    else {
        msgDanger.style.display = "block";
        msgDanger.textContent = mensagemErro;


    }
}



function ValidaCampos(campo) {
    if (campo.value === "") {
        campo.style.border = "1px dotted red";
        return (false);
    }
    else {
        campo.style.border = "1px dotted green";
        return (true);
    }

}




function LimpaForm() {
    nome.value = "";
    nome.style.border = "";

    email.value = "";
    email.style.border = "";

    gerencia.value = "";
    gerencia.style.border = "";

    telefone.value = "";
    telefone.style.border = "";

    areadetexto.value = "";
    areadetexto.style.border = "";

    msgDanger.style.display = "none";
    msgSuccess.style.display = "none";



}
