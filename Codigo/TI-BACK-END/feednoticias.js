const newsFeed = document.getElementById('news-feed');

// Exemplo de notícias (poderiam ser obtidas de uma API)
const noticias = [
    {
        titulo: 'Novo trailer de "The Elder Scrolls VI" é lançado',
        descricao: 'O aguardado jogo "The Elder Scrolls VI" ganhou um novo trailer revelando detalhes da jogabilidade e do mundo do jogo.',
        data: '01/04/2024'
    },
    {
        titulo: 'Lançamento de "Horizon Forbidden West" é adiado',
        descricao: 'A desenvolvedora Guerrilla Games anunciou o adiamento do lançamento de "Horizon Forbidden West" para o final do ano.',
        data: '02/04/2024'
    },
    {
        titulo: 'Anunciada nova expansão para "The Witcher 3"',
        descricao: 'A CD Projekt Red anunciou uma nova expansão para o aclamado jogo "The Witcher 3: Wild Hunt", trazendo novas missões e áreas para explorar.',
        data: '03/04/2024'
    },
    {
        titulo: 'Vaza suposto gameplay de "GTA 6"',
        descricao: 'Um vídeo com suposto gameplay do aguardado "GTA 6" foi divulgado nas redes sociais, gerando grande expectativa entre os fãs.',
        data: '04/04/2024'
    },
    {
        titulo: 'Nintendo anuncia novo console portátil',
        descricao: 'A Nintendo revelou seu novo console portátil, prometendo gráficos de alta qualidade e uma vasta biblioteca de jogos.',
        data: '05/04/2024'
    },
    {
        titulo: 'EA anuncia remasterização de "Mass Effect Trilogy"',
        descricao: 'A Electronic Arts anunciou a remasterização da trilogia "Mass Effect", com gráficos aprimorados e todo o conteúdo adicional.',
        data: '06/04/2024'
    }
];

// Função para exibir as notícias no feed
function exibirNoticias() {
    noticias.forEach((noticia) => {
        const div = document.createElement('div');
        div.classList.add('news-item');
        div.innerHTML = `
            <div class="news-title">${noticia.titulo}</div>
            <div class="news-description">${noticia.descricao}</div>
            <div class="news-date">Publicado em: ${noticia.data}</div>
        `;
        newsFeed.appendChild(div);
    });
}

// Chama a função para exibir as notícias ao carregar a página
exibirNoticias();

