import { useState, useEffect, useRef } from 'react';

const Skills = () => {
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

    const icons = [
        {
            name: 'HTML5',
            url: 'html',
            delay: '.3s',
        },
        {
            name: 'CSS3',
            url: 'css',
            delay: '.6s',
        },
        {
            name: 'Sass',
            url: 'sass2',
            delay: '.9s',
        },
        {
            name: 'Javascript',
            url: 'js2',
            delay: '1.2s',
        },
        {
            name: 'Bootstrap',
            url: 'bootstrap2',
            delay: '1.5s',
        },
        {
            name: 'ReactJS',
            url: 'react',
            delay: '1.8s',
        },
    ];


    return (
        <section ref={ref} className='skills' id='skills'>
            <h3>Skills</h3>
            <div className='logos'>
                {icons.map((icon, i) => (
                    <div
                        key={i}
                        className={onscreen ? 'tooltip--triangle scroll scrolled' : 'tooltip--triangle scroll'}
                        style={{ animationDelay: icon.delay }}
                        data-tooltip={icon.name}
                    >
                        <div className='hex-shape' style={{ animationDelay: icon.delay }}>
                            <img
                                src={`https://achulslander.com/img/${ icon.url }.svg`}
                                alt={`${ icon.name } icon`}
                                aria-hidden='true'
                                className='icon'
                                loading='lazy'
                            />
                        </div>
                    </div>
                ))
                }
            </div>
            <p>
                I've a thirst for knowledge and don't hesitate to research when I have a problem, or am learning a new concept.  It's been difficult to resist the urge to learn everything!  My current plan is to thoroughly understand a topic before adding new ones in, with an end goal of adding several more libraries and frameworks in time.  One of my favorite ways to develop skills is by finding something online that I like, and recreating it. I also achieve a thorough understanding of a topic by writing easy to understand articles and sharing them on {' '}
                <a
                    href='https://blog.achulslander.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                >my blog at Hashnode</a>.
            </p>

            <div className='emphasis'>
                <p>
                    Currently my projects are mainly developed with ReactJS and SCSS. I have been expanding my skillset and have created several Jamstack web-apps using FaunaDB, Netlify and ReactJS.  I've also begun delving into React Native and am learning how to develop mobile apps. For images and icons, I primarily turn to Gimp, Canva, or use various libraries.
                </p>
                <p>
                    In the past I've use Bootstrap for developing  websites, today I primarily rely on SCSS to achieve faster load times.
                </p>
            </div>
        </section>
    );
};

export default Skills;