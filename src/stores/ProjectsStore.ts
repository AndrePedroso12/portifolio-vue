import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectsList", {
  state: () => ({
    projectsList: [
      {
        title: "Growth Suplementos",
        subtitle: "Loja / Marca de suplementos",
        mainImage:
          "src/assets/images/projects/growth/main-image-growth-min.jpg",
        mobileImage: "src/assets/images/projects/growth/home-growth-min.jpg",
        website: "https://www.gsuplementos.com.br",
        description:
          "Entre os anos de 2021 e 2023, tive a oportunidade de contribuir significativamente para o site da Growth Suplementos. O projeto foi desenvolvido na plataforma da WebArt, onde pude aplicar minhas habilidades e conhecimentos em design e desenvolvimento.Minha principal área de atuação foi na criação das páginas internas dos produtos, em colaboração estreita com a equipe de UI/UX. Busquei garantir uma experiência de usuário aprimorada, focando na apresentação clara e atrativa dos produtos oferecidos pela Growth Suplementos.Além disso, desempenhei um papel importante na configuração e criação de newsletters, aprimorando a comunicação com os clientes. A gestão das capturas de leads também esteve entre as minhas responsabilidades, visando expandir a base de usuários e fortalecer o relacionamento com a audiência.Foi uma experiência enriquecedora, onde pude aplicar minha paixão pelo design e pela interação com o usuário para contribuir para o sucesso online da Growth Suplementos.",
        images: [
          {
            url: "src/assets/images/projects/growth/whey-min.jpg",
            description: "Pagina de produto do Whey Hidrolisado",
          },
          {
            url: "src/assets/images/projects/growth/albumina-min.jpg",
            description: "Pagina de produto da Albumina",
          },
          {
            url: "src/assets/images/projects/growth/crisp-min.jpg",
            description: "Pagina de produto da Barrinha Crisp",
          },
          {
            url: "src/assets/images/projects/growth/glutamina-min.jpg",
            description: "Pagina de produto da Glutamina",
          },
          {
            url: "src/assets/images/projects/growth/multi energy-min.jpg",
            description: "Pagina de produto do Multi Energy",
          },
        ],
      },
      {
        title: "Rak Logistica",
        subtitle: "Transportadora de Campinas-SP",
        mainImage: "src/assets/images/projects/raklog/main-image-raklog.jpg",
        mobileImage: "src/assets/images/projects/raklog/raklog-mobile.png",
        website: "http://www.raklog.com.br",
        description:
          "Em 2021, enquanto colaborava com a Agência Delucca, participei ativamente no desenvolvimento do site da Rak Logistics, localizada em Campinas-SP. O projeto incluiu a criação de um blog corporativo para compartilhar informações relevantes do setor logístico. Além disso, implementamos um sistema de rastreamento para proporcionar aos clientes uma experiência eficiente no monitoramento de suas remessas. A área de contato foi estrategicamente projetada para facilitar a interação dos clientes e potenciais funcionários, consolidando a presença online da Rak Logistics e aprimorando a comunicação com seu público-alvo. Foi uma colaboração gratificante, focada em fortalecer a presença digital e operacional da Rak Logistics.",
        images: [
          {
            url: "src/assets/images/projects/raklog/1.jpg",
            description: "Home do Site",
          },
          {
            url: "src/assets/images/projects/raklog/2.jpg",
            description: "Pagina de Serviços oferecidos",
          },
          {
            url: "src/assets/images/projects/raklog/3.jpg",
            description: "Pagina  de Fale Conosco",
          },
          {
            url: "src/assets/images/projects/raklog/4.jpg",
            description: "Sobre a Emrpesa",
          },
          {
            url: "src/assets/images/projects/raklog/5.jpg",
            description: "Especificação de cada serviço",
          },
        ],
      },
      {
        title: "Netcoffee",
        subtitle: "Loja de cafés e insumos",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Cheirinho Pet",
        subtitle: "Marca / Loja de Perfumes Pet",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Anjara",
        subtitle: "Loja / Marca de perfumes para lojas",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Banco Original",
        subtitle: "Promoção Você na A Fazenda 14",
        mainImage:
          "src/assets/images/projects/banco-original/main-image-banco-original.jpg",
        mobileImage:
          "src/assets/images/projects/banco-original/mobile-banco-original.png",
        description: `"Em 2021, enquanto fazia parte da equipe da Fenyx System, tive a responsabilidade de desenvolver o site para a promoção "Você na A Fazenda 14" em parceria com o Banco Original. A construção do site foi realizada de maneira completa utilizando HTML, CSS e JavaScript, destacando a solidez e eficiência da nossa abordagem técnica. O site proporcionava aos usuários uma experiência única ao integrar-se diretamente com o aplicativo do Banco Original, utilizando queries e a API do aplicativo. Ao inserir seus dados bancários, as ações realizadas na conta geravam números da sorte, oferecendo aos participantes a oportunidade de concorrer a prêmios em dinheiro. Essa integração inovadora não apenas simplificou a participação dos usuários, mas também evidenciou a capacidade tecnológica avançada da promoção. Foi um projeto emocionante, concentrado na construção de uma plataforma interativa e eficiente, proporcionando aos clientes do Banco Original uma experiência envolvente e personalizada."`,
        images: [
          {
            url: "src/assets/images/projects/banco-original/1.jpg",
            description: "Home do site",
          },
          {
            url: "src/assets/images/projects/banco-original/2.jpg",
            description: "Pagina de ganhadores",
          },
          {
            url: "src/assets/images/projects/banco-original/3.jpg",
            description: "Pagina de FAQ",
          },

          {
            url: "src/assets/images/projects/banco-original/5.jpg",
            description: "Pagina de login",
          },

          {
            url: "src/assets/images/projects/banco-original/7.jpg",
            description: "Pagina de numeros da sorte",
          },
        ],
      },
      {
        title: "Toddynho",
        subtitle: "Promoção Lanche Premiado",
        mainImage:
          "src/assets/images/projects/toddynho/main-image-toddynho.jpg",
        mobileImage: "src/assets/images/projects/toddynho/mobile-toddynho.jpg",
        description: `"Em 2022, durante meu período na Fenyx System, tive a oportunidade de desenvolver o site para a promoção "Lanche Premiado da Toddynho". O projeto foi totalmente concebido em HTML, CSS e JavaScript, garantindo uma experiência interativa e responsiva para os usuários. No site, os participantes podiam cadastrar os códigos de barras dos produtos Toddynho, e o sistema gerava automaticamente cupons de participação. Após alguns dias, os participantes podiam verificar se haviam sido sorteados, concorrendo a prêmios como viagens e dinheiro. Além disso, o site contava com páginas específicas que destacavam os locais no Brasil onde ocorreram os ganhadores, proporcionando transparência e engajamento aos participantes ao mostrar os resultados da promoção em diferentes regiões do país."`,
        images: [
          {
            url: "src/assets/images/projects/toddynho/1.jpg",
            description: "Home do Site",
          },
          {
            url: "src/assets/images/projects/toddynho/4.jpg",
            description: "Pagina de cupons",
          },
          {
            url: "src/assets/images/projects/toddynho/5.jpg",
            description: "Pagina de produtos participantes",
          },
          {
            url: "src/assets/images/projects/toddynho/6.jpg",
            description: "pagina de instruções",
          },
        ],
      },
      {
        title: "Liquigás",
        subtitle: "Nome da promoção",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Ibra",
        subtitle: "Laboratório de Analise de solos",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Sun Protect",
        subtitle: "Loja de Insulfims",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Cachorro Magro",
        subtitle: "Restaurante especializado em costelas",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },

      {
        title: "Rock in Rio e C&A",
        subtitle: "Nome da promoção",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Nissin",
        subtitle: "Nome da promoção",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Sym",
        subtitle: "Nome da promoção",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Claro Brasil",
        subtitle: "Nome da promoção",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },

      {
        title: "Bytz",
        subtitle: "Nome da promoção",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Castelo",
        subtitle: "Nome da promoção",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Elma Chips",
        subtitle: "Nome da promoção",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Fisk",
        subtitle: "Nome da promoção",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Delicia",
        subtitle: "Promoção Cozinha de MasterChef",
        mainImage:
          "src/assets/images/projects/delicia/main-image-delicia-min.jpg",
        mobileImage: "src/assets/images/projects/delicia/mobile-delicia.jpg",
        description: `"Em meados de 2022, tive a oportunidade de contribuir para o desenvolvimento do site da Promoção "Cozinha de MasterChef" da Margarina Delícia, uma iniciativa da Seara Alimentos, proprietária da marca Delícia. Este projeto foi realizado enquanto eu estava integrado à equipe da Fenix System. No site, os participantes podiam cadastrar os códigos de barras dos produtos participantes, proporcionando-lhes a chance de concorrer a prêmios para aprimorar sua cozinha. A plataforma incluía páginas específicas, como a de cadastro, onde os usuários inseriam suas informações, a de registro dos códigos de barras para participação na promoção, e uma página para visualizar os bilhetes gerados, onde podiam verificar se algum deles havia sido premiado. Foi um projeto envolvente e prático, concentrado na interação direta com os consumidores, incentivando a participação ativa na promoção e proporcionando uma experiência fácil e intuitiva para os usuários."`,
        images: [
          {
            url: "src/assets/images/projects/delicia/1.jpg",
            description: "Home do Site",
          },

          {
            url: "src/assets/images/projects/delicia/3.jpg",
            description: "Pagina de Cadastro de Usuarios",
          },
          {
            url: "src/assets/images/projects/delicia/4.jpg",
            description: "Pagina de Login",
          },
          {
            url: "src/assets/images/projects/delicia/5.jpg",
            description: "Pagina de Cadastro de Cupom",
          },
          {
            url: "src/assets/images/projects/delicia/2.jpg",
            description: "Pagina de Ganhadores",
          },
        ],
      },
      {
        title: "Blog Dot Cosmeticos",
        subtitle: "Blog de uma loja de cosmeticos",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
      {
        title: "Blog DSS",
        subtitle: "Blog de uma distribuidora sexshop",
        mainImage: "",
        description: "",
        images: [
          {
            url: "",
            description: "",
          },
        ],
      },
    ],
  }),

  actions: {},

  getters: {},
});
