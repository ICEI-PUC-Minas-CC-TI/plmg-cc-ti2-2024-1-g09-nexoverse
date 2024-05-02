// Função para lidar com o clique no botão "Participar"
function participarEvento(event) {
    // Obter o elemento pai do botão clicado (o evento)
    const evento = event.target.closest('.evento');
    // Obter o título do evento
    const tituloEvento = evento.querySelector('h3').textContent;
    // Exibir uma mensagem de confirmação
    alert(`Você está participando do evento: ${tituloEvento}`);
}

// Adicionar um ouvinte de eventos a todos os botões "Participar"
const botoesParticipar = document.querySelectorAll('.evento button');
botoesParticipar.forEach(botao => {
    botao.addEventListener('click', participarEvento);
});
