/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

import { Constants} from './util/Constants';
import Modal from './Modal';

const Portfolio = ({ setIsModalOpen, setFullPortfolioHidden }) => {
    const [open, setOpen] = useState(false);
    const [proj, setProj] = useState();
    
    const modalInfo = Constants.smallModalInfo;
    const url = Constants.url;

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
            <h2 className={onscreen ? 'screenPortfolio scroll scrolled' : 'screenPortfolio scroll'}>Recent Projects</h2>
            <h2 className='mobilePortfolio'>Recent Projects</h2>
            <button
                className='port-link projBtn'
                onClick={() => setFullPortfolioHidden(false)}
            >See more projects in greater detail</button>
            <p>I&#39;ve spent countless hours developing projects, some use libraries while others are pure JavaScript.  Below are a few projects I&#39;ve created that showcase my skills.  Click the button above to see more projects, or head over to my <a href='https://github.com/alleycaaat' target='_blank' rel='noreferrer noopener'>GitHub</a>.</p>

            <div className='row'>
                {modalInfo.map((proj, i) => (
                    <div
                        key={i}
                        role='button'
                        aria-expanded='false'
                        className='proj'
                        name={proj.name}
                        onClick={(e) => toggle(e)}
                    >
                        <img
                            className='ope'
                            src={`${ url }${ proj.img }`}
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