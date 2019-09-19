import React        from 'react';
import PropTypes    from 'prop-types';

// components
import Bar from './Bar';

// styles
import './BarChart.scss';

const orderedKeys = [
    'all',
    'ell',
    'dual_two_way',
    'dual_one_way',
    'esl_content',
    'esl_pull_out'
];

const titleMap = {
    all: 'Todos los estudiantes',
    dual_one_way: 'Lenguaje dual unidireccional',
    dual_two_way: 'Lenguaje dual bidireccional',
    esl_content: 'ESL basado en el contenido',
    esl_pull_out: 'ESL "pull-put"',
    ell: 'Todos los estudiantes EL',
};

const getBarID = key => key.split('_').join('-');

const getRows = (staarScores, max) => orderedKeys.filter(key => {
    return staarScores[key] && staarScores[key] > -1;
}).map((key, idx) => (
    <Bar
        title={titleMap[key]}
        score={staarScores[key]}
        max={max}
        barID={getBarID(key)}
        key={idx}
    />
));

const getMax = staarScores => orderedKeys.reduce((max, key) => {
    return staarScores[key] > max ? staarScores[key] : max;
}, 0);

const BarChart = ({ staarScores, name }) => (
    <div className="bar-chart">
        <div className="title">{ name } STAAR porcentaje de aprobación</div>
        { getRows(staarScores, getMax(staarScores)) }
    </div>
);

BarChart.propTypes = {
    staarScores: PropTypes.shape({
        id: PropTypes.number,
        all: PropTypes.number,
        dual_one_way: PropTypes.number,
        dual_two_way: PropTypes.number,
        esl_content: PropTypes.number,
        esl_pull_out: PropTypes.number,
        ell: PropTypes.number
    }).isRequired,
    name: PropTypes.string.isRequired,
};

export default BarChart
