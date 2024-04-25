import { useState, useEffect, useRef } from 'react';

const Education = () => {
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

    const certs = [
        {
            url: 'https://www.freecodecamp.org/certification/achulslander/responsive-web-design',
            name: 'Responsive Web Design'
        },
        {
            url: 'https://www.freecodecamp.org/certification/achulslander/javascript-algorithms-and-data-structures',
            name: 'JavaScript Algorithms and Database Structures'
        },
        {
            url: 'https://www.freecodecamp.org/certification/achulslander/front-end-development-libraries',
            name: 'Front End Development Libraries'
        },
    ];

    const ux = [
        {
            url: 'https://coursera.org/share/38dc6c6e3a285216687e3ffa30e1afa5',
            name: 'Foundations of User Experience (UX) Design'
        },
        {
            url: 'https://coursera.org/share/7326a66d595bb3c034192847343ed5ec',
            name: 'Start the UX Design Process: Empathize, Define, and Ideate'
        },
        {
            url: 'https://coursera.org/share/661f7d7ac0a1a3a2d1b0012d91ba7561',
            name: 'Build Wireframes and Low-Fidelity Prototypes'
        }
    ];
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
                <h4>Currently studying</h4>
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