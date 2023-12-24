import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectsList", {
  state: () => ({
    projectsList: [
      {
        title: "Growth Suplementos",
        subtitle: "Loja / Marca de suplementos",
        mainImage: "/projects/growth/main-image-growth-min.jpg",
        mobileImage: "/projects/growth/home-growth-min.jpg",
        website: "https://www.gsuplementos.com.br",
        description: `Entre os anos de 2021 e 2023, tive a oportunidade de contribuir significativamente para o site da Growth Suplementos.
        
        O projeto foi desenvolvido na plataforma da WebArt, onde pude aplicar minhas habilidades e conhecimentos em design e desenvolvimento.Minha principal área de atuação foi na criação das páginas internas dos produtos, em colaboração estreita com a equipe de UI/UX.
        Busquei garantir uma experiência de usuário aprimorada, focando na apresentação clara e atrativa dos produtos oferecidos pela Growth Suplementos.Além disso, desempenhei um papel importante na configuração e criação de newsletters, aprimorando a comunicação com os clientes.
        
        A gestão das capturas de leads também esteve entre as minhas responsabilidades, visando expandir a base de usuários e fortalecer o relacionamento com a audiência.Foi uma experiência enriquecedora, onde pude aplicar minha paixão pelo design e pela interação com o usuário para contribuir para o sucesso online da Growth Suplementos.`,
        images: [
          {
            url: "/projects/growth/whey-min.jpg",
            description: "Pagina de produto do Whey Hidrolisado",
          },
          {
            url: "/projects/growth/albumina-min.jpg",
            description: "Pagina de produto da Albumina",
          },
          {
            url: "/projects/growth/crisp-min.jpg",
            description: "Pagina de produto da Barrinha Crisp",
          },
          {
            url: "/projects/growth/glutamina-min.jpg",
            description: "Pagina de produto da Glutamina",
          },
          {
            url: "/projects/growth/multi energy-min.jpg",
            description: "Pagina de produto do Multi Energy",
          },
        ],
      },
      {
        title: "Rak Logistica",
        subtitle: "Transportadora de Campinas-SP",
        mainImage: "/projects/raklog/main-image-raklog.jpg",
        mobileImage: "/projects/raklog/raklog-mobile.png",
        website: "http://www.raklog.com.br",
        description: `Em 2021, enquanto colaborava com a Agência Delucca, participei ativamente no desenvolvimento do site da Rak Logistics, localizada em Campinas-SP.
          
          O projeto incluiu a criação de um blog corporativo para compartilhar informações relevantes do setor logístico.
          Além disso, implementamos um sistema de rastreamento para proporcionar aos clientes uma experiência eficiente no monitoramento de suas remessas.

          A área de contato foi estrategicamente projetada para facilitar a interação dos clientes e potenciais funcionários, consolidando a presença online da Rak Logistics e aprimorando a comunicação com seu público-alvo.
          Foi uma colaboração gratificante, focada em fortalecer a presença digital e operacional da Rak Logistics.`,
        images: [
          {
            url: "/projects/raklog/1.jpg",
            description: "Home do Site",
          },
          {
            url: "/projects/raklog/2.jpg",
            description: "Pagina de Serviços oferecidos",
          },
          {
            url: "/projects/raklog/3.jpg",
            description: "Pagina  de Fale Conosco",
          },
          {
            url: "/projects/raklog/4.jpg",
            description: "Sobre a Emrpesa",
          },
          {
            url: "/projects/raklog/5.jpg",
            description: "Especificação de cada serviço",
          },
        ],
      },
      {
        title: "Netcoffee",
        subtitle: "Loja de cafés e insumos",
        mainImage: "/projects/netcoffee/main-image-netcoffee.webp",
        mobileImage: "/projects/netcoffee/mobile-netcoffee.webp",
        description: `Entre 2021 e 2023, durante meu emprego na Agência Delucca, contribuí significativamente para o site da Netcoffee, um fornecedor de cafés e insumos para empresas. Embora não tenha participado desde o início, dediquei grande parte do meu tempo à manutenção contínua e à criação de páginas de produtos.

        Destaquei-me na implementação de páginas de produtos específicos, conferindo a cada um design diferenciado e conteúdo personalizado. Essa abordagem visava não apenas promover os produtos, mas também proporcionar uma experiência envolvente aos visitantes.
        
        Particularmente, minha atuação foi crucial na manutenção do site, especialmente em relação a promoções sazonais, integração de novas funcionalidades e na otimização da captura de leads. Essas atividades visavam melhorar a experiência do usuário, impulsionar as vendas e manter o site alinhado com as necessidades dinâmicas do mercado de cafés corporativos.`,
        images: [
          {
            url: "/projects/netcoffee/1.webp",
            description: "Home do site",
          },
          {
            url: "/projects/netcoffee/2.webp",
            description: "Página de produto",
          },
          {
            url: "/projects/netcoffee/3.webp",
            description: "Página de categorias",
          },
        ],
      },
      {
        title: "Cheirinho Pet",
        subtitle: "Marca / Loja de Perfumes Pet",
        mainImage: "/projects/cheirinho-pet/main-image-cheirinho-pet.webp",
        mobileImage: "/projects/cheirinho-pet/mobile-cheirinho-pet.webp",
        website: "https://www.cheirinhopet.com.br",
        description: `Em 2023, fui encarregado de desenvolver o e-commerce da Cheirinho Pet como um projeto direto para a empresa. Fui responsável por criar o design, UI/UX e o conceito do site, baseando-me no conteúdo já existente no Instagram da marca. O site, construído na plataforma da Loja Integrada, oferece uma experiência de compra eficiente e amigável para os usuários.

        Uma característica distintiva do projeto é a mudança dinâmica de cores nas páginas de produtos, alinhando-se com as categorias específicas do inventário e seguindo a paleta utilizada no layout do site. Esta abordagem não apenas adiciona um elemento visual atrativo, mas também facilita a navegação, destacando a diversidade de produtos oferecidos pela Cheirinho Pet.
        
        Destacando-se no aspecto social, a Cheirinho Pet estabeleceu parcerias com diversas instituições de caridade. A cada compra realizada, a empresa compromete-se a doar 1 real para ajudar animais em situação de rua. Essa iniciativa reforça o compromisso da marca com o bem-estar animal, proporcionando aos clientes não apenas produtos de alta qualidade, mas também a oportunidade de contribuir para uma causa nobre.
        `,
        images: [
          {
            url: "/projects/cheirinho-pet/1.webp",
            description: "Home do site",
          },
          {
            url: "/projects/cheirinho-pet/2.webp",
            description: "Home do site",
          },
          {
            url: "/projects/cheirinho-pet/3.webp",
            description: "Home do site",
          },
          {
            url: "/projects/cheirinho-pet/4.webp",
            description: "Home do site",
          },
          {
            url: "/projects/cheirinho-pet/5.webp",
            description: "Home do site",
          },
        ],
      },
      {
        title: "Anjara",
        subtitle: "Loja / Marca de perfumes para lojas",
        mainImage: "/projects/anjara/main-image-anjara.webp",
        mobileImage: "/projects/anjara/mobile-anjara.webp",
        description: `Entre 2022 e o início de 2023, fui o responsável exclusivo pela criação do e-commerce da marca Anjara, utilizando a plataforma Loja Integrada. A Anjara, especializada em perfumes para ambientes, direciona-se principalmente a lojas e escritórios, destacando-se como uma marca mono produto.

        Assumindo o projeto desde sua concepção, desenvolvi individualmente o layout do e-commerce, UI/UX, identidade da empresa, esquema de cores e outros elementos, buscando transmitir visualmente a essência única da marca, que tinha apenas o logo quando iniciamos a colaboração.
        
        Apesar de estar hospedado na plataforma Loja Integrada, o objetivo principal do e-commerce é incentivar os consumidores a entrar em contato com os vendedores para obter preços mais vantajosos. O design é intencionalmente simples, focando nos benefícios dos produtos Anjara e em como eles podem aprimorar ambientes comerciais. Este projeto destaca a singularidade do produto enquanto proporciona uma experiência de compra direta para os clientes interessados.`,
        website: "https://www.sintaanjara.com",
        images: [
          {
            url: "/projects/anjara/1.webp",
            description: "Home do site",
          },
          {
            url: "/projects/anjara/2.webp",
            description: "Pagina de produto",
          },
        ],
      },
      {
        title: "Banco Original",
        subtitle: "Promoção Você na A Fazenda 14",
        mainImage: "/projects/banco-original/main-image-banco-original.jpg",
        mobileImage: "/projects/banco-original/mobile-banco-original.png",
        description: `Em 2021, enquanto fazia parte da equipe da Fenyx System, tive a responsabilidade de desenvolver o site para a promoção "Você na A Fazenda 14" em parceria com o Banco Original.
        
        A construção do site foi realizada de maneira completa utilizando HTML, CSS e JavaScript, destacando a solidez e eficiência da nossa abordagem técnica.
        O site proporcionava aos usuários uma experiência única ao integrar-se diretamente com o aplicativo do Banco Original, utilizando queries e a API do aplicativo.
        
        Ao inserir seus dados bancários, as ações realizadas na conta geravam números da sorte, oferecendo aos participantes a oportunidade de concorrer a prêmios em dinheiro. Essa integração inovadora não apenas simplificou a participação dos usuários, mas também evidenciou a capacidade tecnológica avançada da promoção.
        Foi um projeto emocionante, concentrado na construção de uma plataforma interativa e eficiente, proporcionando aos clientes do Banco Original uma experiência envolvente e personalizada.`,
        images: [
          {
            url: "/projects/banco-original/1.jpg",
            description: "Home do site",
          },
          {
            url: "/projects/banco-original/2.jpg",
            description: "Pagina de ganhadores",
          },
          {
            url: "/projects/banco-original/3.jpg",
            description: "Pagina de FAQ",
          },

          {
            url: "/projects/banco-original/5.jpg",
            description: "Pagina de login",
          },

          {
            url: "/projects/banco-original/7.jpg",
            description: "Pagina de numeros da sorte",
          },
        ],
      },
      {
        title: "Toddynho",
        subtitle: "Promoção Lanche Premiado",
        mainImage: "/projects/toddynho/main-image-toddynho.jpg",
        mobileImage: "/projects/toddynho/mobile-toddynho.jpg",
        description: `"Em 2022, durante meu período na Fenyx System, tive a oportunidade de desenvolver o site para a promoção "Lanche Premiado da Toddynho".
        
        O projeto foi totalmente concebido em HTML, CSS e JavaScript, garantindo uma experiência interativa e responsiva para os usuários. No site, os participantes podiam cadastrar os códigos de barras dos produtos Toddynho, e o sistema gerava automaticamente cupons de participação.
        
        Após alguns dias, os participantes podiam verificar se haviam sido sorteados, concorrendo a prêmios como viagens e dinheiro. Além disso, o site contava com páginas específicas que destacavam os locais no Brasil onde ocorreram os ganhadores, proporcionando transparência e engajamento aos participantes ao mostrar os resultados da promoção em diferentes regiões do país."`,
        images: [
          {
            url: "/projects/toddynho/1.jpg",
            description: "Home do Site",
          },
          {
            url: "/projects/toddynho/4.jpg",
            description: "Pagina de cupons",
          },
          {
            url: "/projects/toddynho/5.jpg",
            description: "Pagina de produtos participantes",
          },
          {
            url: "/projects/toddynho/6.jpg",
            description: "pagina de instruções",
          },
        ],
      },
      {
        title: "Liquigás",
        subtitle: "Promoção Copa na Cozinha",
        mainImage: "/projects/liquigas/main-image-liquigas.webp",
        mobileImage: "/projects/liquigas/mobile-liquigas.webp",
        description: `Em meados de 2021, durante meu período na Fenix System, tive a oportunidade de desenvolver o site para a Promoção "Copa na Cozinha", uma iniciativa da empresa Liquigás em antecipação à Copa de 2022. O projeto visava promover a marca e envolver os clientes de maneira temática e animada.

        O site foi concebido como um ambiente totalmente temático, com campos de futebol substituindo os tradicionais campos de texto, traves de gol decorando iframes de vídeos do YouTube e bolas de futebol incorporadas nos textos. A animação, inteiramente realizada com CSS, criou uma atmosfera dinâmica e envolvente, alinhada ao espírito esportivo da promoção.
        
        Na página de cadastro, implementei um elemento criativo: uma bola de futebol giratória que reagia às informações inseridas pelo usuário, acompanhada por ícones representativos. Essa abordagem interativa adicionou um toque lúdico ao processo de cadastro, tornando-o mais atraente e estimulando a participação na promoção "Copa na Cozinha".`,
        images: [
          {
            url: "/projects/liquigas/1.webp",
            description: "Home do site",
          },
          {
            url: "/projects/liquigas/2.webp",
            description: "Home do site",
          },
          {
            url: "/projects/liquigas/3.webp",
            description: "Home do site",
          },
          {
            url: "/projects/liquigas/4.webp",
            description: "Home do site",
          },
        ],
      },
      {
        title: "Ibra Megalab",
        subtitle: "Laboratório de Analise de solos",
        mainImage: "/projects/ibra/main-image-ibra.webp",
        mobileImage: "/projects/ibra/mobile-ibra.webp",
        website: "https://ibramegalab.ag",
        description: `
        Em 2023, durante meu tempo na Agência Delucca, tive a oportunidade de desenvolver o site para a Ibra Megalab, uma empresa especializada em análise de solos. O site foi cuidadosamente projetado para destacar os serviços especializados oferecidos pela empresa, com um enfoque particular na análise de solos para plantações.
        
        Optei por construir o site na plataforma WordPress, aproveitando a versatilidade da plataforma, especialmente para integrar um blog informativo sobre solos e práticas agrícolas. Essa seção permitia à Ibra Megalab compartilhar conhecimentos e estabelecer autoridade no setor.
        
        Além disso, o site foi projetado com uma seção dedicada para que os usuários pudessem solicitar orçamentos e entrar em contato diretamente com a empresa. Essa funcionalidade facilitou a interação entre a Ibra Megalab e seus clientes em potencial, proporcionando uma experiência mais acessível e personalizada.`,
        images: [
          {
            url: "/projects/ibra/1.webp",
            description: "Home do site",
          },
          {
            url: "/projects/ibra/2.webp",
            description: "Página de Serviços",
          },
          {
            url: "/projects/ibra/3.webp",
            description: "Página de posts",
          },
          {
            url: "/projects/ibra/4.webp",
            description: "Página de Orçamentos / Contato",
          },
          {
            url: "/projects/ibra/5.webp",
            description: "Pagina de locais dos laboratórios",
          },
          {
            url: "/projects/ibra/6.webp",
            description: "Pagina de Sobre Nós",
          },
        ],
      },
      {
        title: "Sun Protect",
        subtitle: "Loja de Insulfims",
        mainImage: "/projects/sun-protect/main-image-sun-protect.webp",
        mobileImage: "/projects/sun-protect/mobile-sun-protect.webp",
        description: `Entre 2021 e 2022, durante meu período na Agência Delucca, tive a responsabilidade de desenvolver o site para a marca de Insulfim Sun Protect. O projeto consistiu em um e-commerce especializado, oferecendo aos clientes uma experiência personalizada na escolha de insulfim para seus projetos.

        O site permitia aos clientes não apenas escolher a visibilidade, dimensão e espessura do insulfim, mas também oferecia uma variedade de ferramentas para instaladores. Essa abordagem abrangente visava atender às diversas necessidades de profissionais e consumidores finais.
        
        Cada página de produto foi projetada com atenção aos detalhes, fornecendo descrições abrangentes. Incluí caixas de perguntas para esclarecer dúvidas, imagens ilustrativas para uma compreensão visual e dicas de instalação para orientar os clientes. Esses elementos adicionais visavam enriquecer a experiência do usuário e garantir que os clientes tomassem decisões informadas sobre suas compras.`,
        images: [
          {
            url: "/projects/sun-protect/1.webp",
            description: "Home do Site",
          },
          {
            url: "/projects/sun-protect/2.webp",
            description: "Página de produtos",
          },
          {
            url: "/projects/sun-protect/3.webp",
            description: "Pagina de categorias",
          },
        ],
      },
      {
        title: "Rock in Rio e C&A",
        subtitle: "Promoção Look Premiado C&A",
        mainImage: "/projects/cea/main-image-cea.webp",
        mobileImage: "/projects/cea/mobile-cea.webp",
        description: `Em 2022, durante meu período na Fenix System, tive o privilégio de desenvolver o site para a promoção "Look Premiado" da marca de roupas C&A, em parceria com o Rock In Rio. O projeto foi elaborado para oferecer uma experiência única aos participantes, integrando-se diretamente com a API do aplicativo da C&A para uma participação mais eficiente.

        O site simplificou o processo de cadastro, conectando-se diretamente à API do APP da C&A. Isso permitiu que os cupons fossem automaticamente registrados, proporcionando aos participantes uma experiência sem atritos.
        
        Na promoção, os participantes concorriam a ingressos para o Rock in Rio, além de prêmios em dinheiro, tornando a experiência ainda mais atrativa. O site incluiu uma página de ganhadores, proporcionando transparência quanto aos resultados, e uma página dedicada para cadastro e login, simplificando a participação dos interessados.`,
        images: [
          {
            url: "/projects/cea/1.webp",
            description: "Home do Site",
          },
          {
            url: "/projects/cea/2.webp",
            description: "Página de Ganhadores",
          },
          {
            url: "/projects/cea/3.webp",
            description: "Página de Cadastro",
          },
        ],
      },
      {
        title: "Nissin",
        subtitle: "Promoção seu Nissin Vira Prêmio",
        mainImage: "/projects/nissin/main-image-nissin.webp",
        mobileImage: "/projects/nissin/mobile-nissin.webp",
        description: `
        Em 2021, durante minha atuação na Fenix System, desenvolvi o site para a Promoção "Seu Nissin Vira Prêmio" da Nissin. Com uma mecânica simples, os participantes cadastravam os códigos dos produtos participantes, concorrendo assim a prêmios em dinheiro.
        
        O site apresentava páginas dedicadas a facilitar a participação, incluindo cadastro, login, visualização dos ganhadores e acesso ao regulamento. Notavelmente, o regulamento podia ser baixado em formato PDF ou lido diretamente no site por meio de um iframe de leitura, proporcionando transparência e acessibilidade aos participantes.
        
        Foi um projeto focado em simplicidade e eficiência, proporcionando uma experiência direta aos usuários interessados na promoção "Seu Nissin Vira Prêmio" da Nissin.`,
        images: [
          {
            url: "/projects/nissin/1.webp",
            description: "Home do site",
          },
          {
            url: "/projects/nissin/2.webp",
            description: "Página de cadastro de cupom",
          },
          {
            url: "/projects/nissin/3.webp",
            description: "Página de ganhadores",
          },
          {
            url: "/projects/nissin/4.webp",
            description: "Página de regulamento",
          },
        ],
      },
      {
        title: "Sym",
        subtitle: "Promoção Diga Sym pra Você",
        mainImage: "/projects/sym/main-image-sym.webp",
        mobileImage: "/projects/sym/mobile-sym.webp",
        description: `
        Em 2021, durante meu período na Fenix System, tive a oportunidade de criar o site para a promoção "Diga Sym para Você" da marca de absorventes íntimos Sym. Esta promoção inovadora oferecia aos clientes a chance de receber parte do valor gasto com absorventes de volta por meio de cashback.
        
        O site foi estruturado com uma página dedicada aos produtos participantes, apresentando um modal detalhado com tabelas que destacavam todos os produtos e suas pontuações para a promoção. Essa abordagem proporcionava uma visão clara e acessível dos benefícios oferecidos pela promoção.
        
        Uma página de ganhadores, atualizada diariamente, fornecia uma lista completa de todas as pessoas que receberam cashback por meio da promoção, juntamente com o valor total já devolvido. Isso não apenas destacava o sucesso da promoção, mas também aumentava a transparência e confiança dos participantes.
        
        Além disso, o site incluía uma página de regulamento, onde os detalhes poderiam ser baixados em formato PDF ou lidos diretamente no site por meio de um iframe de leitura. Esta abordagem garantia que os participantes tivessem fácil acesso às regras e diretrizes da promoção. Foi um projeto que uniu funcionalidade, transparência e interatividade para tornar a promoção "Diga Sym para Você" uma experiência envolvente e confiável para os consumidores.`,
        images: [
          {
            url: "/projects/sym/1.webp",
            description: "Home do site",
          },
          {
            url: "/projects/sym/2.webp",
            description: "Pagina de Produtos Participantes",
          },
          {
            url: "/projects/sym/3.webp",
            description: "Pagina de Ganhadores",
          },
          {
            url: "/projects/sym/4.webp",
            description: "Pagina de Login / Cadastro",
          },
          {
            url: "/projects/sym/5.webp",
            description: "Pagina de Regulamento",
          },
        ],
      },
      {
        title: "Bitz",
        subtitle: "Promoção Golaço Bitz",
        mainImage: "/projects/bitz/main-image-bitz.webp",
        mobileImage: "/projects/bitz/mobile-bitz.webp",
        description: `
        Em 2021, durante minha colaboração na Fenix System, tive o privilégio de desenvolver o site para a Promoção Golaço Bitz do banco digital Bitz. Nessa promoção inovadora, os usuários ganhavam números da sorte ao realizar compras com o cartão Bitz, concorrendo assim a uma TV LG de 50 polegadas.
        
        O site foi integralmente integrado com o aplicativo da Bitz, simplificando o processo para os usuários. O login, cadastro e a geração de números da sorte eram todos realizados diretamente no aplicativo. Essa integração proporcionou uma experiência fluida e consistente para os participantes.
        
        Osite incluía uma seção de números da sorte, onde os usuários podiam verificar se haviam sido sorteados. Adicionalmente, o site apresentava uma página dedicada aos ganhadores, fornecendo transparência quanto aos resultados da promoção. Outras seções importantes incluíam uma página de FAQ para esclarecimento de dúvidas e uma página de regulamento, onde os participantes podiam baixar o documento em PDF ou lê-lo diretamente no site através de um iframe de leitura. Essa abordagem garantia que os participantes tivessem fácil acesso às informações cruciais da promoção.
        `,
        images: [
          {
            url: "/projects/bitz/1.webp",
            description: "Home do site",
          },
          {
            url: "/projects/bitz/2.webp",
            description: "Página de Numeros da Sorte",
          },
          {
            url: "/projects/bitz/3.webp",
            description: "Página de Ganhadores",
          },
          {
            url: "/projects/bitz/4.webp",
            description: "Página de Regulamento",
          },
          {
            url: "/projects/bitz/5.webp",
            description: "FAQ",
          },
        ],
      },
      {
        title: "Claro Brasil",
        subtitle: "Promoção Ta na Claro ta na Copa",
        mainImage: "/projects/claro/main-image-claro.jpg",
        mobileImage: "/projects/claro/mobile-claro.png",
        description: `Em 2021, enquanto trabalhava na Fenix System, tive a responsabilidade de desenvolver o site para a Promoção "Tá na Claro, Tá na Copa", em preparação para a aguardada Copa do Mundo do Qatar em 2022. A parceria com a Claro Brasil envolveu a implementação do site com base no design proporcionado pelo talentoso time de marketing da empresa.
        O site apresentava uma abordagem dinâmica com três fases distintas, automatizando as mudanças com base nas datas cadastradas na API da promoção. Essa funcionalidade proporcionou uma experiência interativa e personalizada aos usuários, alinhada aos eventos específicos da Copa do Mundo.
        
        Uma característica única do projeto foi a integração direta com o aplicativo da Claro. Os usuários ganhavam bilhetes automaticamente em suas contas Claro e podiam visualizá-los no site. Cada bilhete gerava uma experiência de "raspadinha virtual", permitindo que os participantes simulassem o ato de raspar um bilhete com o mouse ou tela sensível ao toque para descobrir se haviam sido premiados.`,
        images: [
          {
            url: "/projects/claro/1.jpg",
            description: "Home da primeira fase da promoção",
          },
          {
            url: "/projects/claro/claro-ultima-fase.png",
            description: "Home da ultima fase da promoção",
          },
          {
            url: "/projects/claro/2.jpg",
            description: "Página de ganhadores",
          },
          {
            url: "/projects/claro/3.jpg",
            description: "Página de opt-in / cadastro",
          },
          {
            url: "/projects/claro/4.jpg",
            description: "Página de Meus bilhetes",
          },
          {
            url: "/projects/claro/6.jpg",
            description: "Interação de raspar o bilhete",
          },
          {
            url: "/projects/claro/7.jpg",
            description: "Resultado do bilhete premiado",
          },
        ],
      },
      {
        title: "Elma Chips",
        subtitle: "Promoção Fanáticos por Sabor",
        mainImage: "/projects/elma-chips/main-image-elmachips.webp",
        mobileImage: "/projects/elma-chips/mobile-elmachips.webp",
        description: `
        Em 2021, durante meu tempo na Fenix System, tive a oportunidade de desenvolver o site para a Promoção "Fanáticos por Sabor" da renomada marca de salgadinhos Elma Chips. O projeto visava envolver os consumidores de maneira interativa e emocionante.
        
        O site foi estruturado com uma página dedicada aos produtos participantes, oferecendo uma visão clara dos itens elegíveis para a promoção. Além disso, uma página de ganhadores era atualizada diariamente, proporcionando transparência quanto aos resultados e aumentando a expectativa dos participantes.
        
        Para facilitar o entendimento da promoção, o site incluiu uma página de FAQ, respondendo às perguntas mais comuns dos participantes. Além disso, uma página de regulamento foi disponibilizada, permitindo que os interessados baixassem o documento em PDF ou o lessem diretamente no site por meio de um iframe de leitura. Essa abordagem assegurava que os consumidores tivessem fácil acesso às informações cruciais da promoção.`,
        images: [
          {
            url: "/projects/elma-chips/1.webp",
            description: "Home do site",
          },
          {
            url: "/projects/elma-chips/2.webp",
            description: "Página de Produtos participantes",
          },
          {
            url: "/projects/elma-chips/3.webp",
            description: "Página de Ganhadores",
          },
          {
            url: "/projects/elma-chips/4.webp",
            description: "Página de FAQ",
          },
          {
            url: "/projects/elma-chips/5.webp",
            description: "Página de Regulamento",
          },
        ],
      },
      {
        title: "Fisk",
        subtitle: "Promoção Malas Prontas para o Canadá",
        mainImage: "/projects/fisk/main-image-fisk.webp",
        mobileImage: "/projects/fisk/mobile-fisk.webp",
        description: `
        Em 2021, enquanto fazia parte da equipe da Fenix System, desenvolvi o site para a promoção "Malas Prontas para o Canadá" da Escola de Inglês FISK. Uma inovação chave foi a integração direta com a API do Portal do Aluno FISK, proporcionando aos estudantes códigos exclusivos para participação na promoção.
        
        A conectividade com a API do Portal do Aluno FISK tornou o processo de participação mais fluido e personalizado. Cada aluno recebia um código específico, obtido através da plataforma educacional, que era então utilizado no site da promoção para concorrer à viagem ao Canadá.
        
        Além disso, o site incluiu uma página de regulamento, onde os detalhes podiam ser baixados em formato PDF ou lidos diretamente no site através de um iframe de leitura. Essa abordagem garantiu transparência quanto às regras da promoção e incentivou a participação dos alunos de maneira mais acessível e informativa.`,
        images: [
          {
            url: "/projects/fisk/1.webp",
            description: "Home do site",
          },
          {
            url: "/projects/fisk/2.webp",
            description: "Página de ganhadores",
          },
          {
            url: "/projects/fisk/3.webp",
            description: "Pagina de cadastro / Login",
          },
          {
            url: "/projects/fisk/4.webp",
            description: "Pagina de regulamento",
          },
        ],
      },
      {
        title: "Delicia",
        subtitle: "Promoção Cozinha de MasterChef",
        mainImage: "/projects/delicia/main-image-delicia.jpg",
        mobileImage: "/projects/delicia/mobile-delicia.jpg",
        description: `Em meados de 2022, tive a oportunidade de contribuir para o desenvolvimento do site da Promoção "Cozinha de MasterChef" da Margarina Delícia, uma iniciativa da Seara Alimentos, proprietária da marca Delícia. Este projeto foi realizado enquanto eu estava integrado à equipe da Fenix System. No site, os participantes podiam cadastrar os códigos de barras dos produtos participantes, proporcionando-lhes a chance de concorrer a prêmios para aprimorar sua cozinha. A plataforma incluía páginas específicas, como a de cadastro, onde os usuários inseriam suas informações, a de registro dos códigos de barras para participação na promoção, e uma página para visualizar os bilhetes gerados, onde podiam verificar se algum deles havia sido premiado. Foi um projeto envolvente e prático, concentrado na interação direta com os consumidores, incentivando a participação ativa na promoção e proporcionando uma experiência fácil e intuitiva para os usuários.`,
        images: [
          {
            url: "/projects/delicia/1.jpg",
            description: "Home do Site",
          },

          {
            url: "/projects/delicia/3.jpg",
            description: "Pagina de Cadastro de Usuarios",
          },
          {
            url: "/projects/delicia/4.jpg",
            description: "Pagina de Login",
          },
          {
            url: "/projects/delicia/5.jpg",
            description: "Pagina de Cadastro de Cupom",
          },
          {
            url: "/projects/delicia/2.jpg",
            description: "Pagina de Ganhadores",
          },
        ],
      },

      {
        title: "Blog DSS",
        subtitle: "Blog de uma distribuidora sexshop",
        mainImage: "/projects/blog-dss/main-image-blog-dss.jpg",
        mobileImage: "/projects/blog-dss/mobile-blog-dss.png",
        website: "https://blog.distribuidorasexshop.com.br",
        description: `Em 2022, durante meu período na Agência Delucca, tive o prazer de desenvolver o site para o Blog da Distribuidora SexShop DSS. O principal objetivo do site era direcionar os visitantes para a loja oficial da DSS, promovendo seus produtos de forma atrativa. A principal autora do blog, Waleviska Saniele, liderava a produção de conteúdo.
        O site foi construído utilizando WordPress, visando facilitar a edição e publicação de posts pela equipe da Distribuidora SexShop DSS. Essa escolha permitiu que a autora e a equipe de marketing gerenciassem o conteúdo de maneira eficiente, mantendo o blog atualizado e envolvente para atrair novos clientes para a loja online. Foi um projeto que combinou funcionalidade e praticidade para atender às necessidades específicas da Distribuidora SexShop DSS.`,
        images: [
          {
            url: "/projects/blog-dss/1.jpg",
            description: "Home do site",
          },
          {
            url: "/projects/blog-dss/2.jpg",
            description: "Post simples do blog",
          },
          {
            url: "/projects/blog-dss/3.jpg",
            description: "Pagina sobre a escritora",
          },
          {
            url: "/projects/blog-dss/4.jpg",
            description: "Pagina de pesquisa por posts",
          },
        ],
      },
    ],
  }),

  actions: {},

  getters: {},
});
