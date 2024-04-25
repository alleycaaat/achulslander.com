/* eslint-disable react/prop-types */
import { useState } from 'react';

const Nav = ({ stick, navClick, showCredit }) => {
    const [clicked, setClicked] = useState(false);

    const rotate = clicked ? 'rotate(180deg)' : 'rotate(0)';
    const rotated = clicked ? '175px' : '30px';
    const expand = clicked ? '150px' : '0px';

    const navclicky = (e) => {
        navClick(e);
    };

    return (
        <>
            {!showCredit &&
                (
                    <>
                        <nav id='sidenav' className='sidenavbar' style={{ width: expand }} aria-label='primary'>
                            <a className='top wiggle' href='https://achulslander.com/'>home</a>
                            <a className='wiggle' href='#about' target={'about'} onClick={(e) => navclicky(e)}>about</a>
                            <a className='wiggle' href='#skills' target={'skills'} onClick={(e) => navclicky(e)}>skills</a>
                            <a className='wiggle' href='#education' target={'education'} onClick={(e) => navclicky(e)}>education</a>
                            <a className='wiggle' href='#portfolio' target={'portfolio'} onClick={(e) => navclicky(e)}>portfolio</a>
                            <a className='wiggle' href='#contact' target={'contact'} onClick={(e) => navclicky(e)}>contact</a>
                            <a
                                href='https://achulslander.com/ACHulslanderResume.pdf'
                                className='bottom wiggle'
                            >resume</a>
                        </nav>
                        <button
                            aria-expanded={clicked}
                            className='openbtn nav-shut'
                            id='openBtn'
                            aria-label='menu'
                            onClick={() => setClicked(!clicked)}
                            style={{ width: rotated }}
                        >
                            <span
                                role='img'
                                aria-label='horizontal double chevron'
                                id='sidebarBtn'
                                style={{ transform: rotate }}
                            >&raquo;</span>
                        </button>

                        <nav id='navbar' aria-label='primary' className={stick ? 'stick' : ''}>
                            <a href='https://achulslander.com/'>home</a>
                            <a href='#about' target={'about'} onClick={(e) => navclicky(e)}>about</a>
                            <a href='#skills' target={'skills'} onClick={(e) => navclicky(e)}>skills</a>
                            <a href='#education' target={'education'} onClick={(e) => navclicky(e)}>education</a>
                            <a href='#portfolio' target={'portfolio'} onClick={(e) => navclicky(e)}>portfolio</a>
                            <a href='#contact' target={'contact'} onClick={(e) => navclicky(e)}>contact</a>
                            <a href='https://achulslander.com/ACHulslanderResume.pdf'
                            >resume</a>
                        </nav>
                    </>
                )
            }
        </>
    );
};

export default Nav;