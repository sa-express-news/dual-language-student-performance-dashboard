import React        from 'react';
import PropTypes    from 'prop-types';

const setBarWidth = (score, max) => score && score > -1 ? `${(+score / max) * 100}%` : '10%';

const getBarWidthVal = score => score && score > -1 ? score : '';

const setBackgroundColor = score => score && score > -1 ? 'rgba(33,150,243,0.65)' : '#FFFFFF';

const Bar = ({
    title,
    score,
    max,
    barID
}) => (
    <div className="bar">
        <div className="row-label">{ title }</div>
        <div className="row-bar">
            <span
                className={`bar-color ${barID}`}
                style={{ 
                    width: setBarWidth(score, max),
                    backgroundColor: setBackgroundColor(score),
                }}
            >
                <span className="bar-value">{ getBarWidthVal(score) }</span>
            </span>
        </div>
    </div>
);

Bar.propTypes = {
    title: PropTypes.string.isRequired,
    score: PropTypes.number,
    max: PropTypes.number.isRequired,
    barID: PropTypes.string.isRequired,
};

export default Bar
