import React from 'react';
import preloaderLight from '../../icons/preloader-light.svg';
import preloaderDark from '../../icons/preloader-dark.svg';
import s from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={props.color === 'light' ? preloaderLight : preloaderDark}
                 className={s.preloader}
                 alt='Preloader'
            />
        </div>
    );
};

export default Preloader;