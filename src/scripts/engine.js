const state = {
    score:{
        playerScore: 0,
        npcScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
        playerType: document.getElementById("player-card-type"),
        npcType: document.getElementById("npc-card-type"),
    },
    playerSides : {
        playerOne: "player-cards",
        playerOneBox: document.querySelector("#player-cards"),
        npc: "npc-cards",
        npcBox: document.querySelector("#npc-cards"),
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        npc: document.getElementById("npc-field-card"),
    },
    actions: {
        button: document.getElementById("next-duel"),
    }
};

let cardData;

fetch('/cards')
  .then(response => response.json())
  .then(data => {
    cardData = data;
    init();
  })
  .catch(error => {
    console.error('Error fetching card data:', error);
  });

const pathImages = "./src/assets/cards/";

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
};

async function createCardImage(idCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", `${pathImages}back-card.png`);
    cardImage.setAttribute("data-id", idCard);
    cardImage.classList.add("card");

    if(fieldSide === state.playerSides.playerOne) {
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });

        cardImage.addEventListener("mouseover", () => {
            drawSelectCard(idCard);
        });
    };

    return cardImage;
}

async function setCardsField(cardId) {
    await removeAllCardsImages();

    let npcCardId = await getRandomCardId();

    await showHiddenCardFielImages(true);
    await hiddenCardDetails();

    await drawCardsInfield(cardId, npcCardId);

    let duelResults = await checkDuelResults(cardId, npcCardId)

    await updateScore();
    await drawButton(duelResults);
}

async function drawCardsInfield(cardId, npcCardId) {
    state.fieldCards.player.src = pathImages + cardData[cardId].img;
    state.cardSprites.playerType.innerText = cardData[cardId].type;

    state.fieldCards.npc.src = pathImages + cardData[npcCardId].img;
    state.cardSprites.npcType.innerText = cardData[npcCardId].type;
}

async function showHiddenCardFielImages(value) {
    if (value == true) {
        state.fieldCards.player.style.display = "block";
        state.fieldCards.npc.style.display = "block";
    }

    if (value ==false) {
        state.fieldCards.player.style.display = "none"
        state.fieldCards.npc.style.display = "none"
    }
}

async function hiddenCardDetails() {
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";
}

async function drawButton(text) {
    state.actions.button.innerText = text.toUpperCase();
    state.actions.button.style.display = "block"
}

async function updateScore() {
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.npcScore}`;
}

async function checkDuelResults(playerCardId, npcCardId, index) {
    let duelResults = "Draw"
    let playerCard = cardData[playerCardId];

    if(playerCard.WinOf.includes(npcCardId)) {
        duelResults = "win";
        await playAudio(duelResults)
        state.score.playerScore++
    }

    if(playerCard.LoseOf.includes(npcCardId)) {
        duelResults = "lose"
        await playAudio(duelResults)
        state.score.npcScore++
    }

    return duelResults
}

async function removeAllCardsImages() {
    let {npcBox, playerOneBox} = state.playerSides;

    let imgElements = npcBox.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    imgElements = playerOneBox.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}


async function drawSelectCard(index) {
    state.cardSprites.avatar.src = pathImages + cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Attribute: " + cardData[index].type;
}

async function drawCards(cardNumbers, fieldSide) {
    for (let i= 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    };
    
};

async function resetDuel() {
    state.cardSprites.avatar.src= "";
    state.actions.button.style.display = "none"

    state.fieldCards.player.style.display = "none"
    state.fieldCards.npc.style.display = "none"

    state.cardSprites.playerType.innerText = "";
    state.cardSprites.npcType.innerText = "";

    init();
}

async function playAudio(status) {
    const audio = new Audio(`./src/assets/audios/${status}.wav`)
    audio.play()
}

function init() {

    showHiddenCardFielImages(false);

    drawCards(5, state.playerSides.playerOne);
    drawCards(5, state.playerSides.npc);

    const bgm = document.getElementById("bgm");
    bgm.play();
};

init();