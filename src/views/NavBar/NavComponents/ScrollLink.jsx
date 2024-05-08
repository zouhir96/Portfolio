import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ to, smooth, duration, offset, children }) => {
    return (
        <Link
            to={to}
            smooth={smooth}
            duration={duration}
            offset={offset}
            className='cursor-pointer underline'
        >
            {children}
        </Link>
    );
};

export default ScrollLink;
