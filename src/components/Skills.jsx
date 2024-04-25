import { useState, useEffect, useRef } from 'react';
import SkillIcons from './UI/SkillIcons';

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

    return (
        <section ref={ref} className='skills' id='skills'>
            <h3>Skills</h3>
            <SkillIcons onscreen={onscreen} />
            <p>
                I've a thirst for knowledge and don't hesitate to research a topic.  It's been difficult to resist the urge to learn everything!  My current plan is to thoroughly understand a topic before adding new ones in, with an end goal of adding several more libraries and frameworks in time.  One of my favorite ways to develop skills is by finding something online that I like, and recreating it. I also achieve a thorough understanding of a topic by writing easy to understand articles and sharing them on {' '}
                <a
                    href='https://blog.achulslander.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                >my blog at Hashnode</a>.
            </p>

            <div className='emphasis'>
                <p>
                    Currently my projects are mainly developed with ReactJS. I have been expanding my skillset and have created several Jamstack web-apps using FaunaDB, Netlify and ReactJS.  I've also begun delving into React Native and am learning how to develop mobile apps. For images and icons, I primarily turn to Gimp, Canva, or use various libraries.
                </p>
                <p>
                    In the past I've use Bootstrap for developing  websites, today I primarily rely on SCSS to achieve faster load times.
                </p>
            </div>
        </section>
    );
};

export default Skills;