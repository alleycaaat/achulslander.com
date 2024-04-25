const SocialIcons = () => {

    const icons = [
        {
            name: 'codepen',
            url: 'https://codepen.io/alleycaaat',
            img: 'codepen_icon',
            sr: 'External link to AC`s codepen',
        },
        {
            name: 'twitter',
            url: 'https://twitter.com/alleycaaat',
            img: 'twitter_icon',
            sr: 'External link to AC`s twitter',
        },
        {
            name: 'hashnode',
            url: 'https://blog.achulslander.com/',
            img: 'hashnode',
            sr: 'External link to AC`s blog',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/alleycaaat',
            img: 'github_icon',
            sr: 'External link to AC`s GitHub',
        },
    ];

    return (
        <div className='socialIcons' aria-label='social media icons'>
            <ul>
                {icons.map((icon, i) => (
                    <li className='tooltip--triangle right' data-tooltip={`${ icon.name }`} key={i}>
                        <span className='hex-shape bob-on-hover'>
                            <a href={icon.url}
                                rel='noopener noreferrer'
                                target='_blank'>
                                <img
                                    aria-hidden='true'
                                    loading='lazy'
                                    className='icon'
                                    src={`https://ach-photos.netlify.app/${ icon.img }.svg`}
                                    alt={`${ icon.name } logo`}
                                />
                                <span className='visually-hidden'>
                                    {icon.sr}
                                </span>
                                <span className='tooltiptext'>{icon.name}</span>
                            </a>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialIcons;