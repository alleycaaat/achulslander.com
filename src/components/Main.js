import { useState, useEffect, useRef } from 'react';

import { HiChevronDoubleUp } from 'react-icons/hi';

import Skills from "./Skills";
import Education from "./Education";
import Articles from "./Articles";
import Portfolio from "./Portfolio";
import FullPortfolio from "./FullPortfolio";

const Main = ({ articles, setIsModalOpen, section }) => {
    const ref = useRef();
    const [onscreen, setonscreen] = useState(false);
    const [fullPortfolioHidden, setFullPortfolioHidden] = useState(true);

    useEffect(() => {
        if (section !== undefined) {
            if (section === 'resume' || section === 'home') {
                return;
            }
            document.getElementById(`${ section }`).scrollIntoView({ behavior: 'smooth' });
        }
        else return;
    }, [section]);

    /* ! need to alter scrollIntoView for users preferring reduced motion */
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (mediaQuery && !mediaQuery.matches) {
                handleScroll();
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const handleScroll = () => {
        if (ref.current.getBoundingClientRect().top <= window.innerHeight) {
            setonscreen(true);
        }
    };

    const iconStyle = {
        color: '#000',
        height: '25px',
        width: '25px',
        backgroundColor: '',
        ariaHidden: 'true',
        border: '2px solid black',
        borderRadius: '50%',
        marginTop: '15px',
    };

    const ReturnToTop = () => {
        return (
            <button className='returnBtn'>
                <span className='sr-only'>Return to about section</span>
                <HiChevronDoubleUp style={iconStyle} onClick={() => ref.current.scrollIntoView({ behavior: 'smooth' })} />
            </button>
        );
    };
    return (
        <div className='column' role='main' ref={ref}>
            <section className='about' id='about' aria-label='about AC'>
                <div className='desc'>
                    <div className='sec'>
                        <figure>
                            <img
                                src='https://achulslander.com/img/ACHulslanderProfile.jpg'
                                loading='lazy'
                                alt='AC on a sunny day standing next to her horse, Aspen, giving her a kiss on the side of her muzzle'
                                className={onscreen ? 'aspen scroll scrolled' : 'aspen scroll'}
                            />
                            <figcaption>
                                <strong>Wait, who?</strong>
                            </figcaption>
                        </figure>
                        <p>
                            I'm AC, that's Aspen in the photo with me. I've been making websites since the days of
                            over-animated personal Geocities pages.
                            Nowadays, the animations I incoporate in my
                            designs are fun accents rather than an
                            overwhelming eyesore. My passion and skills for web design and development have grown in leaps and bounds since  my first Geocities (RIP) account was created.
                        </p>
                    </div>
                    <div className='sec'>
                        <p>
                            <span className='aheading'>Accessible</span>
                            {' '}
                            Languages change as does the technology to help users experience the web, and I prioritize keeping up with the changes in accessibility.  Websites should be enjoyable for <em>all</em> users.
                        </p>
                        <p>
                            <span className='aheading'>Responsive</span>
                            {' '}
                            From a large 27' monitor to a small mobile
                            device, my layouts remain cohesive and
                            attractive. I strive for a fluid transition as screen sizes change.
                        </p>
                        <p>
                            <span className='aheading'>Fast</span>
                            {' '}
                            A fancy website isn't helpful if slow load times cause users to click off. I'm always on the hunt for ways to trim down file sizes to shorten load times.
                        </p>
                        <p>
                            <span className='aheading'>Software</span>
                            {' '}
                            My main set-up these days utilizes VSCode, Gimp, Canva and Figma. I also have experience with Adobe Photoshop, InDesign and Illustrator.
                        </p>
                        <p>
                            <span className='aheading'>Currently</span>
                            {' '}
                            I am focusing on learning React Native to develop mobile apps, as well as the NextJS framework. I am open to freelance work or a full time front-end development position.
                        </p>
                    </div>
                </div>
            </section>
            <Skills id='skills' />
            <ReturnToTop />

            <Education id='education' />
            <ReturnToTop />

            {fullPortfolioHidden && (<Portfolio id='portfolio' setIsModalOpen={setIsModalOpen} setFullPortfolioHidden={setFullPortfolioHidden} />)}
            {!fullPortfolioHidden && <FullPortfolio setFullPortfolioHidden={setFullPortfolioHidden} />}

            <ReturnToTop />
            <section id='articles'>
                <div className='hashnode'>
                    <h2>Articles by AC</h2>
                    <div className='articles'>
                        {articles.map(post => <Articles post={post} />)}
                    </div>
                </div>
                <ReturnToTop />
            </section>
        </div>
    );
};

export default Main;