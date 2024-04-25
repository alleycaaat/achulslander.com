let lg = 'https://ach-photos.netlify.app/lg-header.png',
    md = 'https://ach-photos.netlify.app/md-header.png',
    sm = 'https://ach-photos.netlify.app/header-sm.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='headertext'>
                <img className='sm-header' height='54' width='200' src={sm} alt="Hi, I`m AC! Thanks for visiting.  I`m a front-end web developer." />
                <img className='md-header' height='92' width='299' src={md} alt="Hi, I`m AC! Thanks for visiting.  I`m a front-end web developer." />
                <img className='lg-header' height='148' width='496' src={lg} alt="Hi, I`m AC! Thanks for visiting.  I`m a front-end web developer." />
                <a role='button' href='#portfolio' className='btn'
                >See what I`&#39`ve been making
                    {' '}
                    <span aria-hidden='true' className='hdrbtn'>&#x21e9;</span>
                </a>
            </div>
        </header>
    );
};

export default Header;