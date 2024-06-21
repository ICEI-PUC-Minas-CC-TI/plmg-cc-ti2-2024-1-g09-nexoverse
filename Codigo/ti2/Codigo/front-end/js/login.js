const button = document.querySelector(".buttonPress");

button.addEventListener("click", realizarLogin);

async function realizarLogin() {

    let email = document.querySelector("#loginEmail").value;
    let password = document.querySelector("#loginSenha").value;

    try {
        const response = await fetch('http://localhost:5050/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        });

        const data = await response.json();

        alert("Login realizado com sucesso!");

        localStorage.setItem('userid', data);
        
        window.location.href = "index.html";

    } catch (error) {
        console.error('Erro:', error);
    }
}


// fetch('http://localhost:5050/login', {
//     method: 'POST', // ou 'PUT', dependendo do endpoint
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ email: email, password: senha })
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Sucesso:', data);
//   })
//   .catch((error) => {
//     console.error('Erro:', error);
//   });