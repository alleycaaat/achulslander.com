import { useState, useEffect, useRef } from 'react';

import Modal from './Modal';

const Portfolio = ({ setIsModalOpen, setFullPortfolioHidden }) => {
    const [open, setOpen] = useState(false);
    const [proj, setProj] = useState();
    const modalInfo = [
        {
            id: 'ultraFuel',
            name: 'ultraFuel',
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
            name: 'recipeKeeper',
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
            name: 'connectFour',
            title: 'Connect Four',
            stack: 'JavaScript, SCSS, HTML',
            desc: 'A classic game gone digital: Connect Four.  This game is pure JavaScript; the board is created with the forEach method, adding an id and aria-label to each spot a puck can occupy.  After the seventh turn it uses the forEach method and a While loop to see if a player has won.  Using the coordinates of the last dropped puck, the game examines the surrounding spots for a puck of the same color; the coordinates for a win are not hard-coded in.  A small checkmark lets the players know whose turn it is, and a timer displays the game length.',
            img: '/connectFour.png',
            demo: 'https://achulslander-connect-four.netlify.app/',
            code: 'https://codepen.io/alleycaaat/full/oNqOxzG',
            alt: 'a game with purple and yellow circles to be dropped down six columns in an attempt to connect four of the same color circles in a row',
        },
    ];
    const closeModal = () => {
        setOpen(false);
        setIsModalOpen(false);
    };

    const toggle = (data) => {
        data.preventDefault();
        let name = data.target.name;
        let proj = modalInfo.find(x => x.name === name);

        setProj(proj);
        setIsModalOpen(true);
        setOpen(true);
    };

    const ref = useRef();
    const [onscreen, setonscreen] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (ref.current.getBoundingClientRect().top <= window.innerHeight) {
            setonscreen(true);
        }
    };

    return (
        <section ref={ref} className='portfolio' id='portfolio'>
            <h3 className={onscreen ? 'screenPortfolio scroll scrolled' : 'screenPortfolio scroll'}>Recent Projects</h3>
            <h3 className='mobilePortfolio'>Recent Projects</h3>
            <button
                className='port-link projBtn'
                onClick={() => setFullPortfolioHidden(false)}
            >See all of my projects with more details</button>

            <div className='row'>
                {modalInfo.map((proj, i) => (
                    <div
                        key={i}
                        role='button'
                        aria-expanded='false'
                        className='proj'
                        name={proj.name}
                        onClick={(e) => toggle(e)}
                        focusable='true'
                    >
                        <img
                            className='ope'
                            src={`https://ach-photos.netlify.app${ proj.img }`}
                            alt={proj.alt}
                            key={i}
                            name={proj.name}
                            loading='lazy'
                        />
                        <div className='projDesc'>
                            <h4>{proj.title}</h4>
                            <h5>{proj.stack}</h5>
                        </div>
                    </div>
                ))}
                {open && (
                    <Modal
                        closeModal={closeModal}
                        data={proj}
                        open={open}
                    />
                )}
            </div>
        </section>
    );
};

export default Portfolio;