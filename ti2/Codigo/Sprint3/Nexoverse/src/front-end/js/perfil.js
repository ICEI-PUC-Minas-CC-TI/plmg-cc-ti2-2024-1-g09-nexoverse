const userid = localStorage.getItem("userid")

fetch('http://localhost:5050/getuser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: userid })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Sucesso:', data);
    document.querySelector("#nome").innerHTML = data.nome
    document.querySelector("#biografia").innerHTML = data.biografia
    document.querySelector("#jogos").innerHTML = data.jogos
    document.querySelector("#plataformas").innerHTML = data.plataformas
    document.querySelector("#datanasc").innerHTML = data.datanasc
  })
  .catch((error) => {
    console.error('Erro:', error);
  });