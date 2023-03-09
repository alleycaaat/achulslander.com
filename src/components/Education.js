import { useState, useEffect, useRef } from 'react';
import { constants } from './util/constants';

const Education = () => {
    const ref = useRef();
    const [onscreen, setonscreen] = useState(false);
    const ux = constants.ux;
    const certs = constants.certs;

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
            <h2 className={onscreen ? 'edtitle scroll scrolled' : 'edtitle scroll'}>Education</h2>
            <div>
                <h3>Degrees</h3>
                <ul className='list'>
                    <li>
                        <strong>Bachelor of Science</strong> from Western Illinois
                        University
                    </li>
                    <li><strong>Associate of Arts</strong> from Black Hawk College</li>
                </ul>
                <h3>Certifications</h3>
                <ul className='list space'>
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
                <ul className='list space'>
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
                <h3>Currently studying</h3>
                <ul className='list sm-space'>
                    <li>
                        <a
                            href='https://www.coursera.org/professional-certificates/google-ux-design'
                            target='_blank'
                            rel='noopener noreferrer'
                        >Create High-Fidelity Designs and Prototypes in Figma</a>
                    </li>
                    <li>React Native</li>
                    <li>Nextjs</li>
                </ul>
            </div>
        </section>
    );
};

export default Education;