/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

const Footer = ({ section, setShowCredit }) => {

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

    useEffect(() => {
        if (section === 'contact') {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
        else return;
    }, [section]);

    const icons = [
        {
            name: 'codepen',
            url: 'https://codepen.io/alleycaaat',
            img: 'codepen_icon',
            sr: 'External link to AC`s codepen',
        },
        {
            name: 'twitter',
            url: 'https://twitter.com/alleycaaat',
            img: 'twitter_icon',
            sr: 'External link to AC`s twitter',
        },
        {
            name: 'hashnode',
            url: 'https://blog.achulslander.com/',
            img: 'hashnode',
            sr: 'External link to AC`s blog',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/alleycaaat',
            img: 'github_icon',
            sr: 'External link to AC`s GitHub',
        },
    ];
    
    return (
        <footer>
            <section ref={ref} className='contact' id='contact'>
                <h3 aria-label='contact'>Let&#39;s talk!</h3>
                <div className='socialIconsContact'>
                    <ul>
                        {icons.map((icon, i) => (
                            <li className='tooltip--triangle footer' data-tooltip={`${ icon.name }`} key={i}>
                                <span className='hex-shape'>
                                    <a href={icon.url}
                                        rel='noopener noreferrer'
                                        target='_blank'>
                                        <img
                                            aria-hidden='true'
                                            loading='lazy'
                                            className='icon'
                                            src={`https://ach-photos.netlify.app/${ icon.img }.svg`}
                                            alt={`${ icon.name } logo`}
                                        />
                                        <span className='visually-hidden'>
                                            {icon.sr}
                                        </span>
                                        <span className='tooltiptext'>{icon.name}</span>
                                    </a>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <form
                    className='contact-form'
                    method='POST'
                    id='contactForm'
                    name='contactMe'
                    aria-label='Send AC a message'
                >
                    <input type='hidden' name='form-name' value='contactMe' />
                    <div className='col'>
                        <label hidden htmlFor='inputName'>Name</label>
                        <input
                            type='text'
                            className={onscreen ? 'form-element text scroll scrolled' : 'form-element text scroll'}
                            style={{ animationDelay: '.3s' }}
                            id='inputName'
                            name='inputName'
                            placeholder='Name *'
                            required
                        />
                        <label hidden htmlFor='inputEmail'>Email address</label>
                        <input
                            type='email'
                            placeholder='Email Address *'
                            className={onscreen ? 'form-element text scroll scrolled' : 'form-element text scroll'}
                            style={{ animationDelay: '.6s' }}
                            id='inputEmail'
                            name='inputEmail'
                            required
                        />
                        <label hidden htmlFor='inputMessage'>Type your message here</label>
                        <textarea
                            className={onscreen ? 'form-element textarea scroll scrolled' : 'form-element textarea scroll'}
                            style={{ animationDelay: '.9s' }}
                            placeholder='Type your message here *'
                            id='inputMessage'
                            name='inputMessage'
                            rows='5'
                            required
                        ></textarea>
                        <input
                            type='submit'
                            className={onscreen ? 'btn sendBtn scroll scrolled' : 'btn sendBtn scroll'}
                            style={{ animationDelay: '1.2s' }}
                            id='screen'
                            value='Send'
                        />
                        <div id='html_element'></div>
                        <input
                            type='submit'
                            className={onscreen ? 'btn sendBtn scroll scrolled' : 'btn sendBtn scroll'}
                            style={{ animationDelay: '1.5s' }}
                            id='mobile'
                            value='Send'
                        />
                    </div>
                </form>
                <p>Content &#169; 2021 - 2024 AC Hulslander</p>
                <p>
                    <a
                        className='link'
                        href='https://www.freeprivacypolicy.com/live/9f85fba1-b648-47e8-9675-18cda2045b75'
                        target='_blank'
                        rel='noopener noreferrer'
                    >Privacy Policy</a>{' '}|{' '}
                    <a
                        className='link'
                        href='https://www.freeprivacypolicy.com/live/cb7a0887-a6fd-43d9-83f3-1dd79dc2f54e'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Terms & Conditions</a>{' '}|{' '}
                    <button className='link' onClick={() => setShowCredit(true)}>Icon Sources</button>
                </p>
            </section>
        </footer>
    );
};

export default Footer;