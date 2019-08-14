import React from 'react';
import PropTypes from 'prop-types';

//styles
import './Social.scss';

const linkMap = {
    facebook: url => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: url => `https://twitter.com/intent/tweet?url=${url}`,
    reddit: url => `https://www.reddit.com/submit?url=${url}`,
};

const logoMap = {
    facebook: () => require('../../icons/fb_logo.svg'),
    twitter: () => require('../../icons/twitter_logo.svg'),
    reddit: () => require('../../icons/reddit_logo.svg'),
};

const Social = ({ type, url }) => (
    <div className={`social ${type}`}>
        <a href={linkMap[type](url)} target="_blank">
            <img src={logoMap[type]()} alt={type} />
        </a>
    </div>
);

Social.propTypes = {
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Social