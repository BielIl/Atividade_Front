let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {

        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'

    } else {

        txtNomet.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'

    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexof('@') == -1 || email.value.indexof('.') == -1) {

        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'

    } else {

        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
    }
}