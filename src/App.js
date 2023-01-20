import { useState, useEffect, useRef } from 'react';

import getHashnodePosts from './getHashnodePosts';
import SocialIcons from "./components/SocialIcons";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from './components/Footer';

function App() {
    const [stick, setStick] = useState(false);
    const [scrolling, setScrolling] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [articles, setArticles] = useState([]);
    const isFirstRender = useRef(true);
    const [section, setSection] = useState();

    const FETCH_POSTS = `
    query GetUserArticles($page: Int!) {
        user(username: "alleycaaat") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                }
            }
        }
    }
`;

    useEffect(() => {
        if (isFirstRender.current) {
            loadHashnode();
            isFirstRender.current = false;
            return;
        }
    });

    const loadHashnode = async () => {
        await getHashnodePosts(FETCH_POSTS, { page: 0 })
            .then((res) => {
                setArticles(res);
            })
            .catch((err) => {
                console.log('Hash fetch error:', err);
            });
    };

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
    useEffect(() => {
        window.addEventListener('scroll', sticky);
        return () => {
            window.removeEventListener('scroll', sticky);
        };
    }, []);


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

    const navClick = (e) => {
        e.preventDefault();
        let target = e.target.target;
        setSection(target);
    };

    return (
        <div ref={ref} className='container'>
            <SocialIcons />
            <Nav stick={stick} navClick={navClick} />
            <Main articles={articles} setIsModalOpen={setIsModalOpen} section={section} />
            <Footer section={section} />
        </div>
    );
}

export default App;
