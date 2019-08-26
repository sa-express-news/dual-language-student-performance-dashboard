import React        from 'react';
import PropTypes    from 'prop-types';

const getText = (width, height, offset, campus, staarKey) => {
    const len           = campus.name.length
    const textLength    = len < 17 ? null : `${width * 0.95}`;
    const name          = len < 17 ? campus.name : campus.name.slice(0, 16) + '...';
    const scoreLabel    = staarKey === 'ell' ? 'Ell' : 'DL'
    const score         = `${scoreLabel} staar score: ${campus.staar_scores[staarKey]}`;

    return (
        <g>
            <text
                textLength={textLength}
                y={((height * 0.62) + offset) * -1}
                x={-56}
                className="name"
            >{name}</text>
            <text
                y={((height * 0.62) + offset) * -1}
                x={-56}
                dy={20}
            >{score}</text>
        </g>
    );
};

const getData = (width, height, offset, radius) => {
    const left      = -width / 2;
    const right     = width / 2;
    const top       = -offset - height;
    const bottom    = -offset;
    return `M ${0},${0} 
        L ${-offset},${bottom} 
        H ${left + radius}
        Q ${left},${bottom} ${left},${bottom - radius}  
        V ${top + radius}   
        Q ${left},${top} ${left + radius},${top}
        H ${right - radius}
        Q ${right},${top} ${right},${top + radius}
        V ${bottom - radius}
        Q ${right},${bottom} ${right - radius},${bottom}
        H ${offset} 
        L ${0},${0} z`;
};

const Tooltip = ({ campus, staarKey, isSelectedCampus }) => {
    const width     = 120;
    const height    = 50;
    const offset    = 5;
    const radius    = 5;
    const stroke    = isSelectedCampus ? 'rgb(33,150,243)' : 'rgb(193,8,27)';

    return (
        <g className="tooltip">
            <path d={getData(width, height, offset, radius)} stroke={stroke} />
            {getText(width, height, offset, campus, staarKey)}
        </g>
    );
}

Tooltip.propTypes = {
    campus: PropTypes.shape({
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
    }).isRequired,
    staarKey: PropTypes.string.isRequired,
    isSelectedCampus: PropTypes.bool.isRequired,
}

export default Tooltip
