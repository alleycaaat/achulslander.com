/* eslint-disable react/prop-types */
import { Constants } from './util/Constants';

const FullPortfolio = ({ setFullPortfolioHidden }) => {
    const modalInfo = Constants.modalInfo;
    const url = Constants.url;

    return (
        <section className='fullportfolio' id='portfolio'>
            <h2>Project Gallery</h2>

            <button
                className='projBtn'
                onClick={() => setFullPortfolioHidden(true)}
            >See fewer projects</button>
            <div className='row'>

                {modalInfo.map((proj, i) => (
                    <div className='fullproj' id={proj.id} key={i}>
                        <img
                            className='ope'
                            loading='lazy'
                            decoding='async'
                            src={`${ url }${ proj.img }`}
                            alt={proj.alt}
                        />

                        <div className='projDesc'>
                            <h4>{proj.title}</h4>
                            <h5>{proj.stack}</h5>
                            <p>{proj.desc}</p>
                            <p className='links'>
                                <a
                                    href={proj.code}
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >Code</a>{' '}|{' '}
                                <a
                                    href={proj.demo}
                                    target='_blank'
                                    rel='noreferrer noopener'
                                >Demo</a>
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default FullPortfolio;