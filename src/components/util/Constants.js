export const Constants = {
    url: 'https://ach-photos.netlify.app/achulslander/',
    certs: [
        {
            url: 'https://www.freecodecamp.org/certification/achulslander/responsive-web-design',
            name: 'Responsive Web Design'
        },
        {
            url: 'https://www.freecodecamp.org/certification/achulslander/javascript-algorithms-and-data-structures',
            name: 'JavaScript Algorithms and Database Structures'
        },
        {
            url: 'https://www.freecodecamp.org/certification/achulslander/front-end-development-libraries',
            name: 'Front End Development Libraries'
        },
    ],
    ux: [
        {
            url: 'https://coursera.org/share/38dc6c6e3a285216687e3ffa30e1afa5',
            name: 'Foundations of User Experience (UX) Design'
        },
        {
            url: 'https://coursera.org/share/7326a66d595bb3c034192847343ed5ec',
            name: 'Start the UX Design Process: Empathize, Define, and Ideate'
        },
        {
            url: 'https://coursera.org/share/661f7d7ac0a1a3a2d1b0012d91ba7561',
            name: 'Build Wireframes and Low-Fidelity Prototypes'
        }
    ],
    socialIcons: [
        {
            name: 'GitHub',
            url: 'https://github.com/alleycaaat',
            img: 'github_icon',
            sr: 'External link to AC`s GitHub',
        },
        {
            name: 'codepen',
            url: 'https://codepen.io/alleycaaat',
            img: 'codepen_icon',
            sr: 'External link to AC`s codepen',
        },
        {
            name: 'hashnode',
            url: 'https://hashnode.com/@alleycaaat',
            img: 'hashnode',
            sr: 'External link to AC`s Hashnode',
        },
        {
            name: 'Discord',
            ulr: 'https://discord.com/users/427569685366833174',
            img: 'discord',
            sr: 'External link to AC`s Discord',
        },
        {
            name: 'twitter',
            url: 'https://twitter.com/achulslander',
            img: 'twitter_icon',
            sr: 'External link to AC`s twitter',
        },
    ],
    modalInfo: [
        {
            id: 'ultraFuel',
            title: 'Ultra Fuel',
            stack: 'ReactJS, Fauna, Netlify',
            desc: 'Ultra Fuel is a Jamstack web-app developed using React and SCSS to create a responsive, optimized interface.  It allows users to easily add water, Tailwind and food consumed during an ultra marathon, and displays the total calories and nutrients for each hour to quickly and easily see how the runner is fueling.  Data is retrieved with server-side functions (that serve as API endpoints), and REST API calls to the Fauna database.  Data is shared to components via the useContext Hook.',
            img: 'ultraFuel.png',
            code: 'https://github.com/alleycaaat/ultra-fuel-v2',
            demo: 'https://ultra-fuel.achulslander.com/',
            alt: 'Two tone grey mountains are in front of an orange gradient background.  Below that, on a light grey background, are blue buttons with white text.  The first reads `new entry`, then `notes` can be clicked.  Following that are fifteen buttons for the hours from 0700 to 2100, each can be clicked to individually show the water, food and nutrients consumed.',
        },
        {

            id: 'recipeKeeper',
            title: 'Recipe Keeper',
            stack: 'ReactJS, Fauna, Netlify',
            desc: 'Styled to look like a note card, this CRUD web-app allows the user to add new recipes and save them for quick and easy retrieval later.  The recipes can be sorted by category, edited and deleted.  Recipe Keeper utilizes the useState Hook and Fetch requests to Netlify functions that retrieve data from Fauna.  A loading screen may appear to allow for the promise to be fulfilled to reduce the chance of errors.',
            img: 'recipeKeeper.png',
            code: 'https://github.com/alleycaaat/recipe-keeper-jamstack',
            demo: 'https://achulslander-recipe-keeper-jamstack.netlify.app/',
            alt: 'a lavender background with a note card that reads `recipe keeper` that was designed for keeping recipes in one easy to manage place',
        },
        {
            id: 'connectFour',
            title: 'Connect Four',
            stack: 'JavaScript, SCSS, HTML',
            desc: 'A classic game gone digital: Connect Four.  This game is pure JavaScript; the board is created with the forEach method, adding an id and aria-label to each spot a puck can occupy.  After the seventh turn it uses the forEach method and a While loop to see if a player has won.  Using the coordinates of the last dropped puck, the game examines the surrounding spots for a puck of the same color; the coordinates for a win are not hard-coded in.  A small check mark lets the players know whose turn it is, and a timer displays the game length.',
            img: 'connectFour.png',
            demo: 'https://achulslander-connect-four.netlify.app/',
            code: 'https://codepen.io/alleycaaat/full/oNqOxzG',
            alt: 'a game with purple and yellow circles to be dropped down six columns in an attempt to connect four of the same color circles in a row',
        },
        {
            id: 'memoryGame',
            title: 'Memory Game',
            stack: 'ReactJS, Fauna, Netlify',
            desc: 'A memory card game with three truly challenging decks!  Players select their deck type, the amount of cards they want, and if they want a normal or challenging game.  The challenging games do not have perfectly matching cards, making pairing the cards rather difficult.  The colors deck is made up of pairs with a color swatch and the HEX for the color, math has different equations to be matched to their answers, while coding has programming logos to pair with logo name.  This game was created using ReactJS, Netlify and Fauna.',
            img: 'memoryGame.png',
            demo: 'https://achulslander-memory-card-game.netlify.app/',
            code: 'https://github.com/alleycaaat/memory-card-game',
            alt: 'a grey and purple memory card game that has three different selections for setting up the game, start and reset buttons. and a timer and score that both show zeros.',
        },
        {
            id: 'notesKeeper',
            title: 'Notes Keeper',
            stack: 'ReactJS, Fauna, Netlify',
            desc: 'This project was created to understand how to build a Jamstack web-app with ReactJS, Netlify and Fauna.  It makes Fetch requests to serverless functions to compile, edit and delete the notes.  There is a loading screen that occurs during the API call to get all the notes is occurring to prevent load errors.',
            img: 'notesKeeper.png',
            demo: 'https://achulslander-notes-keeper.netlify.app/',
            code: 'https://github.com/alleycaaat/notes-keeper',
            alt: 'a grey background with six square, lavender notes.  Each has icons in the lower right corner to edit and erase the note, and the date the note was created in the lower left corner',
        },
        {
            id: 'racePace',
            title: 'Race Pace Calculator',
            stack: 'ReactJS (various Hooks), SCSS',
            desc: 'This web-app allows a user to determine their pace to achieve their desired finishing time.  The user enters a race distance, selects if it is kilometers or miles, and then inputs the time they want.  Then the calculator displays the minute per km/mi required to achieve the goal, no math needed!  This project was created with React (including the useState Hook) and SCSS.',
            img: 'racePace.png',
            demo: 'https://codepen.io/alleycaaat/full/RwxJYqQ',
            code: 'https://codepen.io/alleycaaat/full/RwxJYqQ',
            alt: 'an app titled `race pace calculator` that is lavender and purple with various input fields',
        },
        {
            id: 'FAQ',
            title: 'Accordion FAQ',
            stack: 'JavaScript, HTML, SCSS',
            desc: 'A pure JavaScript project, this is an accordion style FAQ that is responsive and accessible.  It was created to strengthen my vanillaJS skills.  It also uses HTML, SCSS and puns.',
            img: 'faq.png',
            demo: 'https://codepen.io/alleycaaat/full/bGazoZa',
            code: 'https://codepen.io/alleycaaat/full/bGazoZa',
            alt: 'a frequently asked questions page with three questions listed, it has a white background and purple questions',
        },
        {
            id: 'simpleMemoryGame',
            title: 'Simple Memory Game',
            stack: 'ReactJS (various Hooks), SCSS',
            desc: 'A simpler memory card game, the version that came before the more complex one.  It was made using ReactJS including the useState, useEffect and useRef Hooks.  It has a timer that starts with the game, a reset button and three different card amounts to choose from.  When clicked, the user sees the cards flip over to reveal the fronts, and if they don`t match, the cards return to being face-down.',
            img: 'memoryGameSimple.png',
            demo: 'https://achulslander-memory-game.netlify.app/',
            code: 'https://codepen.io/alleycaaat/full/MWVgogr/',
            alt: 'a grey game board with three options for card amounts, a start and reset button, and a timer and score both showing zeros.',
        },
    ],
    smallModalInfo: [
        {
            id: 'ultraFuel',
            name: 'ultraFuel',
            title: 'Ultra Fuel',
            stack: 'ReactJS, Fauna, Netlify',
            desc: 'Ultra Fuel is a Jamstack web-app developed using React and SCSS to create a responsive, optimized interface.  It allows users to easily add water, Tailwind and food consumed during an ultra marathon, and displays the total calories and nutrients for each hour to quickly and easily see how the runner is fueling.  Data is retrieved with server-side functions (that serve as API endpoints), and REST API calls to the Fauna database.  Data is shared to components via the useContext Hook.',
            img: 'ultraFuel.png',
            code: 'https://github.com/alleycaaat/ultra-fuel-v2',
            demo: 'https://ultra-fuel.achulslander.com/',
            alt: 'Two tone grey mountains are in front of an orange gradient background.  Below that, on a light grey background, are blue buttons with white text.  The first reads `new entry`, then `notes` can be clicked.  Following that are fifteen buttons for the hours from 0700 to 2100, each can be clicked to individually show the water, food and nutrients consumed.',
        },
        {
            id: 'recipeKeeper',
            name: 'recipeKeeper',
            title: 'Recipe Keeper',
            stack: 'ReactJS, Fauna, Netlify',
            desc: 'Styled to look like a note card, this CRUD web-app allows the user to add new recipes and save them for quick and easy retrieval later.  The recipes can be sorted by category, edited and deleted.  Recipe Keeper utilizes the useState Hook and Fetch requests to Netlify functions that retrieve data from Fauna.  A loading screen may appear to allow for the promise to be fulfilled to reduce the chance of errors.',
            img: 'recipeKeeper.png',
            code: 'https://github.com/alleycaaat/recipe-keeper-jamstack',
            demo: 'https://achulslander-recipe-keeper-jamstack.netlify.app/',
            alt: 'a lavender background with a note card that reads `recipe keeper` that was designed for keeping recipes in one easy to manage place',
        },
        {
            id: 'connectFour',
            name: 'connectFour',
            title: 'Connect Four',
            stack: 'JavaScript, SCSS, HTML',
            desc: 'A classic game gone digital: Connect Four.  This game is pure JavaScript; the board is created with the forEach method, adding an id and aria-label to each spot a puck can occupy.  After the seventh turn it uses the forEach method and a While loop to see if a player has won.  Using the coordinates of the last dropped puck, the game examines the surrounding spots for a puck of the same color; the coordinates for a win are not hard-coded in.  A small check mark lets the players know whose turn it is, and a timer displays the game length.',
            img: 'connectFour.png',
            demo: 'https://achulslander-connect-four.netlify.app/',
            code: 'https://codepen.io/alleycaaat/full/oNqOxzG',
            alt: 'a game with purple and yellow circles to be dropped down six columns in an attempt to connect four of the same color circles in a row',
        },
    ],
    skillIcons: [
        {
            name: 'HTML5',
            url: 'html',
            delay: '0s',
        },
        {
            name: 'CSS3',
            url: 'css',
            delay: '.3s',
        },
        {
            name: 'Sass',
            url: 'sass2',
            delay: '.6s',
        },
        {
            name: 'Javascript',
            url: 'js2',
            delay: '.9s',
        },
        {
            name: 'ReactJS',
            url: 'react',
            delay: '1.2s',
        },
        {
            name: 'Bootstrap',
            url: 'bootstrap2',
            delay: '1.5s',
        },
        {
            name: 'React Native',
            url: 'react-native',
            delay: '1.8s'
        }
    ],
};