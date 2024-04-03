document.addEventListener("DOMContentLoaded", function() {
    const newsFeed = document.getElementById("news-feed");
  
    // Exemplo de notícias (pode ser substituído por dados reais de notícias)
    const newsData = [
        {
          title: "Novo jogo da série 'The Legend of Zelda' anunciado",
          summary: "Um novo jogo da popular série 'The Legend of Zelda' foi anunciado pela Nintendo. O jogo promete trazer novas mecânicas e uma experiência épica para os fãs.",
          content: "A Nintendo anunciou hoje o próximo título da série 'The Legend of Zelda', intitulado 'Echoes of Hyrule'. O jogo está previsto para ser lançado no final do ano e promete trazer uma experiência inovadora para os fãs da franquia. 'Echoes of Hyrule' se passará em um novo reino misterioso, onde os jogadores assumirão o papel de um herói em busca de desvendar segredos antigos e enfrentar novos desafios. A Nintendo também revelou que o jogo contará com um mundo aberto expansivo, novas mecânicas de gameplay e gráficos impressionantes. Os fãs estão ansiosos para embarcar nesta nova aventura.",
          timestamp: "2024-04-02T12:00:00Z"
        },
        {
          title: "Novo console da Sony promete revolucionar o mercado de jogos",
          summary: "A Sony anunciou seu novo console, o 'PlayStation Infinity', que promete revolucionar o mercado de jogos com tecnologia de ponta e recursos inovadores.",
          content: "A Sony surpreendeu o mundo dos games ao anunciar seu mais recente console, o 'PlayStation Infinity'. Com lançamento previsto para o próximo ano, o PlayStation Infinity promete elevar o patamar dos consoles de videogame com sua tecnologia de ponta e recursos inovadores. O console contará com um poderoso processador de última geração, gráficos de alta qualidade e suporte para realidade virtual. Além disso, a Sony revelou que o PlayStation Infinity terá uma ampla gama de serviços de streaming de jogos, permitindo aos jogadores acessar uma vasta biblioteca de títulos sob demanda. Os fãs estão ansiosos para ver como o PlayStation Infinity irá moldar o futuro dos videogames.",
          timestamp: "2024-03-31T10:30:00Z"
        },
        {
          title: "Fortnite Season 12 traz novos mapas e modos de jogo",
          summary: "A Temporada 12 de Fortnite chegou com várias novidades, incluindo novos mapas, modos de jogo e itens cosméticos.",
          content: "Os fãs de Fortnite estão empolgados com o lançamento da Temporada 12 do popular jogo battle royale. A nova temporada traz uma série de atualizações e adições, incluindo novos mapas que prometem mudar a dinâmica do jogo, modos de jogo emocionantes e uma variedade de itens cosméticos para os jogadores personalizarem seus personagens. Além disso, a Temporada 12 introduzirá um sistema de progressão renovado, com recompensas exclusivas para os jogadores mais dedicados. Com todas essas novidades, espera-se que Fortnite continue sendo um dos jogos mais populares do mundo.",
          timestamp: "2024-03-30T15:45:00Z"
        },
        {
            title: "Novo lançamento: Jogo AAA agora disponível para pré-venda!",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis.",
            timestamp: "Publicado em: 2 de abril de 2024"
          },
          {
            title: "Entrevista exclusiva com o criador do jogo mais esperado do ano!",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis.",
            timestamp: "Publicado em: 1 de abril de 2024"
          },
          {
            title: "Anunciada expansão massiva para o jogo mais popular do momento!",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis. Sed suscipit dolor sed magna rhoncus, at vestibulum purus facilisis.",
            timestamp: "Publicado em: 31 de março de 2024"
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
      newsData.forEach(function(news) {
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
  
        newsItem.appendChild(title);
        newsItem.appendChild(summary);
        newsFeed.appendChild(newsItem);
      });
    }
  
    renderNews();
  });
  
