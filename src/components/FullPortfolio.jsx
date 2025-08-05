const FullPortfolio = ({ setFullPortfolioHidden }) => {
    const modalInfo = [
        {
            id: 'ultraFuel',
            title: 'Ultra Fuel',
            stack: 'ReactJS, FaunaDB, Netlify',
            desc: 'Ultra Fuel is a Jamstack web-app developed using React and SCSS to create a responsive, optimized interface.  It allows users to easily add water, Tailwind and food consumed during an ultramarathon, and displays the total calories and nutrients for each hour to quickly and easily see how the runner is fueling.  Data is retrieved using REST API calls to serverless functions, they access collections on FaunaDB.  Data is shared to components via the useContext Hook.',
            img: '/ultraFuel.png',
            code: 'https://github.com/alleycaaat/ultra-fuel-v2',
            demo: 'https://achulslander-ultra-fuel-v2.netlify.app/',
            alt: 'Two tone grey mountains are in front of an orange gradient background.  Below that, on a light grey background, are blue buttons with white text.  The first reads `new entry`, then `notes` can be clicked.  Following that are fifteen buttons for the hours from 0700 to 2100, each can be clicked to individually show the water, food and nutrients consumed.',
        },
        {
            id: 'recipeKeeper',
            title: 'Recipe Keeper',
            stack: 'ReactJS, FaunaDB, Netlify',
            desc: 'Styled to look like a notecard, this CRUD web-app allows the user to add new recipes and save them for quick and easy retrieval later.  The recipes can be sorted by category, edited and deleted.  Recipe Keeper utilizes the useState Hook and Fetch API calls to Netlify functions.  A loading screen may appear to allow for the promise to be fulfilled to reduce the chance of errors.',
            img: '/recipeKeeper.png',
            code: 'https://github.com/alleycaaat/recipe-keeper-jamstack',
            demo: 'https://achulslander-recipe-keeper-jamstack.netlify.app/',
            alt: 'a lavender background with a notecard that reads `recipe keeper` that was designed for keeping recipes in one easy to manage place',
        },
        {
            id: 'connectFour',
            title: 'Connect Four',
            stack: 'JavaScript, SCSS, HTML',
            desc: 'A classic game gone digital: Connect Four.  This game is pure JavaScript; the board is created with the forEach method, adding an id and aria-label to each spot a puck can occupy.  After the seventh turn it uses the forEach method and a While loop to see if a player has won.  Using the coordinates of the last dropped puck, the game examines the surrounding spots for a puck of the same color; the coordinates for a win are not hard-coded in.  A small checkmark lets the players know whose turn it is, and a timer displays the game length.',
            img: '/connectFour.png',
            demo: 'https://achulslander-connect-four.netlify.app/',
            code: 'https://codepen.io/alleycaaat/full/oNqOxzG',
            alt: 'a game with purple and yellow circles to be dropped down six columns in an attempt to connect four of the same color circles in a row',
        },
        {
            id: 'memoryGame',
            title: 'Memory Game',
            stack: 'ReactJS, appwrite, Vercel',
            desc: 'Memory Game is a Jamstack web-app developed using React and SCSS to create a responsive, optimized interface. Users can choose from three different card decks, two different difficulty levels, and from three card amounts. The user clicks on any two cards and they flip over to show what their face is, if they match they stay visible, otherwise they will flip back over.A timer lets the user know how much time has passed, and a counter shows how many incorrect guesses they have made.',
            img: '/memoryGame.png',
            demo: 'https://ach-memory-card-game.vercel.app/',
            code: 'https://github.com/alleycaaat/memory-card-game',
            alt: 'a grey and purple memory card game that has three different selections for setting up the game, start and reset buttons. and a timer and score that both show zeros.',
        },
        {
            id: 'notesKeeper',
            title: 'Notes Keeper',
            stack: 'ReactJS, FaunaDB, Netlify',
            desc: 'This project was created to understand how to build a Jamstack web-app with ReactJS, Netlify and FaunaDB.  It makes API calls to functions to compile, edit and delete the notes.  There is a loading screen that occurs when the API call to get all the notes is occuring to prevent load errors.',
            img: '/notesKeeper.png',
            demo: 'https://achulslander-notes-keeper.netlify.app/',
            code: 'https://github.com/alleycaaat/notes-keeper',
            alt: 'a grey background with six square, lavender notes.  Each has icons in the lower right corner to edit and erase the note, and the date the note was created in the lower left corner',
        },
        {
            id: 'racePace',
            title: 'Race Pace Calculator',
            stack: 'ReactJS (various Hooks), SCSS',
            desc: 'This web-app allows a user to determine their pace to achieve their desired finishing time.  The user enters a race distance, selects if it is kilometers or miles, and then inputs the time they want.  Then the calculator displays the minute per km/mi required to achieve the goal, no math needed!  This project was created with React (including the useState Hook) and SCSS.',
            img: '/racePace.png',
            demo: 'https://codepen.io/alleycaaat/full/RwxJYqQ',
            code: 'https://codepen.io/alleycaaat/full/RwxJYqQ',
            alt: 'an app titled `race pace calculator` that is lavender and purple with various input fields',
        },
        {
            id: 'FAQ',
            title: 'Accordion FAQ',
            stack: 'JavaScript, HTML, SCSS',
            desc: 'A pure JavaScript project, this is an accordion style FAQ that is responsive and accessible.  It was created to strengthen my vanillaJS skills.  It also uses HTML, SCSS and puns.',
            img: '/faq.png',
            demo: 'https://codepen.io/alleycaaat/full/bGazoZa',
            code: 'https://codepen.io/alleycaaat/full/bGazoZa',
            alt: 'a frequently asked questions page with three questions listed, it has a white background and purple questions',
        },
        {
            id: 'simpleMemoryGame',
            title: 'Simple Memory Game',
            stack: 'ReactJS (various Hooks), SCSS',
            desc: 'A simpler memory card game, the version that came before the more complex one.  It was made using ReactJS including the useState, useEffect and useRef Hooks.  It has a timer that starts with the game, a reset button and three different card amounts to choose from.  When clicked, the user sees the cards flip over to reveal the fronts, and if they don`t match, the cards return to being face-down.',
            img: '/memoryGameSimple.png',
            demo: 'https://achulslander-memory-game.netlify.app/',
            code: 'https://codepen.io/alleycaaat/full/MWVgogr/',
            alt: 'a grey gameboard with three options for card amounts, a start and reset button, and a timer and score both showing zeros.',
        },
    ];
    return (
        <section className='fullportfolio' id='portfolio'>
            <h3>Project Gallery</h3>
            <button
                className='projBtn'
                onClick={() => setFullPortfolioHidden(true)}
            >See fewer projects</button>
            <div className='row'>
                {modalInfo.map((proj, i) => (
                    <div className='fullproj' id={proj.id} key={i}>
                        <img
                            className='ope'
                            loading='lazy'
                            decoding='async'
                            src={`https://ach-photos.netlify.app${ proj.img }`}
                            alt={proj.alt}
                        />
                        <div className='projDesc'>
                            <h4>{proj.title}</h4>
                            <h5>{proj.stack}</h5>
                            <p>{proj.desc}</p>
                            <p className='links'>
                                <a
                                    href={proj.code}
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >Code</a>{' '}|{' '}
                                <a
                                    href={proj.demo}
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >Demo</a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FullPortfolio;
