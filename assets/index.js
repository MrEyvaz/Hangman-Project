const sect1 = document.querySelector('.section1')

const sect2 = document.querySelector('.section2')

const click = document.querySelector('.click_play')

const body = document.querySelector('body')

const input = document.querySelector('.letters')

const message = document.querySelector('.message');

const cities = [
    'Aghdam',
    'Agdash',
    'Aghjabadi',
    'Agstafa',
    'Agsu',
    'Astara',
    'Aghdara',
    'Babek',
    'Baku',
    'Balaken',
    'Barda',
    'Beylagan',
    'Bilasuvar',
    'Dashkasan',
    'Shabran',
    'Fuzuli',
    'Gadabay',
    'Ganja',
    'Goranboy',
    'Goychay',
    'Goygol',
    'Hajigabul',
    'Imishli',
    'Ismayilli',
    'Jabrayil',
    'Julfa',
    'Kalbajar',
    'Khachmaz',
    'Khankendi',
    'Khojavend',
    'Khirdalan',
    'Kurdamir',
    'Lankaran',
    'Lerik',
    'Masally',
    'Mingachevir',
    'Nakhchivan',
    'Naftalan',
    'Neftchala',
    'Oghuz',
    'Ordubad',
    'Qabala',
    'Qakh',
    'Qazakh',
    'Quba',
    'Qubadli',
    'Qusar',
    'Saatli',
    'Sabirabad',
    'Shahbuz',
    'Shaki',
    'Shamakhi',
    'Shamkir',
    'Sharur',
    'Shirvan',
    'Siyazan',
    'Shusha',
    'Sumgait',
    'Tartar',
    'Tovuz',
    'Ujar',
    'Yardimli',
    'Yevlakh',
    'Zaqatala',
    'Zardab',
    'Zangilan'
]

click.addEventListener('click', function () {
    sect1.style.display = 'none'
    sect2.style.display = 'block'

    body.style.backgroundSize = '112% 117%';
    body.style.backgroundAttachment = 'fixed';

    // let randomIndex = Math.floor(Math.random() * cities.length)
    // let randomWord = cities[randomIndex]
    // // input.value = randomWord
    // // console.log(randomWord);


    // let underscores = '';
    // for (let i = 0; i < randomWord.length; i++) {
    //     if (randomWord[i] === ' ') {
    //         underscores += ' '; // preserve spaces
    //     } else {
    //         underscores += '_'; // replace characters with underscores
    //     }
    //     if (i < randomWord.length - 1) {
    //         underscores += ' '; // add space between underscores for better readability
    //     }
    // }

    // // Display the underscores in the input field
    // input.value = underscores;





    let randomWord = ''; // The randomly chosen city name.
    let displayWord = ''; //The current state of the word being displayed (with underscores).
    let attempts = 0; //The number of wrong guesses.
    const maxAttempts = 6; //The maximum number of wrong guesses allowed.
    guessedLetters = []; //An array to keep track of guessed letters.
    message.textContent = '';


    // Select a random city
    let randomIndex = Math.floor(Math.random() * cities.length);
    randomWord = cities[randomIndex].toUpperCase();

    //Convert the city name to underscores
    displayWord = '';
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === ' ') {
            displayWord += ' ';
        } else {
            displayWord += '_';
        }
    }


    // Display the underscores in the input field
    input.value = displayWord;

    
    document.addEventListener('keydown', function (event) {
        const guess = event.key.toUpperCase();
        if (guess < 'A' || guess > 'Z') {
            return; // Ignore non-alphabet keys
        }

    
        let alreadyGuessed = false;
        let guessedLetters = [];

        for (let i = 0; i < guessedLetters.length; i++) {
            if (guessedLetters[i] === guess) {
                alreadyGuessed = true;
                break;
            }
        }
        if (alreadyGuessed) {
            message.textContent = `You already guessed ${guess}.`;
            return;
        }

        guessedLetters.push(guess);

        let correctGuess = false;
        let newDisplayWord = '';
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === guess) {
                newDisplayWord += guess;
                correctGuess = true;
            } else {
                newDisplayWord += displayWord[i];
            }
        }

        if (correctGuess) {
            displayWord = newDisplayWord;
            input.value = displayWord;
            message.textContent = '';

            let wordCompleted = true;
            for (let i = 0; i < displayWord.length; i++) {
                if (displayWord[i] === '_') {
                    wordCompleted = false;
                    break;
                }
            }
            if (wordCompleted) {
                message.textContent = 'Congratulations! You guessed the word!';
            }
        } else {
            attempts++;
            message.textContent = `Wrong guess! You have ${maxAttempts - attempts} attempts left.`;

            if (attempts >= maxAttempts) {
                message.textContent = `Game over! The word was "${randomWord}".`;
                input.value = randomWord;
            }
        }
    })
});

