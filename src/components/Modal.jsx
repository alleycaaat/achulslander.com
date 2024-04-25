/* eslint-disable react/prop-types */
import { useEffect } from 'react';

import { Constants } from './util/Constants';

import '../styles.scss';

const Modal = ({ data, open, closeModal }) => {
    const url = Constants.url;
    
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === 'Escape' ? closeModal() : null;
        document.body.addEventListener('keydown', closeOnEscapeKey);
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey);
        };
    }, [closeModal]);

    if (!open) return null;

    const close = () => {
        closeModal();
    };

    return (
        <div id='modal-overlay'>
            <div
                id='modal'
                aria-expanded='true'
                className='modal'
            >
                <button className='close' aria-label='close' onClick={() => close()}>
                    &times;
                </button>
                <div className='modalcontent'>
                    <img className='image' src={`${ url }${ data.img }`} alt={data.alt} />
                    <p className='title'>{data.title}</p>
                    <p className='description'>{data.desc}</p>
                    <a
                        className='link'
                        href={data.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                    >See a demo - external link</a>
                </div>
            </div>
        </div>
    );
};

export default Modal;