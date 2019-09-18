import React from 'react';
import PropTypes from 'prop-types';

//styles
import './ToggleDualLanguage.scss';

const ToggleDualLanguage = ({ setShowOnlyDualLanguage, isOnlyDualLanguage }) => (
    <div className="toggle-dual-language">
        <label className="container">
            <input type="radio" onChange={() => setShowOnlyDualLanguage(false)} checked={!isOnlyDualLanguage} value="ell" />
            <span className="checkmark left"></span>
            <span className="label left">All EL</span>
        </label>
        <label className="container">
            <input type="radio" onChange={() => setShowOnlyDualLanguage(true)} checked={isOnlyDualLanguage} value="dual-language" />
            <span className="checkmark right"></span>
            <span className="label right">Dual Language</span>
        </label>
    </div>
);

ToggleDualLanguage.propTypes = {
    setShowOnlyDualLanguage: PropTypes.func.isRequired,
    isOnlyDualLanguage: PropTypes.bool.isRequired,
};

export default ToggleDualLanguage