YuGiOh Jo-Ken-Pow Documentation in English and Portuguese below:  

# YuGiOh Jo-Ken-Pow  

## Introduction  
The card game project is a web-based application built using Node.js, Express.js, and HTML/CSS/JavaScript. The game involves dueling with cards, and the outcome of each duel affects the player's and NPC's scores. This documentation provides an overview of the project's structure, key features, and functionality.  
  
## Project Structure  
### Server-side (server.js)  
**Dependencies**  
**express:** A minimal web application framework for Node.js.  

**Initialization**  
The server is initiated by requiring the app.js module and defining a port (default is 3000). The server listens on the specified port, and a message is logged once the server starts.  

### Express App (app.js)  
**Dependencies**  
**express:** The web application framework.  

**Middleware**  
**express.static:** Serves static files from the specified directory.
**cardsRoute:** Handles requests for card data.  

**Routes**  
**/:** Serves the main HTML file.  
**/cards:** Routed through cardsRoute.  
  
### Game Engine (engine.js)  
**State Object**  
state: An object containing various game state variables.  

**Initialization**  
Fetches card data from the server.  
Calls the init function.  
  
**Functions**  
**getRandomCardId:** Returns a random card ID from the fetched card data.  
**createCardImage:** Creates an HTML image element for a card.  
**setCardsField:** Handles setting up the game field with player and NPC cards.  
**drawCardsInfield:** Updates the displayed player and NPC cards on the field.  
**showHiddenCardFieldImages:** Controls the visibility of card images on the field.  
**hiddenCardDetails:** Hides details of the selected card.  
**drawButton:** Updates the text content and displays the game button.  
**updateScore:** Updates the displayed scores.  
**checkDuelResults:** Checks the results of a duel and updates scores accordingly.  
**removeAllCardsImages:** Removes all card images from the player and NPC boxes.  
**drawSelectCard:** Displays details of the selected card.  
**drawCards:** Draws a specified number of cards on the player or NPC side.  
**resetDuel:** Resets the game state for a new duel.  
**playAudio:** Plays audio based on the duel result.  
**init:** Initializes the game by setting up initial conditions and calling other functions. 
   
**Event Listeners**  
Event listeners are attached to the player's cards for click and hover events.  
  
### Card Data Route (cardsRoute.js)  
**Dependencies**  
**express:** The web application framework.  
**path:** A module for handling file paths.  
**fs:** A module for file system operations.  

**Route**  
**/cards:** Reads the card data from a JSON file and sends it as a response.  
  
### HTML (index.html)  
**Structure**  
HTML structure defining the layout of the game interface.  

**Head**  
Includes metadata, stylesheets, and the title of the game.  

**Body**  
Background video and audio elements.  
Game container with left and right sides.  
Score box, menu avatar, and card details on the left side.  
Card boxes, card versus container, and next duel button on the right side.  
  
### CSS Stylesheets  
**reset.css**  
Resets default styles and sets some global styles.  

**main.css**  
Applies specific styles to the body and buttons.  

**containers_and_frames.css**  
Defines styles for framed containers.  

**buttons.css**  
Defines styles for buttons and button hover/active states.  
  
## Key Features  
**Server-Client Architecture:**  
The project uses Node.js and Express.js to implement a server that serves the game to clients.  

**Dynamic Card Dueling:**  
The game engine (engine.js) handles the dynamic aspects of card dueling, including drawing cards, updating scores, and determining duel results.  

**Responsive Interface:**  
The HTML and CSS components provide a responsive and visually appealing interface for users.  

**Audio Integration:**  
The project incorporates audio elements to enhance the gaming experience, playing specific sounds based on the outcome of duels.  

## Conclusion  
This documentation has provided an in-depth look into the structure and key features of the card game project. The combination of server-side logic, game engine functionality, and client-side interface creates an engaging and interactive web-based card game.  

-----------------------------------------------------------------------------------------------------------------------------

# YuGiOh Jo-Ken-Pow  

## Introdução  
O projeto de jogo de cartas é uma aplicação web construída utilizando Node.js, Express.js, e HTML/CSS/JavaScript. O jogo envolve duelos com cartas, e o resultado de cada duelo afeta os pontos do jogador e do NPC. Esta documentação fornece uma visão geral da estrutura do projeto, recursos-chave e funcionalidades.  
  
## Estrutura do Projeto  
**Servidor (server.js)**  
**Dependências**  
**express:** Um framework minimalista para aplicações web em Node.js.  
  
**Inicialização**  
O servidor é iniciado requerendo o módulo app.js e definindo uma porta (padrão é 3000). O servidor escuta na porta especificada, e uma mensagem é registrada assim que o servidor inicia.  
  
### Aplicação Express (app.js)  
**Dependências**  
**express:** O framework para aplicações web.  
  
**Middleware**  
**express.static:** Serve arquivos estáticos do diretório especificado.  
**cardsRoute:** Lida com requisições de dados de cartas.  
  
**Rotas**  
**/:** Serve o arquivo HTML principal.  
**/cards:** Roteado através de cardsRoute.  
  
### Motor do Jogo (engine.js)  
**Objeto de Estado**  
**state:** Um objeto contendo várias variáveis de estado do jogo.  
**Inicialização**  
Busca dados de cartas do servidor.  
Chama a função init.  
  
**Funções**  
**getRandomCardId:** Retorna um ID de carta aleatório dos dados de cartas obtidos.  
**createCardImage:** Cria um elemento HTML de imagem para uma carta.  
**setCardsField:** Manipula a configuração do campo de jogo com cartas do jogador e do NPC.  
**drawCardsInfield:** Atualiza as cartas exibidas do jogador e do NPC no campo.  
**showHiddenCardFieldImages:** Controla a visibilidade das imagens das cartas no campo. 
**hiddenCardDetails:** Oculta detalhes da carta selecionada.  
**drawButton:** Atualiza o conteúdo do texto e exibe o botão do jogo.  
**updateScore:** Atualiza os pontos exibidos.  
**checkDuelResults:** Verifica os resultados de um duelo e atualiza os pontos conforme necessário.  
**removeAllCardsImages:** Remove todas as imagens de cartas das caixas do jogador e do NPC.  
**drawSelectCard:** Exibe detalhes da carta selecionada.  
**drawCards:** Desenha um número especificado de cartas no lado do jogador ou do NPC.  
**resetDuel:** Restaura o estado do jogo para um novo duelo.  
**playAudio:** Reproduz áudio com base no resultado do duelo.  
**init:** Inicializa o jogo configurando condições iniciais e chamando outras funções.  

**Event Listeners**  
Os Event Listeners estão anexados às cartas do jogador para eventos de clique e passagem do mouse.  
  
### Rota de Dados de Cartas (cardsRoute.js)  
**Dependências**  
**express:** O framework para aplicações web.  
**path:** Um módulo para manipular caminhos de arquivo.  
**fs:** Um módulo para operações no sistema de arquivos.  
**Rota**   
/cards: Lê os dados das cartas de um arquivo JSON e os envia como resposta.  
  
### HTML (index.html)  
**Structure**  
Estrutura HTML definindo o layout da interface do jogo.  
  
**Header**  
Inclui metadados, folhas de estilo e o título do jogo.  
  
**Body**  
Elementos de vídeo e áudio de fundo.  
Container do jogo com lados esquerdo e direito.  
Caixa de pontos, avatar do menu e detalhes da carta no lado esquerdo.  
Caixas de cartas, container de duelos de cartas e botão de próximo duelo no lado direito.  
  
## Folhas de Estilo CSS  
**reset.css**  
Redefine estilos padrão e define alguns estilos globais.  
  
**main.css**  
Aplica estilos específicos ao corpo e aos botões.  

**containers_and_frames.css**
Define estilos para containers emoldurados.  
  
**buttons.css**  
Define estilos para botões e estados de passagem do mouse/ativos.  
  
## Recursos-Chave  
**Arquitetura Servidor-Cliente:**  
O projeto utiliza Node.js e Express.js para implementar um servidor que serve o jogo para os clientes.  
  
**Duelos Dinâmicos de Cartas:**  
O motor do jogo (engine.js) lida com os aspectos dinâmicos dos duelos de cartas, incluindo a retirada de cartas, atualização de pontos e determinação dos resultados dos duelos.  
  
**Interface Responsiva:**   
Os componentes HTML e CSS fornecem uma interface responsiva e visualmente atrativa para os usuários.  
  
**Integração de Áudio:**  
O projeto incorpora elementos de áudio para aprimorar a experiência de jogo, reproduzindo sons específicos com base no resultado dos duelos.  
  
## Conclusão  
Esta documentação forneceu uma visão detalhada da estrutura e dos recursos-chave do projeto de jogo de cartas. A combinação de lógica do lado do servidor, funcionalidade do motor do jogo e interface do lado do cliente cria um jogo de cartas envolvente e interativo baseado na web.  
