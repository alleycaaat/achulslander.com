/* eslint-disable react/prop-types */
import { Constants } from '../util/Constants';

const SkillIcons = ({ onscreen }) => {
    const icons = Constants.skillIcons;
    const url = Constants.url;

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
                            src={`${ url }${ icon.url }.svg`}
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