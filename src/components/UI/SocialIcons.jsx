import { Constants } from '../util/Constants';

const SocialIcons = () => {

    const icons = Constants.socialIcons;
    const url = Constants.url;

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
                                    src={`${ url }${ icon.img }.svg`}
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