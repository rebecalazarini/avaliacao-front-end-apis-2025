function login() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const nameCorreto = "rebecalazarini";
    const passwordCorreto = "rebeca123";

    if (name === nameCorreto && password === passwordCorreto) {
        window.location.href = "posts.html";
    } else {
        alert("Nome e/ou senha incorretos");
    }

}