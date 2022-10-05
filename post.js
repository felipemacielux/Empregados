function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastraUsuario() {
    event.preventDefault()
    let url = "http://127.0.0.1:5000/users"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let funcao = document.getElementById("funcao").value
    console.log(nome)
    console.log(email)
    console.log(funcao)

    body = {
        "name": nome,
        "email": email,
        "funcao": funcao
    }

    fazPost(url, body)
}