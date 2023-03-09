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
            <h2>Skills</h2>
            <SkillIcons onscreen={onscreen} />
            <h4>Frameworks | Libraries | Languages | Tools | Technologies</h4>
            <p className='skills-list'>
                HTML5 {'\u2022'} CSS {'\u2022'} SCSS {'\u2022'} JavaScript ES6+ {'\u2022'} ReactJS
            </p>
            <p className='skills-list'>
                Rest API {'\u2022'} Netlify {'\u2022'} Canva {'\u2022'} Fauna {'\u2022'} VS Code
            </p>
            <p className='skills-list'>
                Gimp {'\u2022'} React Native {'\u2022'} Fauna Query Language {'\u2022'} Git
            </p>
            <p>
                I've a thirst for knowledge and don't hesitate to research topics to better understand.  It's been difficult to resist the urge to learn everything!  One of my favorite ways to develop skills is by recreating projects I like, and then comparing the codes.  I also achieve a thorough understanding of a topic by writing easy to understand articles and sharing them on {' '}
                <a
                    href='https://blog.achulslander.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                >my blog at Hashnode</a>.
            </p>

            <div className='emphasis'>
                <p>
                    Currently, my projects are primarily developed with <strong>ReactJS</strong>. I have been expanding my skill-set and have created several Jamstack web-apps with <strong>Fauna</strong> and <strong>Netlify</strong>.  I've also begun delving into <strong>React Native</strong> to learn how to develop mobile apps.
                </p>
            </div>
            <p>
                In addition to my web development skills, I have several years of professional experience in agriculture, and have held positions in other fields.  These six years have helped me hone multiple skills, such as communication, time management, attention to detail, leadership, conflict resolution, and problem solving.
            </p>
        </section>
    );
};

export default Skills;