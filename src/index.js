const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);

      if (memoryGame.pickedCards.length === 0) {
        card.classList.add('turned');
        memoryGame.pickedCards.push(card);
      }

      else if (memoryGame.pickedCards.length === 1) {
        card.classList.add('turned');
        memoryGame.pickedCards.push(card);

        let cardOne = memoryGame.pickedCards[0].dataset.cardName;
        let cardTwo = memoryGame.pickedCards[1].dataset.cardName;

        if (memoryGame.checkIfPair(cardOne, cardTwo)) {
          memoryGame.pickedCards[0].classList.add('blocked');
          memoryGame.pickedCards[1].classList.add('blocked');
          document.querySelector('#pairs-guessed').innerHTML = memoryGame.pairsGuessed
        }
        else {
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.remove('turned');
            memoryGame.pickedCards[1].classList.remove('turned');
          }, 1000)
        }
        document.querySelector("#pairs-clicked").innerHTML = memoryGame.pairsClicked  
      }
      
      else {
        memoryGame.pickedCards.splice (0, 2);
      }
      if (memoryGame.checkIfFinished()) {
        alert('You won!!!')
      }
    });
  });
});