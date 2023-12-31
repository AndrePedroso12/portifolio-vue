import { defineStore } from "pinia";

export const useProgramingStore = defineStore("programing", {
  state: () => ({
    programing: [
      {
        name: "HTML5",
        icon: "fa-html5",
        color: "#F36518",
        description: `O HTML5, ou HyperText Markup Language 5, é a quinta e mais recente versão da linguagem de marcação fundamental para a construção de páginas web. Lançado em outubro de 2014, o HTML5 trouxe consigo uma série de avanços e novos recursos que revolucionaram a experiência de desenvolvimento web. Sua estrutura mais semântica permite uma codificação mais clara e compreensível, enquanto suas novas tags e atributos oferecem suporte nativo para elementos multimídia, como áudio e vídeo, tornando a criação de conteúdo mais rica e dinâmica.
        
        No desenvolvimento front-end, o HTML5 desempenha um papel central na estruturação e organização do conteúdo de uma página web. Ele fornece a base sobre a qual os desenvolvedores constroem interfaces interativas e responsivas, facilitando a criação de layouts modernos e acessíveis. Além disso, o HTML5 trabalha em conjunto com outras tecnologias, como CSS e JavaScript, para proporcionar uma experiência de usuário mais fluida e envolvente, contribuindo assim para a evolução constante do design web e das aplicações interativas na internet.`,
      },
      {
        name: "CSS3",
        icon: "fa-css3-alt",
        color: "#264DE4",
        description: `O CSS3, ou Cascading Style Sheets 3, representa a terceira e mais avançada iteração da linguagem de estilo fundamental para o desenvolvimento web. Lançado para complementar o HTML5, o CSS3 foi introduzido para proporcionar aos desenvolvedores web maior controle e flexibilidade sobre o design e a apresentação das páginas. Suas características inovadoras incluem seletores avançados, transições suaves, sombras, gradientes e animações, oferecendo uma gama ampliada de ferramentas para a criação de interfaces esteticamente atraentes e altamente interativas.

        No contexto do front-end, o CSS3 desempenha um papel crucial na estilização e no layout das páginas web. Ao permitir a definição de estilos para diferentes dispositivos e resoluções, o CSS3 contribui para a criação de designs responsivos que se adaptam harmoniosamente a uma variedade de tamanhos de tela. Além disso, suas capacidades de animação e transformação proporcionam uma experiência de usuário mais envolvente, elevando o nível de interatividade e sofisticação visual nas aplicações online. Em conjunto com o HTML5 e o JavaScript, o CSS3 forma a tríade essencial para o desenvolvimento front-end moderno, capacitando os desenvolvedores a criar interfaces web visualmente atraentes e funcionalmente poderosas.`,
      },
      {
        name: "SASS",
        icon: "fa-sass",
        color: "#cf649a",
        description: `O SASS, ou Syntactically Awesome Stylesheets, representa uma extensão poderosa e flexível da linguagem CSS. Desenvolvido para simplificar e aprimorar a autoria de estilos em folhas de estilo, o SASS introduz conceitos como variáveis, aninhamento, mixins, e operadores, oferecendo aos desenvolvedores uma abordagem mais modular e eficiente na criação e manutenção de estilos complexos. Com uma sintaxe mais amigável e expressiva, o SASS permite uma codificação mais limpa e organizada, facilitando a gestão de estilos em projetos de larga escala.
        
        No cenário de desenvolvimento front-end, o SASS é amplamente adotado para melhorar a legibilidade e a manutenção de código CSS. Suas funcionalidades avançadas, como a capacidade de reutilização de código por meio de mixins e a definição de variáveis para propriedades comuns, resultam em um fluxo de trabalho mais eficiente. Além disso, o SASS suporta a criação de folhas de estilo mais dinâmicas e adaptáveis, permitindo a geração de estilos personalizados com base em lógica condicional. Integrado a projetos web, o SASS otimiza o desenvolvimento de estilos, proporcionando uma abordagem mais modular, escalável e fácil de manter no contexto do front-end.`,
      },

      {
        name: "Vue Js",
        icon: "fa-vuejs",
        color: "#41B883",
        description: `O Vue.js é um framework JavaScript progressivo, voltado para o desenvolvimento de interfaces de usuário interativas e dinâmicas. Criado por Evan You e lançado em 2014, o Vue.js destaca-se por sua abordagem incremental, o que significa que pode ser adotado de maneira flexível, seja para aprimorar partes específicas de uma aplicação existente ou para desenvolver projetos totalmente novos. Com uma curva de aprendizado suave e uma documentação abrangente, o Vue.js tornou-se uma escolha popular entre desenvolvedores web.

        No contexto do desenvolvimento front-end, o Vue.js permite a criação de componentes reutilizáveis, promovendo a modularidade do código e facilitando a manutenção. Sua reatividade bidirecional simplifica a manipulação do DOM (Document Object Model), garantindo uma interface de usuário responsiva e eficiente. O Vue.js também oferece diretivas customizadas, como v-if e v-for, que simplificam a manipulação e exibição dinâmica de dados. Além disso, a integração fácil com outras bibliotecas ou frameworks e sua capacidade de escalar conforme necessário fazem do Vue.js uma escolha versátil para projetos de diferentes tamanhos.
        `,
      },
      {
        name: "React",
        icon: "fa-react",
        color: "#4AD5FF",
        description: `O React.js, desenvolvido e mantido pelo Facebook, é uma biblioteca JavaScript de código aberto amplamente utilizada para construir interfaces de usuário dinâmicas e eficientes. Lançado em 2013, o React rapidamente ganhou popularidade devido à sua abordagem inovadora de construir componentes reutilizáveis e à sua eficiente manipulação do DOM (Document Object Model). Essa biblioteca é especialmente conhecida por sua virtual DOM, que otimiza as atualizações de interface, resultando em um desempenho notável em aplicações web complexas.

        No desenvolvimento front-end, o React promove a construção modular de UIs por meio de componentes, que encapsulam lógica e apresentação de forma isolada. Isso facilita a manutenção e a escalabilidade do código. Além disso, o React utiliza o conceito de um fluxo unidirecional de dados, o que simplifica a compreensão e o rastreamento do estado da aplicação. Sua flexibilidade também se destaca, permitindo a integração fácil com outras bibliotecas e frameworks, adaptando-se a diferentes requisitos e ecossistemas de desenvolvimento.`,
      },
      {
        name: "JavaScript",
        icon: "fa-square-js",
        color: "#F7DF1E",
        description: `O JavaScript é uma linguagem de programação amplamente utilizada no desenvolvimento web, sendo essencial para a construção de interfaces interativas e dinâmicas. Criada inicialmente pela Netscape em 1995, a linguagem tornou-se uma peça fundamental para o front-end, permitindo que desenvolvedores criem experiências de usuário envolventes e responsivas. Além disso, o JavaScript é suportado por todos os principais navegadores, garantindo sua ubiquidade na construção de aplicações web.

        No desenvolvimento front-end, o JavaScript possibilita a manipulação do DOM (Document Object Model), o que permite a interação dinâmica com elementos da página. Ele também é frequentemente utilizado para realizar requisições assíncronas, facilitando a comunicação com servidores e a atualização de conteúdo sem a necessidade de recarregar a página. A introdução de frameworks como React, Angular e Vue.js impulsionou ainda mais o uso do JavaScript, simplificando o desenvolvimento de aplicações mais complexas por meio da organização modular e reativa do código.`,
      },
      {
        name: "Wordpress",
        icon: "fa-wordpress",
        color: "#21759B",
        description: `O WordPress é uma plataforma de gerenciamento de conteúdo (CMS) extremamente popular que simplifica a criação e manutenção de sites, blogs e lojas online. Lançado em 2003, o WordPress evoluiu de uma ferramenta de blogs para uma solução robusta, permitindo que usuários criem e personalizem seus sites com facilidade, mesmo sem conhecimento avançado em programação. O ecossistema do WordPress é alimentado por uma comunidade ativa de desenvolvedores que contribuem com temas e plugins, ampliando as funcionalidades da plataforma.

        No front end, o WordPress desempenha um papel crucial na experiência do usuário. Através de uma ampla variedade de temas responsivos, os desenvolvedores podem personalizar o design e a aparência dos sites para atender às necessidades específicas. Além disso, o WordPress permite a criação de páginas dinâmicas usando uma interface amigável, possibilitando aos usuários finais editar e atualizar conteúdo sem depender de habilidades técnicas. Sua flexibilidade, escalabilidade e a capacidade de integração com diversas ferramentas fazem do WordPress uma escolha popular no desenvolvimento front end, oferecendo uma solução eficiente para criar websites visualmente atraentes e funcionais.`,
      },
      {
        name: "Loja Integrada",
        icon: "fa-uikit",
        color: "#2BC4C2",
        description: `A Loja Integrada é uma plataforma de e-commerce brasileira que se destaca pela simplicidade e eficácia na criação de lojas online. Fundada em 2011, a plataforma oferece uma solução completa, desde a configuração inicial até a gestão de produtos e transações. O sistema da Loja Integrada é construído integralmente com tecnologias web modernas, sendo baseado no trio poderoso de JQuery, CSS3 e HTML5. Essa base tecnológica proporciona uma experiência de usuário fluida e responsiva, garantindo que as lojas desenvolvidas na plataforma sejam visualmente atraentes e altamente funcionais.

        O uso de JQuery, uma biblioteca JavaScript, permite a criação de interatividade dinâmica nas páginas da loja, enquanto o CSS3 oferece opções avançadas de estilização, incluindo animações e layout responsivo. O HTML5, por sua vez, proporciona uma estrutura semântica e moderna para a construção das páginas. Essa combinação de tecnologias web de ponta confere à Loja Integrada a capacidade de fornecer aos comerciantes online uma presença digital robusta, adaptável e esteticamente agradável, destacando-se como uma opção popular para empreendedores que buscam uma plataforma intuitiva e eficiente para o comércio eletrônico no Brasil.`,
      },
    ],
  }),

  actions: {},

  getters: {},
});

export const useWebDesingStore = defineStore("desing", {
  state: () => ({
    desing: [
      {
        name: "figma",
        icon: [
          "M0 15.4635C0 7.40379 6.50629 0.870117 14.5323 0.870117H39.4677C47.4937 0.870117 54 7.40379 54 15.4635C54 20.5669 51.3913 25.0586 47.4398 27.6669C51.3913 30.2754 54 34.7669 54 39.8704C54 47.9302 47.4937 54.4639 39.4677 54.4639H39.1522C35.3896 54.4639 31.9609 53.0279 29.3801 50.6719V64.1182C29.3801 72.2854 22.7037 78.8701 14.6106 78.8701C6.60464 78.8701 0 72.3564 0 64.2767C0 59.1734 2.60849 54.682 6.5596 52.0736C2.60849 49.4652 0 44.9736 0 39.8704C0 34.7669 2.60872 30.2754 6.5601 27.6669C2.60872 25.0586 0 20.5669 0 15.4635ZM24.6199 30.0572H14.5323C9.13525 30.0572 4.76017 34.4508 4.76017 39.8704C4.76017 45.2692 9.10151 49.6497 14.4698 49.6835C14.4906 49.6833 14.5113 49.6833 14.5323 49.6833H24.6199V30.0572ZM29.3801 39.8704C29.3801 45.2901 33.7551 49.6836 39.1522 49.6836H39.4677C44.8648 49.6836 49.2398 45.2901 49.2398 39.8704C49.2398 34.4508 44.8648 30.0572 39.4677 30.0572H39.1522C33.7551 30.0572 29.3801 34.4508 29.3801 39.8704ZM14.5323 54.4639C14.5113 54.4639 14.4906 54.4637 14.4698 54.4637C9.10151 54.4974 4.76017 58.8779 4.76017 64.2767C4.76017 69.6765 9.1937 74.0899 14.6106 74.0899C20.1147 74.0899 24.6199 69.6055 24.6199 64.1182V54.4639H14.5323ZM14.5323 5.65033C9.13525 5.65033 4.76017 10.0438 4.76017 15.4635C4.76017 20.8832 9.13525 25.2767 14.5323 25.2767H24.6199V5.65033H14.5323ZM29.3801 25.2767H39.4677C44.8648 25.2767 49.2398 20.8832 49.2398 15.4635C49.2398 10.0438 44.8648 5.65033 39.4677 5.65033H29.3801V25.2767Z",
        ],
        width: "54",
        height: "79",
        viewBox: "0 0 54 79",
        color: "#0ACF83",
        description: `O Figma é um programa de design de interface web baseado na web que é usado por designers, desenvolvedores e gerentes de produto para criar, colaborar e prototipar interfaces de usuário. É um programa poderoso e versátil que oferece uma ampla gama de recursos para criar designs de alta qualidade.
        
        Um dos principais recursos do Figma é sua colaboração em tempo real. Isso permite que os designers trabalhem juntos em um mesmo projeto, mesmo que estejam em locais diferentes. O Figma também oferece um sistema de revisão integrado que permite aos revisores fornecer feedback e comentários em um projeto.
        
        Outro recurso importante do Figma é sua capacidade de prototipagem. O Figma permite que os designers criem protótipos interativos de seus designs, o que ajuda a testar e validar seus conceitos. Os protótipos do Figma podem ser compartilhados com usuários externos para obter feedback.`,
      },
      {
        name: "adobe xd",
        icon: [
          "M62.471 7.88709L41.9299 41.3122L63.8404 76.763C63.9846 77.0077 64.0333 77.2958 63.9774 77.5733C63.9089 77.8434 63.635 77.6409 63.2242 77.7084H47.5445C46.4489 77.7084 45.6958 77.6409 45.2165 76.9656C43.7786 74.1295 42.2722 71.361 40.8344 68.5249C39.3965 65.6889 37.8217 62.9203 36.1784 60.0167C34.5351 57.1131 32.8918 54.2095 31.2485 51.2384H31.1115C29.6737 54.142 28.0988 57.0456 26.524 59.9492C24.9492 62.8528 23.3744 65.7564 21.868 68.5924C20.3617 71.4285 18.7184 74.3321 17.1436 77.1007C16.8697 77.7759 16.3219 77.8434 15.5687 77.8434H0.505239C0.231357 77.8434 0.0259455 77.9785 0.0259455 77.6409C-0.0046133 77.5145 -0.00822106 77.3832 0.0153515 77.2553C0.0389241 77.1274 0.0891638 77.0058 0.162887 76.8981L21.4572 42.4601L0.71065 7.81957C0.505239 7.54947 0.436768 7.27936 0.573709 7.14431C0.657188 7.04805 0.763095 6.97319 0.882349 6.92614C1.0016 6.8791 1.13064 6.86128 1.25841 6.87421H16.8012C17.1251 6.88116 17.4469 6.9265 17.7598 7.00926C18.0341 7.15483 18.2689 7.36325 18.4445 7.61699C19.7454 10.5206 21.2518 13.4242 22.8266 16.3278C24.4014 19.2314 26.0447 22.0674 27.7565 24.9035C29.4683 27.7396 30.9061 30.5756 32.344 33.4792H32.481C33.9188 30.5081 35.4252 27.6045 36.9315 24.7684C38.4379 21.9324 40.0127 19.0963 41.5875 16.2602C43.1623 13.4242 44.6687 10.5206 46.1751 7.75204C46.227 7.48622 46.3725 7.24706 46.5859 7.07679C46.857 6.92926 47.1724 6.8814 47.476 6.94173H61.9233C62.0042 6.92382 62.0879 6.92184 62.1696 6.93592C62.2513 6.95 62.3294 6.97986 62.3994 7.02378C62.4694 7.06769 62.5299 7.12481 62.5774 7.19185C62.625 7.25888 62.6586 7.33452 62.6764 7.41441C62.7449 7.48194 62.608 7.75204 62.471 7.88709Z",
          "M93.2673 78.8656C88.1147 78.9476 83.0084 77.9112 78.3222 75.8323C73.9622 73.8552 70.3081 70.6638 67.8258 66.6649C65.2539 62.5531 64.0027 57.4301 64.0027 51.2961C63.9322 46.3077 65.2532 41.3935 67.8258 37.0732C70.4638 32.6823 74.2845 29.0705 78.8783 26.6251C83.7441 23.9962 89.5831 22.7155 96.4648 22.7155C96.9524 22.7101 97.4398 22.7327 97.9246 22.7829C98.5502 22.8503 99.2453 22.8503 100.079 22.9177V1.61708C100.079 1.14523 100.288 0.875598 100.775 0.875598H114.886C115.041 0.855152 115.199 0.89235 115.328 0.979785C115.457 1.06722 115.547 1.19848 115.581 1.34745V65.6538C115.581 66.8671 115.65 68.2153 115.72 69.6982C115.789 71.1812 115.928 72.4619 115.998 73.6078C116.013 73.8355 115.954 74.0619 115.829 74.2554C115.704 74.4488 115.52 74.5995 115.303 74.6864C111.662 76.1702 107.861 77.2555 103.972 77.9219C100.439 78.5397 96.8572 78.8555 93.2673 78.8656ZM100.079 65.3842V35.7251C99.4605 35.5802 98.834 35.4677 98.2027 35.388C97.438 35.3206 96.6734 35.2532 95.9087 35.2532C93.184 35.2234 90.4912 35.8243 88.0539 37.0058C85.6785 38.1535 83.6447 39.8705 82.1453 41.9939C80.6161 44.151 79.8514 47.0495 79.8514 50.5546C79.7909 52.9205 80.1918 55.2761 81.0332 57.4976C81.7054 59.294 82.7728 60.9271 84.1612 62.2835C85.5013 63.5236 87.1191 64.4464 88.888 64.9797C90.75 65.5711 92.6983 65.867 94.6575 65.856C95.7002 65.856 96.6734 65.7886 97.577 65.7212C98.4263 65.78 99.2789 65.6651 100.079 65.3842Z",
        ],
        width: "116",
        height: "79",
        viewBox: "0 0 116 79",
        color: "#FF61F6",
        description: `O Adobe XD é um programa de design de experiência do usuário baseado em vetores para aplicativos da web e aplicativos móveis, desenvolvido e publicado pela Adobe Inc. Foi lançado em 2016 e é uma ferramenta popular entre designers, desenvolvedores e gerentes de produto.

        O Adobe XD oferece uma ampla gama de recursos para criar designs de alta qualidade. Ele inclui ferramentas para desenhar elementos de interface do usuário, aplicar estilos e criar protótipos interativos.
        
        Outro recurso importante do Adobe XD é sua capacidade de colaboração. O programa permite que os designers trabalhem juntos em um mesmo projeto, mesmo que estejam em locais diferentes. O Adobe XD também oferece um sistema de revisão integrado que permite aos revisores fornecer feedback e comentários em um projeto.
        `,
      },
      {
        name: "photoshop",
        icon: [
          "M0.348633 71.525V1.9589C0.348633 1.45191 0.566542 1.19683 1.00204 1.19683C2.16194 1.19683 3.22102 1.17982 4.8184 1.14234C6.41412 1.10668 8.13784 1.07042 9.98956 1.03355C11.8405 0.997728 13.8002 0.96141 15.8686 0.924598C17.9368 0.888936 19.9871 0.870775 22.0194 0.870117C27.5343 0.870117 32.1793 1.55963 35.9543 2.93865C39.3596 4.09053 42.4652 5.98729 45.045 8.49083C47.2318 10.6609 48.9217 13.2795 49.9982 16.166C51.0168 18.9752 51.5328 21.9417 51.5227 24.9298C51.5227 30.7372 50.18 35.5274 47.4946 39.3003C44.7914 43.0888 40.9917 45.9575 36.6078 47.5198C32.0352 49.2259 26.9542 49.8046 21.3664 49.8046C19.769 49.8046 18.644 49.7864 17.9913 49.7501C17.3383 49.7143 16.3585 49.6961 15.0521 49.6956V71.4162C15.0711 71.5493 15.0589 71.685 15.0164 71.8125C14.9738 71.9401 14.9022 72.056 14.8071 72.151C14.712 72.2461 14.5961 72.3177 14.4686 72.3603C14.341 72.4028 14.2053 72.415 14.0722 72.396H1.11067C0.602205 72.396 0.348633 72.1067 0.348633 71.525ZM15.0521 14.2608V36.9505C15.9944 37.0236 16.8653 37.0599 17.6648 37.0593H21.2574C23.9008 37.0505 26.5268 36.6313 29.0415 35.8166C31.1983 35.176 33.1256 33.929 34.5937 32.224C36.0088 30.5553 36.7165 28.2328 36.7167 25.2565C36.7741 23.1506 36.2261 21.0725 35.1378 19.2687C33.9938 17.5246 32.3402 16.1752 30.4022 15.404C27.8716 14.4203 25.1686 13.9575 22.4549 14.0432C20.7129 14.0432 19.1707 14.0613 17.8282 14.0975C16.4844 14.135 15.559 14.1894 15.0521 14.2608Z",
          "M93.6157 32.825C91.5697 31.7737 89.3906 31.0046 87.138 30.5387C84.656 29.9692 82.1183 29.6771 79.5718 29.6677C78.1943 29.6304 76.8188 29.7954 75.4892 30.1577C74.643 30.3461 73.8908 30.8282 73.3662 31.5185C73.0114 32.0706 72.8225 32.713 72.8221 33.3693C72.8419 34.006 73.0715 34.6183 73.4751 35.1111C74.1111 35.855 74.8881 36.4655 75.7613 36.9074C77.3135 37.7433 78.9129 38.4885 80.5514 39.1392C84.2052 40.3623 87.6965 42.0256 90.9482 44.0926C93.1634 45.4907 94.9965 47.4173 96.2828 49.6993C97.3644 51.8601 97.9061 54.2509 97.8614 56.6669C97.9266 59.8571 97.0149 62.9909 95.2488 65.6484C93.3578 68.346 90.7313 70.4433 87.6822 71.6904C84.3788 73.1415 80.2963 73.8674 75.4348 73.8679C72.3463 73.8991 69.2632 73.6072 66.2355 72.9969C63.85 72.5595 61.5279 71.8282 59.3223 70.8196C59.0843 70.6967 58.8862 70.5085 58.7513 70.2772C58.6163 70.0458 58.55 69.7807 58.5603 69.5131V57.7555C58.5472 57.6404 58.5656 57.5238 58.6136 57.4184C58.6615 57.3129 58.7373 57.2225 58.8326 57.1567C58.9261 57.1039 59.0335 57.0807 59.1405 57.0905C59.2474 57.1002 59.3488 57.1423 59.4312 57.2112C62.0359 58.747 64.8642 59.8673 67.814 60.5316C70.4141 61.1833 73.0811 61.5304 75.7613 61.5658C78.301 61.5658 80.1699 61.2392 81.3679 60.586C81.909 60.3384 82.3666 59.9392 82.6854 59.4369C83.0043 58.9345 83.1707 58.3505 83.1644 57.7555C83.1644 56.8132 82.6201 55.906 81.5314 55.0339C80.4428 54.1629 78.2291 53.1105 74.8903 51.8766C71.472 50.6868 68.2308 49.0388 65.2555 46.9777C63.1275 45.4977 61.3752 43.5403 60.1388 41.262C59.0682 39.1168 58.5269 36.7464 58.5603 34.349C58.5542 31.4685 59.3455 28.6426 60.8464 26.184C62.5578 23.4767 65.0153 21.3217 67.923 19.9786C71.1158 18.383 75.1076 17.5847 79.8984 17.5835C82.7041 17.5609 85.5072 17.7612 88.2812 18.1823C90.29 18.4371 92.2539 18.9683 94.1172 19.7608C94.265 19.8032 94.4009 19.8794 94.5142 19.9833C94.6275 20.0872 94.7152 20.216 94.7703 20.3596C94.8438 20.6255 94.8805 20.9002 94.8792 21.1761V32.1717C94.8868 32.2996 94.8606 32.4273 94.8033 32.542C94.746 32.6566 94.6595 32.7542 94.5527 32.8249C94.4071 32.8973 94.2468 32.935 94.0842 32.935C93.9216 32.935 93.7613 32.8974 93.6157 32.825Z",
        ],
        width: "98",
        height: "74",
        viewBox: "0 0 98 74",
        color: "#31A8FF",
        description: `O Adobe Photoshop é um programa de edição de imagens que pode ser usado para criar imagens de alta qualidade para uso em sites e aplicativos. O Photoshop pode ser usado para criar logotipos, ícones, imagens de fundo e outros elementos visuais que ajudam a criar uma experiência de usuário atraente.
        
        O Photoshop não é uma ferramenta de desenvolvimento web, mas pode ser usado em conjunto com outras ferramentas para criar projetos de front-end completos.`,
      },
      {
        name: "illustrator",
        icon: [
          "M45.6714 60.9366H20.4446L15.3119 76.8809C15.242 77.1716 15.0728 77.4289 14.8336 77.6083C14.5944 77.7877 14.3 77.878 14.0014 77.8638H1.22417C0.495517 77.8638 0.240698 77.4633 0.459714 76.6625L22.301 13.759C22.5196 13.1039 22.7381 12.3576 22.9565 11.5203C23.2421 10.0632 23.3884 8.58229 23.3933 7.09752C23.3785 6.99367 23.388 6.8878 23.4212 6.78829C23.4544 6.68878 23.5103 6.59836 23.5844 6.52418C23.6586 6.45 23.749 6.3941 23.8485 6.3609C23.948 6.32771 24.0539 6.31813 24.1577 6.33293H41.5214C42.0302 6.33293 42.3214 6.51498 42.3951 6.87909L67.1854 76.7716C67.4037 77.5003 67.1852 77.8643 66.53 77.8638H52.3329C52.0891 77.8908 51.8438 77.8281 51.6428 77.6874C51.4419 77.5467 51.299 77.3377 51.241 77.0993L45.6714 60.9366ZM24.376 47.1765H41.6308C41.1939 45.7211 40.6843 44.0829 40.1019 42.2621C39.5183 40.4432 38.8995 38.4956 38.2455 36.4195C37.5901 34.3447 36.9347 32.2697 36.2795 30.1947C35.6244 28.1199 35.0238 26.1177 34.4777 24.1883C33.9316 22.2602 33.4402 20.4947 33.0036 18.8918H32.8943C32.2795 21.8412 31.514 24.7572 30.601 27.6284C29.5806 30.9046 28.543 34.2537 27.4883 37.6754C26.4321 41.0984 25.3947 44.2655 24.376 47.1765Z",
          "M81.9271 17.9092C80.8133 17.954 79.7025 17.7631 78.6675 17.3491C77.6325 16.9351 76.6965 16.3072 75.9207 15.5067C75.1471 14.6714 74.5463 13.6915 74.1526 12.6232C73.759 11.5549 73.5804 10.4194 73.6271 9.28186C73.5875 8.15559 73.7858 7.03362 74.2092 5.98922C74.6326 4.94483 75.2716 4.00149 76.0843 3.22082C76.8893 2.44823 77.8394 1.84293 78.8797 1.43992C79.9201 1.0369 81.0301 0.844188 82.1454 0.872915C84.7665 0.872915 86.8233 1.65555 88.3157 3.22082C89.0691 4.03428 89.6546 4.98834 90.0387 6.02838C90.4228 7.06842 90.598 8.17401 90.5543 9.28186C90.6 10.4238 90.4157 11.5633 90.0124 12.6326C89.609 13.702 88.9949 14.6793 88.2064 15.5067C87.3824 16.319 86.399 16.9518 85.3183 17.3653C84.2376 17.7788 83.0829 17.964 81.9271 17.9092ZM74.3916 76.7718V24.5707C74.3916 23.9156 74.6817 23.5879 75.2653 23.5879H88.6979C89.2799 23.5879 89.5711 23.9155 89.5717 24.5707V76.7718C89.5717 77.5005 89.2804 77.8645 88.6979 77.864H75.3746C74.7195 77.864 74.3918 77.4999 74.3916 76.7718Z",
        ],
        width: "91",
        height: "78",
        viewBox: "0 0 91 78",
        color: "#FF9A00",
        description: `O Adobe Illustrator é um programa de design gráfico que pode ser usado para criar imagens vetoriais. As imagens vetoriais são compostas de linhas, curvas e formas, o que as torna redimensionáveis sem perda de qualidade.

        No front-end, o Adobe Illustrator é usado principalmente para criar elementos em SVG, um formato de imagem vetorial que é amplamente suportado por navegadores da web.
        
        Os elementos em SVG criados no Adobe Illustrator podem ser usados para criar uma variedade de elementos visuais para sites e aplicativos, como logotipos, ícones, ilustrações e gráficos.`,
      },
      {
        name: "premiere pro",
        icon: [
          "M0 77.9034V2.12209C0 1.60657 0.220937 1.31199 0.736456 1.31199C1.98843 1.31199 3.16676 1.31199 4.86061 1.23834C6.6281 1.1647 8.46924 1.1647 10.4577 1.09105C12.4461 1.01741 14.5818 1.01741 16.8648 0.943762C19.1478 0.870116 21.3572 0.870117 23.5666 0.870117C29.6055 0.870117 34.6134 1.60657 38.7376 3.15313C42.4198 4.4051 45.8075 6.46718 48.6061 9.19207C50.9627 11.5487 52.8039 14.4209 53.9822 17.5877C55.0869 20.6808 55.676 23.8475 55.676 27.1616C55.676 33.4951 54.2031 38.7239 51.2573 42.8481C48.3115 46.9722 44.1873 50.0653 39.4004 51.8328C34.3925 53.674 28.8691 54.3368 22.8301 54.3368C21.0626 54.3368 19.8843 54.3368 19.1478 54.2631C18.4114 54.1895 17.3803 54.1895 15.9811 54.1895V77.8297C16.0547 78.3452 15.6865 78.7871 15.171 78.8608C15.0973 78.8608 15.0237 78.8608 14.8764 78.8608H0.883747C0.294583 78.8608 0 78.5662 0 77.9034ZM16.0547 15.5256V40.2705C17.0858 40.3441 18.0432 40.4178 18.9269 40.4178H22.8301C25.7023 40.4178 28.5745 39.9759 31.2994 39.0922C33.656 38.4294 35.7181 37.0301 37.3383 35.1889C38.8848 33.3478 39.6213 30.8439 39.6213 27.6035C39.695 25.3204 39.1058 23.0374 37.9275 21.049C36.6755 19.1342 34.908 17.6613 32.7723 16.8512C30.0474 15.7465 27.1016 15.3046 24.0821 15.3783C22.1673 15.3783 20.4735 15.3783 19.0742 15.4519C17.6013 15.3783 16.5703 15.4519 16.0547 15.5256Z",
          "M65.9864 19.797H78.8744C79.6108 19.797 80.2 20.3125 80.4209 20.9753C80.6419 21.5645 80.7892 22.1537 80.8628 22.8165C81.0101 23.5529 81.1574 24.363 81.231 25.0995C81.3047 25.9096 81.3783 26.7933 81.3783 27.7507C83.5877 25.1731 86.2389 23.0374 89.2584 21.4172C92.6461 19.5024 96.5493 18.545 100.453 18.545C100.968 18.4714 101.41 18.8396 101.484 19.3551C101.484 19.4288 101.484 19.5024 101.484 19.6497V34.0106C101.484 34.5998 101.115 34.8207 100.305 34.8207C97.654 34.747 94.9291 34.968 92.3515 35.5571C90.2158 35.999 88.1537 36.6618 86.1653 37.5456C84.766 38.2084 83.4404 39.0921 82.4094 40.2705V77.8297C82.4094 78.5662 82.1148 78.8607 81.452 78.8607H66.9438C66.3546 78.9344 65.8391 78.5662 65.7655 77.977C65.7655 77.9033 65.7655 77.7561 65.7655 77.6824V36.8828C65.7655 35.1153 65.7655 33.2741 65.6918 31.3594C65.6182 29.4446 65.6182 27.5298 65.5445 25.615C65.5445 23.9212 65.3972 22.301 65.25 20.6071C65.1763 20.2389 65.3972 19.8706 65.7655 19.797C65.7655 19.7234 65.9128 19.7234 65.9864 19.797Z",
        ],
        width: "102",
        height: "79",
        viewBox: "0 0 102 79",
        color: "#8EA0FA",
        description: `O Adobe Premiere Pro é uma poderosa e abrangente ferramenta de edição de vídeo profissional desenvolvida pela Adobe Systems. Lançado pela primeira vez em 2003, o Premiere Pro tornou-se uma referência na indústria cinematográfica e de produção de vídeo, sendo amplamente utilizado por profissionais em todo o mundo. Projetado para atender desde iniciantes até editores experientes, o software oferece uma gama impressionante de recursos e ferramentas para editar, cortar, corrigir cores, adicionar efeitos visuais e sonoros, entre outras funcionalidades.
        
        O Premiere Pro suporta uma variedade de formatos de arquivo, desde vídeos em alta definição até produções cinematográficas, e integra-se perfeitamente com outros aplicativos da Adobe, como o After Effects e o Photoshop. Sua interface intuitiva e fluxo de trabalho eficiente permitem que os usuários editem vídeos de maneira rápida e precisa. Além disso, recursos como a linha do tempo dinâmica e a capacidade de trabalhar com projetos em equipe facilitam a colaboração e a produção de conteúdo de alta qualidade. Seja para produções cinematográficas, vídeos para a web ou projetos corporativos, o Adobe Premiere Pro se destaca como uma ferramenta essencial para profissionais que buscam excelência na edição de vídeo.`,
      },
      {
        name: "after effects",
        icon: [
          "M46.5862 55.0633H20.9429L15.7039 71.3317C15.6454 71.627 15.4785 71.8897 15.2362 72.0683C14.9939 72.2468 14.6935 72.3283 14.3942 72.2968H1.43462C0.676351 72.2968 0.469549 71.8832 0.676351 71.056L22.873 7.43011C23.0798 6.74077 23.2866 6.12037 23.5624 5.29317C23.8398 3.81579 23.9783 2.31567 23.976 0.812469C23.9553 0.639826 24.0007 0.465757 24.1029 0.325139C24.2052 0.184521 24.3568 0.087743 24.5274 0.0541992H42.3813C42.8638 0.0541992 43.2085 0.261 43.2774 0.605669L68.4382 71.2628C68.645 72.021 68.4382 72.3657 67.7489 72.3657H53.3417C53.0981 72.3892 52.854 72.326 52.6522 72.1874C52.4505 72.0487 52.3041 71.8433 52.2388 71.6074L46.5862 55.0633ZM24.941 41.3455H42.4502C42.0366 39.8979 41.4851 38.1746 40.8647 36.3823C40.2443 34.59 39.6239 32.522 39.0035 30.454C38.3831 28.386 37.6938 26.249 37.0044 24.1121C36.3151 21.9751 35.6947 19.9761 35.1432 17.977C34.5918 15.9779 34.1092 14.2546 33.6267 12.6001H33.4888C32.8693 15.6046 32.0869 18.5731 31.1451 21.4926C30.1111 24.8014 29.0771 28.2481 27.9741 31.6948C27.078 35.2104 25.975 38.4503 24.941 41.3455Z",
          "M109.316 48.7217H87.464C87.7247 50.8971 88.4538 52.9902 89.6009 54.8568C90.8191 56.7148 92.5744 58.1575 94.6331 58.9928C97.4194 60.1845 100.427 60.7718 103.457 60.7162C105.864 60.672 108.263 60.4183 110.626 59.9579C112.728 59.6827 114.788 59.1502 116.761 58.3724C117.105 58.0967 117.312 58.2346 117.312 58.9239V69.4708C117.3 69.7511 117.254 70.0289 117.174 70.298C117.05 70.4914 116.885 70.6559 116.692 70.7805C114.487 71.7487 112.172 72.4432 109.798 72.8485C106.574 73.4686 103.293 73.7459 100.01 73.6757C94.7709 73.6757 90.3592 72.8485 86.7746 71.2631C83.4015 69.799 80.4246 67.5545 78.089 64.7143C75.9065 62.0586 74.288 58.986 73.3325 55.684C71.3126 48.8069 71.4087 41.481 73.6083 34.6592C74.7075 31.2078 76.463 28.0011 78.7783 25.2153C81.0579 22.4606 83.9023 20.2274 87.1193 18.6666C90.3592 17.0811 94.2195 16.5297 98.6312 16.5297C102.307 16.4444 105.956 17.1741 109.316 18.6666C112.14 19.8909 114.624 21.7835 116.554 24.1813C118.386 26.5357 119.787 29.1964 120.69 32.0397C121.567 34.7566 122.009 37.5949 122 40.4497C122 42.1041 121.931 43.5517 121.862 44.8614C121.793 46.1712 121.655 47.1362 121.586 47.7566C121.556 47.9954 121.443 48.216 121.266 48.3797C121.09 48.5435 120.861 48.6402 120.621 48.6528C120.207 48.6528 119.449 48.7217 118.346 48.7906C117.019 48.9414 115.684 49.0104 114.348 48.9974C112.763 48.9974 111.108 48.7217 109.316 48.7217ZM87.464 38.6574H102.009C103.801 38.6574 105.111 38.6574 105.938 38.5885C106.505 38.5413 107.05 38.3516 107.524 38.037V37.3476C107.526 36.4805 107.387 35.6189 107.11 34.7971C106.507 32.9109 105.306 31.2721 103.69 30.1281C102.073 28.9841 100.128 28.3969 98.1487 28.4552C96.2779 28.3503 94.4167 28.7891 92.7898 29.7188C91.1629 30.6484 89.8399 32.0291 88.9805 33.6942C88.1763 35.2421 87.6623 36.9243 87.464 38.6574Z",
        ],
        width: "122",
        height: "74",
        viewBox: "0 0 122 74",
        color: "#8D95F2",
        description: `O Adobe After Effects é uma poderosa ferramenta de pós-produção para criação de efeitos visuais e motion graphics. Desenvolvido pela Adobe Systems, o After Effects é amplamente utilizado na indústria do cinema, televisão e produção de vídeos online para criar composições visuais impressionantes e animações envolventes. Lançado pela primeira vez em 1993, o software evoluiu para se tornar uma referência na manipulação de elementos visuais em movimento.

        O After Effects oferece uma ampla gama de recursos, incluindo ferramentas avançadas de animação, composição em camadas, rastreamento de movimento, correção de cor e integração com outros aplicativos da Adobe. Os profissionais utilizam o software para criar desde simples gráficos animados até efeitos visuais complexos em produções cinematográficas. Sua interface intuitiva e a capacidade de trabalhar em conjunto com outros aplicativos da Adobe, como o Photoshop e o Premiere Pro, permitem uma integração suave em fluxos de trabalho de produção de vídeo. Com sua versatilidade e robustez, o Adobe After Effects se destaca como uma ferramenta essencial para aqueles que buscam elevar a qualidade visual de suas produções audiovisuais.`,
      },
    ],
  }),

  actions: {},

  getters: {},
});
