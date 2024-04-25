/* eslint-disable react/prop-types */
const SkillIcons = ({ onscreen }) => {
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
            name: 'ReactJS',
            url: 'react',
            delay: '1.5s',
        },
        {
            name: 'Bootstrap',
            url: 'bootstrap2',
            delay: '1.8s',
        },
        {
            name: 'React Native',
            url: 'react-native',
            delay: '2.1s'
        }
    ];

    return (
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
                            src={`https://ach-photos.netlify.app/${ icon.url }.svg`}
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
    );
};

export default SkillIcons;