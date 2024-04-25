import { useState, useEffect, useRef } from 'react';

import MainBody from './components/MainBody';
import Footer from './components/Footer';
import Nav from './components/UI/Nav';

//** UI
import SocialIcons from './components/UI/SocialIcons';

function App() {
    const [stick, setStick] = useState(false);
    const [showCredit, setShowCredit] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [scrolling, setScrolling] = useState();
    const [section, setSection] = useState();

    //if modal is open, stop background scrolling
    //if modal closes, don't fly back up to the top of the page
    useEffect(() => {
        if (isModalOpen) {
            let curscroll = document.documentElement.style.getPropertyValue('--scroll-y');
            document.body.style.position = 'fixed';
            document.body.style.top = `-${ curscroll }`;
        }
        if (!isModalOpen) {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';

            window.scrollTo(0, parseInt(scrollY) * -1);
        }

    }, [isModalOpen]);

    const ref = useRef();

    //add scroll-y value on scroll
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    }, []);

    useEffect(() => {
        if (showCredit) {
            setSection('credit');
        }
    }, [showCredit]);

    //set the y-scroll value, if it's greater than the inner height or modal is open,
    //stick the nav to the top of the screen
    //when stick is true, Nav.js adds the stick class to nav
    useEffect(() => {
        document.documentElement.style.setProperty(
            '--scroll-y',
            `${ window.scrollY }px`
        );
        if (scrolling >= window.innerHeight || isModalOpen) {
            setStick(true);
        } else {
            setStick(false);
        }
    }, [scrolling, isModalOpen]);

    const sticky = () => {
        setScrolling(window.scrollY);
    };

    //anchor links
    const navClick = (e) => {
        e.preventDefault();
        let target = e.target.target;
        setSection(target);
    };

    return (
        <div ref={ref} className='container'>
            <SocialIcons />
            <Nav
                stick={stick}
                navClick={navClick}
                showCredit={showCredit}
            />
            <MainBody
                setIsModalOpen={setIsModalOpen}
                section={section}
                showCredit={showCredit}
                setShowCredit={setShowCredit}
            />
            <Footer
                section={section}
                setShowCredit={setShowCredit}
            />
        </div>
    );
}

export default App;
