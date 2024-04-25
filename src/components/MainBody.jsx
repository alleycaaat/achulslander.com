/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

import { HiChevronDoubleUp } from 'react-icons/hi';

import Skills from './Skills';
import Education from './Education';
import Portfolio from './Portfolio';
import FullPortfolio from './FullPortfolio';
import Credit from './Credit';
import { AboutInfo } from './UI/AboutInfo';

const MainBody = ({ setIsModalOpen, section, showCredit, setShowCredit }) => {
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
            {showCredit ? <Credit setShowCredit={setShowCredit} />
                :
                <>
                    <section className='about' id='about' aria-label='about AC'>
                        <div className='desc'>
                            <div className='sec'>
                                <figure>
                                    <img
                                        src='https://ach-photos.netlify.app/ACHulslanderProfile.jpg'
                                        loading='lazy'
                                        alt='AC on a sunny day standing next to her horse, Aspen, giving her a kiss on the side of her muzzle'
                                        className={onscreen ? 'aspen scroll scrolled' : 'aspen scroll'}
                                    />
                                    <figcaption>
                                        <strong>Wait, who?</strong>
                                    </figcaption>
                                </figure>
                                <p>
                                    I'm AC, that's Aspen in the photo with me. I've been making websites since the days of over-animated personal Geocities pages.  Nowadays, the animations I incoporate in my designs are fun accents rather than an overwhelming eyesore.  My passion and skills for web development and design have grown in leaps and bounds since my first Geocities (RIP) account was created.
                                </p>
                            </div>
                            <AboutInfo />
                        </div>
                    </section>
                    <Skills id='skills' />
                    <ReturnToTop />

                    <Education id='education' />
                    <ReturnToTop />

                    {fullPortfolioHidden && (<Portfolio id='portfolio' setIsModalOpen={setIsModalOpen} setFullPortfolioHidden={setFullPortfolioHidden} />)}
                    {!fullPortfolioHidden && <FullPortfolio setFullPortfolioHidden={setFullPortfolioHidden} />}

                    <ReturnToTop />
                </>
            }
        </div>
    );
};

export default MainBody;