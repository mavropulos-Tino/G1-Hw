// Data arrays
const hangmanWords = [
  {
    category: "Movies",
    words: [
      { word: "inception", hint: "A dream within a dream" },
      { word: "avatar", hint: "Blue aliens on Pandora" },
      { word: "gladiator", hint: "Are you not entertained?" },
      { word: "titanic", hint: "Unsinkable ship meets iceberg" },
      { word: "jaws", hint: "You're gonna need a bigger boat" },
      { word: "rocky", hint: "Philadelphia boxer's story" },
      { word: "frozen", hint: "Let it go, let it go" },
      { word: "shrek", hint: "Green ogre with a donkey friend" },
      { word: "interstellar", hint: "Space travel through a wormhole" },
      { word: "joker", hint: "Why so serious?" }
    ]
  },
  {
    category: "Animals",
    words: [
      { word: "elephant", hint: "Largest land mammal with a trunk" },
      { word: "giraffe", hint: "Tallest animal with a long neck" },
      { word: "penguin", hint: "Flightless bird that waddles" },
      { word: "dolphin", hint: "Intelligent marine mammal" },
      { word: "kangaroo", hint: "Bouncing Australian marsupial" },
      { word: "cheetah", hint: "Fastest land animal" },
      { word: "octopus", hint: "Eight-armed sea creature" },
      { word: "flamingo", hint: "Pink bird that stands on one leg" },
      { word: "rhinoceros", hint: "Thick-skinned animal with a horn" },
      { word: "platypus", hint: "Egg-laying mammal with a duck bill" }
    ]
  },
  {
    category: "Food",
    words: [
      { word: "pizza", hint: "Italian dish with cheese and toppings" },
      { word: "sushi", hint: "Japanese rice and raw fish" },
      { word: "burger", hint: "Meat patty in a bun" },
      { word: "lasagna", hint: "Layered Italian pasta dish" },
      { word: "burrito", hint: "Mexican wrapped tortilla" },
      { word: "croissant", hint: "Flaky French pastry" },
      { word: "pancakes", hint: "Flat breakfast cakes with syrup" },
      { word: "tacos", hint: "Mexican folded tortilla with filling" },
      { word: "spaghetti", hint: "Long Italian pasta noodles" },
      { word: "sandwich", hint: "Food between two slices of bread" }
    ]
  },
  {
    category: "Sports",
    words: [
      { word: "basketball", hint: "Dribble and shoot into a hoop" },
      { word: "tennis", hint: "Racket sport with a net" },
      { word: "swimming", hint: "Moving through water" },
      { word: "volleyball", hint: "Bump, set, spike over a net" },
      { word: "hockey", hint: "Played on ice with a puck" },
      { word: "baseball", hint: "America's pastime with bases" },
      { word: "cricket", hint: "Bat and ball game with wickets" },
      { word: "rugby", hint: "Rough contact sport with an oval ball" },
      { word: "badminton", hint: "Racket sport with a shuttlecock" },
      { word: "archery", hint: "Shooting arrows at a target" }
    ]
  },
  {
    category: "Countries",
    words: [
      { word: "brazil", hint: "Largest South American country" },
      { word: "japan", hint: "Land of the rising sun" },
      { word: "canada", hint: "Northern neighbor of the USA" },
      { word: "egypt", hint: "Home of the pyramids" },
      { word: "australia", hint: "Island continent down under" },
      { word: "mexico", hint: "Country south of the USA" },
      { word: "norway", hint: "Scandinavian country with fjords" },
      { word: "thailand", hint: "Southeast Asian country, formerly Siam" },
      { word: "argentina", hint: "Tango and Patagonia" },
      { word: "portugal", hint: "Westernmost European country" }
    ]
  },
  {
    category: "Professions",
    words: [
      { word: "doctor", hint: "Medical professional who treats patients" },
      { word: "engineer", hint: "Designs and builds structures or systems" },
      { word: "teacher", hint: "Educates students in school" },
      { word: "pilot", hint: "Flies airplanes" },
      { word: "chef", hint: "Professional cook in a kitchen" },
      { word: "architect", hint: "Designs buildings" },
      { word: "lawyer", hint: "Practices law in court" },
      { word: "firefighter", hint: "Puts out fires and rescues people" },
      { word: "journalist", hint: "Reports news and writes articles" },
      { word: "scientist", hint: "Conducts research and experiments" }
    ]
  },
  {
    category: "Technology",
    words: [
      { word: "computer", hint: "Electronic device for processing data" },
      { word: "smartphone", hint: "Mobile device with apps" },
      { word: "internet", hint: "Global network of connected computers" },
      { word: "software", hint: "Programs that run on computers" },
      { word: "keyboard", hint: "Device for typing letters" },
      { word: "monitor", hint: "Screen for displaying computer output" },
      { word: "processor", hint: "Brain of the computer (CPU)" },
      { word: "algorithm", hint: "Step-by-step problem-solving procedure" },
      { word: "database", hint: "Organized collection of data" },
      { word: "wireless", hint: "Connection without cables" }
    ]
  },
  {
    category: "Music",
    words: [
      { word: "guitar", hint: "Stringed instrument with six strings" },
      { word: "piano", hint: "Keyboard instrument with black and white keys" },
      { word: "drums", hint: "Percussion instrument you hit with sticks" },
      { word: "violin", hint: "Stringed instrument played with a bow" },
      { word: "trumpet", hint: "Brass instrument with valves" },
      { word: "saxophone", hint: "Woodwind instrument used in jazz" },
      { word: "orchestra", hint: "Large group of musicians playing together" },
      { word: "melody", hint: "Main tune of a song" },
      { word: "rhythm", hint: "Pattern of beats in music" },
      { word: "harmony", hint: "Pleasant combination of musical notes" }
    ]
  }
];
const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];


function getGameRandoms() { // Picking a random category and word
    // Random category
    let randomCategory = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
    // Random word form category
    let randomWord = randomCategory.words[Math.floor(Math.random() * randomCategory.words.length)];

    let randomCategoryAndWord = {
        category: randomCategory.category,
        word: randomWord.word,
        hint: randomWord.hint,
    }
    return randomCategoryAndWord;
}

let gameRandoms = getGameRandoms();
let placeHolderArray = []; // Holds the correct ammount of underscores depending on the length of the random word
const wordDisplay = document.querySelector('.wordDisplay');

function displayCategory() { // Displays the category
    const categoryDisplay = document.querySelector('.categoryDisplay');
    categoryDisplay.textContent = `The Chosen Category Is: ${gameRandoms.category}`;
}

function displayWordPlaceholders() { // Creates underscores for every letter in the random word
    console.log('(HINT) Secret word:', gameRandoms.word);  // CHEAT
    
    let wordLength = gameRandoms.word.length;

    // Gets the random word length and then puts that many underscores insde placeHolderArray[]
    for(let i=0; i<wordLength; i++) {
        placeHolderArray.push('_');
    }
    
    // then this displays the underscores in HTML
    for(let i=0; i<placeHolderArray.length; i++) {
        wordDisplay.textContent += `${placeHolderArray[i]} `;
    }
}

function displayLetters() { // Creates a button for each letter in the alphabet
    const container = document.querySelector('.letterButtonContainer');

    for(let i=0; i<alphabet.length; i++) {
        let button = document.createElement('button');
        button.textContent = alphabet[i];
        button.value = alphabet[i]; // Adds the string form the array as vlaue data to the HTML element
        container.appendChild(button);

        // Then when the user clicks the button it sends the buttons value to the next function
        button.addEventListener('click', function() {
            getLetterValues(button.value);
            button.remove(); // And we also remove the button so the user doesnt have to keep track of which butts are already pressed
        });
    }
}

function updateLives(lives) { // Updates the lives counter on screen after every gameplay loop
    let livesDisplay = document.querySelector('.livesDisplay');
    livesDisplay.textContent = `You have: ${lives} lives`;
}

function updateWordPlaceholder(correctLetter, index) { // Takes the correct letter and its index
    // We replace the place holder '_' witht the correct letter at the correct index
    placeHolderArray[index] = correctLetter;
    
    // Clear the previous underscores
    wordDisplay.textContent = '';
    for(let i=0; i<placeHolderArray.length; i++) {
        wordDisplay.textContent += `${placeHolderArray[i]} `; // And insert the updated version
    }
}

function getLetterValues(value) { // After the letter button is pressed we call this function that
    // Splits the word into individual letters in an array
    let wordArray = gameRandoms.word.split('');
    let letterFound = false;
    
    // Then we cross reference the clicked button value with every letter of the random word
    for(let i=0; i<wordArray.length; i++) {
        if(value === wordArray[i]) {
            console.log(`${value} | ${i}`);
            updateWordPlaceholder(value, i); // Then if they match we send them up to be inserted into the HTML element and displayed
            letterFound = true;
        }
    }
    
    // If the letter wasn't in the word, lose a life
    if(!letterFound) {
        lives--;
        updateLives(lives);
        console.log('Wrong guess! Lives remaining:', lives);
        
        // Check if player ran out of lives
        if(lives <= 0) {
            gameOver(false);
        }
    } else {
        // Check if the player won (no more underscores)
        if(!placeHolderArray.includes('_')) {
            gameOver(true);
        }
    }
}

function gameOver(won) { // Handles the win loose gameplay function
    const infoBox = document.querySelector('.infoBox');

    // Shows win or loss message
    if(won) {
        infoBox.textContent = `Congratulations you won! The word was: ${gameRandoms.word}`;
    } else {
        infoBox.textContent = `Game Over! The word was: ${gameRandoms.word}`;
    }
    
    // After winning or loosing we disable the buttons
    const buttons = document.querySelectorAll('.letterButtonContainer button');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

// Hints logic:
function giveHint() { // Show the hint for the correct random word from the getGameRandoms() functions object
    const hintDisplay = document.querySelector('.hintsDisplay');
    hintDisplay.textContent = `Hint - ${gameRandoms.hint}`;
}
const hintButton = document.querySelector('.giveHint'); 
hintButton.addEventListener('click', function() { // Click event handler for the hint button
    giveHint();
});

// Play again logic:
function resetGame() { // Reset all variables and text fields
    lives = 6;
    updateLives(lives);
    
    placeHolderArray = [];
    gameRandoms = getGameRandoms();
    
    wordDisplay.textContent = '';
    const infoBox = document.querySelector('.infoBox');
    infoBox.textContent = '';
    const hintDisplay = document.querySelector('.hintsDisplay');
    hintDisplay.textContent = '';
    
    const container = document.querySelector('.letterButtonContainer');
    container.innerHTML = '';
    
    displayCategory();
    displayWordPlaceholders();
    displayLetters();
}
const playAgainButton = document.querySelector('.playAgain');
playAgainButton.addEventListener('click', function() { // Click event handler for the play again button
    resetGame();
});

// Starts the game when the page loads
let lives = 6;
updateLives(lives);
displayCategory();
displayWordPlaceholders();
displayLetters();