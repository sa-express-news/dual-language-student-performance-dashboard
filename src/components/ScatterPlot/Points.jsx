import React        from 'react';
import PropTypes    from 'prop-types';

// components
import Tooltip from './Tooltip';

const positionGroup = (x, y) => `translate(${x}, ${y})`;

const isSelectedCampus = (campus, currCampus) => campus.id === currCampus;

const Points = ({
    campusList,
    xScale,
    yScale,
    staarKey,
    currCampus,
    setCampus
}) => campusList.map((campus, idx) => {
    const translate     = positionGroup(xScale(campus.staar_scores.all), yScale(campus.staar_scores[staarKey]));
    const radius        = isSelectedCampus(campus, currCampus) ? 10 : 4;
    const color         = isSelectedCampus(campus, currCampus) ? '33,150,243' : '193,8,27';
    return (
        <g key={idx} transform={translate} className="point">
            <Tooltip
                campus={campus}
                staarKey={staarKey}
                isSelectedCampus={isSelectedCampus(campus, currCampus)}
            />
            {isSelectedCampus && (
                <circle
                    r={4}
                    fill={`rgba(${color},0.3)`}
                    stroke={`rgba(${color},0.8)`}
                    strokeWidth="1"
                />
            )}
            <circle
                r={radius}
                fill={`rgba(${color},0.3)`}
                stroke={`rgba(${color},0.8)`}
                strokeWidth="1"
                onClick={() => setCampus(campus.id)}
            />
        </g>
    )
});

Points.propTypes = {
    campusList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        district: PropTypes.string,
        total_pop: PropTypes.number,
        ell_pop: PropTypes.number,
        total_attn_rate: PropTypes.number,
        ell_attn_rate: PropTypes.number,
        staar_scores: PropTypes.shape({
            id: PropTypes.number,
            all: PropTypes.number,
            dual_one_way: PropTypes.number,
            dual_two_way: PropTypes.number,
            esl_content: PropTypes.number,
            esl_pull_out: PropTypes.number,
            ell: PropTypes.number
        }).isRequired,
    })).isRequired,
    xScale: PropTypes.func.isRequired,
    yScale: PropTypes.func.isRequired,
    staarKey: PropTypes.string.isRequired,
    currCampus: PropTypes.number,
    setCampus: PropTypes.func.isRequired,
};

export default Points
