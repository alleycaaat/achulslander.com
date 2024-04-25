import { useState, useEffect, useRef } from 'react';
import { Constants } from './util/Constants';

const Education = () => {
    const ref = useRef();
    const [onscreen, setonscreen] = useState(false);
    const ux = Constants.ux;
    const certs = Constants.certs

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
        <section ref={ref} className='education' id='education'>
            <h3 className={onscreen ? 'edtitle scroll scrolled' : 'edtitle scroll'}>Education</h3>
            <div>
                <h4>Degrees</h4>
                <ul className='list'>
                    <li>
                        Bachelor of Science from Western Illinois
                        University
                    </li>
                    <li>Associate of Arts from Black Hawk College</li>
                </ul>
                <h4>Certifications</h4>
                <ul className='list'>
                    <li>
                        <strong>Front End Development</strong>
                    </li>
                    {certs.map((cert, i) => (
                        <li key={i}>
                            <a
                                href={cert.url}
                                target='_blank'
                                rel='noopener noreferrer'>
                                {cert.name}
                            </a>
                        </li>
                    ))
                    }
                </ul>
                <ul className='list'>
                    <li><strong>UX Design</strong></li>
                    {ux.map((cert, i) => (
                        <li key={i}>
                            <a
                                href={cert.url}
                                target='_blank'
                                rel='noopener noreferrer'>
                                {cert.name}
                            </a>
                        </li>
                    ))
                    }
                </ul>
                <h4>Currently Learning</h4>
                <ul className='list'>
                    <li>NextJS</li>
                    <li>React Native</li>
                    <li>User Auth with <a href='https://appwrite.io/' target='_blank' rel='noopener noreferrer'>Appwrite</a></li>
                </ul>
            </div>
        </section>
    );
};

export default Education;