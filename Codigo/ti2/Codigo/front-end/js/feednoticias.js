document.addEventListener("DOMContentLoaded", function() {
  const newsFeed = document.getElementById("news-feed");

  // Exemplo de notícias (pode ser substituído por dados reais de notícias)
  const newsData = [
      {
        title: "Novo jogo da série 'The Legend of Zelda' anunciado",
        summary: "Um novo jogo da popular série 'The Legend of Zelda' foi anunciado pela Nintendo. O jogo promete trazer novas mecânicas e uma experiência épica para os fãs.",
       // content: "A Nintendo anunciou hoje o próximo título da série 'The Legend of Zelda', intitulado 'Echoes of Hyrule'. O jogo está previsto para ser lançado no final do ano e promete trazer uma experiência inovadora para os fãs da franquia. 'Echoes of Hyrule' se passará em um novo reino misterioso, onde os jogadores assumirão o papel de um herói em busca de desvendar segredos antigos e enfrentar novos desafios. A Nintendo também revelou que o jogo contará com um mundo aberto expansivo, novas mecânicas de gameplay e gráficos impressionantes. Os fãs estão ansiosos para embarcar nesta nova aventura.",
        timestamp: "2024-04-02T12:00:00Z"
      },
      {
        title: "Novo console da Sony promete revolucionar o mercado de jogos",
        summary: "A Sony anunciou seu novo console, o 'PlayStation Infinity', que promete revolucionar o mercado de jogos com tecnologia de ponta e recursos inovadores.",
       // content: "A Sony surpreendeu o mundo dos games ao anunciar seu mais recente console, o 'PlayStation Infinity'. Com lançamento previsto para o próximo ano, o PlayStation Infinity promete elevar o patamar dos consoles de videogame com sua tecnologia de ponta e recursos inovadores. O console contará com um poderoso processador de última geração, gráficos de alta qualidade e suporte para realidade virtual. Além disso, a Sony revelou que o PlayStation Infinity terá uma ampla gama de serviços de streaming de jogos, permitindo aos jogadores acessar uma vasta biblioteca de títulos sob demanda. Os fãs estão ansiosos para ver como o PlayStation Infinity irá moldar o futuro dos videogames.",
        timestamp: "2024-03-31T10:30:00Z"
      },
      {
        title: "Fortnite Season 12 traz novos mapas e modos de jogo",
        summary: "A Temporada 12 de Fortnite chegou com várias novidades, incluindo novos mapas, modos de jogo e itens cosméticos.",
       // content: "Os fãs de Fortnite estão empolgados com o lançamento da Temporada 12 do popular jogo battle royale. A nova temporada traz uma série de atualizações e adições, incluindo novos mapas que prometem mudar a dinâmica do jogo, modos de jogo emocionantes e uma variedade de itens cosméticos para os jogadores personalizarem seus personagens. Além disso, a Temporada 12 introduzirá um sistema de progressão renovado, com recompensas exclusivas para os jogadores mais dedicados. Com todas essas novidades, espera-se que Fortnite continue sendo um dos jogos mais populares do mundo.",
        timestamp: "2024-03-30T15:45:00Z"
      },
      {
          title: "Jogo Indie 'Rise of the Titans' se Torna um Fenômeno Global",
          summary: "'Rise of the Titans', um jogo desenvolvido por uma pequena equipe independente, conquistou o mundo dos games de maneira surpreendente. Lançado há apenas seis meses, o jogo rapidamente acumulou milhões de jogadores e se tornou um dos títulos mais discutidos nas redes sociais e fóruns de games.",
        //  content: "Em uma entrevista exclusiva, o criador do aguardado jogo 'The Last of Us III' revelou detalhes emocionantes sobre o desenvolvimento do próximo capítulo da aclamada franquia. Segundo o criador, 'The Last of Us III' será uma experiência emocionalmente intensa, explorando temas como amor, perda e redenção em um mundo pós-apocalíptico brutal. Os fãs estão ansiosos para mergulhar nesta jornada emocionante quando o jogo for lançado no final deste ano.",
          timestamp: "2024-01-08T12:45:00Z"
      },
      {
          title: "Empresa Brasileira de Jogos Mobile Atinge 100 Milhões de Downloads Globalmente",
          summary: "A empresa brasileira de desenvolvimento de jogos mobile, TropicGames, atingiu um marco impressionante ao alcançar 100 milhões de downloads globais. Fundada há apenas cinco anos, a TropicGames se destacou no competitivo mercado de jogos mobile com títulos inovadores e envolventes.",
        //  content: "A aguardada expansão para 'World of Warcraft: Shadowlands' foi oficialmente anunciada pela Blizzard Entertainment. Intitulada 'Gates of Oblivion', a expansão promete levar os jogadores a terras desconhecidas e perigosas, onde enfrentarão novos inimigos e desafios épicos. Além disso, 'Gates of Oblivion' apresentará uma nova classe jogável, o Necromante, que dominará as artes das trevas para derrotar seus adversários. Os jogadores mal podem esperar para embarcar nesta nova jornada quando a expansão for lançada no final deste ano.",
          timestamp: "2024-02-10T15:48:00Z"
      },
      {
          title: "E-sports Ganham Cada Vez Mais Destaque no Mundo dos Games",
          summary: "Os e-sports estão se tornando uma força dominante no entretenimento global, atraindo milhões de espectadores e gerando receitas significativas. Jogos como League of Legends, Dota 2 e Counter-Strike: Global Offensive (CS) estão no centro dessa revolução, com competições que rivalizam em popularidade com eventos esportivos tradicionais.",
        //  content: "A expansão 'Rebirth' para o jogo 'The Game' foi lançada oficialmente hoje, marcando um novo capítulo na história dos jogos eletrônicos. Com uma narrativa envolvente e revolucionária, 'Rebirth' mergulha os jogadores em um mundo completamente novo, repleto de mistérios, desafios e descobertas. Os fãs podem esperar novos personagens cativantes, locais deslumbrantes e uma jogabilidade aprimorada que redefine os padrões da indústria. Além disso, a expansão traz uma série de atualizações de qualidade de vida e melhorias técnicas para garantir uma experiência de jogo ainda mais imersiva. 'Rebirth' está disponível agora para os jogadores de todo o mundo, e promete levar 'The Game' a novos patamares de sucesso.",
          timestamp: "2024-05-10T13:47:00Z"
      }
    ];
    

  // Função para criar o conteúdo expandido da notícia
  function createExpandedContent(newsItem, news) {
    const expandedContent = document.createElement("div");
    expandedContent.classList.add("expanded-content");

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = news.content;

    const timestamp = document.createElement("div");
    timestamp.classList.add("timestamp");
    timestamp.textContent = new Date(news.timestamp).toLocaleString();

    expandedContent.appendChild(content);
    expandedContent.appendChild(timestamp);

    newsItem.appendChild(expandedContent);
  }

  // Função para adicionar notícias ao feed
  function renderNews() {
    newsFeed.innerHTML = "";
    newsData.forEach(function(news, index) {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");

      const title = document.createElement("h2");
      title.textContent = news.title;

      const summary = document.createElement("div");
      summary.classList.add("summary");
      summary.textContent = news.summary;

      // Adicionando evento de clique para expandir a notícia
      title.addEventListener("click", function() {
        if (newsItem.classList.contains("expanded")) {
          // Se já estiver expandida, recolher
          newsItem.classList.remove("expanded");
          newsItem.removeChild(newsItem.querySelector(".expanded-content"));
        } else {
          // Se não estiver expandida, expandir
          newsItem.classList.add("expanded");
          createExpandedContent(newsItem, news);
        }
      });

      // Adicionando botões para as três primeiras notícias
      if (index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5) {
        const button = document.createElement("button");
        button.textContent = "Leia mais";
        button.classList.add("read-more-button");
        let link;
        if (index === 0) link = "zelda.html";
        if (index === 1) link = "playstation.html";
        if (index === 2) link = "fortnite.html";
        if (index === 3) link = "riseoftitans.html";
        if (index === 4) link = "mobile.html";
        if (index === 5) link = "esports.html";
        button.addEventListener("click", function() {
          window.location.href = link;
        });
        newsItem.appendChild(button);
      }

      newsItem.appendChild(title);
      newsItem.appendChild(summary);
      newsFeed.appendChild(newsItem);
    });
  }

  renderNews();
});
