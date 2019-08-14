import React from 'react';
import PropTypes from 'prop-types';

// components
import Social from '../Social/Social';

// styles
import './SocialBlock.scss';

const SocialBlock = ({ url }) => (
    <div className="social-block">
		<Social type="facebook" url={url} />
		<Social type="twitter" url={url} />
		<Social type="reddit" url={url} />
	</div>
);

SocialBlock.propTypes = {
    url: PropTypes.string.isRequired,
};

export default SocialBlock
