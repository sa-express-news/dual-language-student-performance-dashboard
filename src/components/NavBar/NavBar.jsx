import React from 'react';
import PropTypes from 'prop-types';

// components
import ENLogo       from '../ENLogo/ENLogo';
import SocialBlock  from '../SocialBlock/SocialBlock';

// styles
import './NavBar.scss';

const NavBar = ({ url }) => (
    <div className="nav-bar">
        <div className="left">
            <ENLogo />
        </div>
        <div className="right">
            <SocialBlock url={url} />
        </div>
    </div>
);

NavBar.propTypes = {
    url: PropTypes.string.isRequired,
};

export default NavBar;
