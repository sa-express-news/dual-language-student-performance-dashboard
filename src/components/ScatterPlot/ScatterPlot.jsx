import React        from 'react';
import PropTypes    from 'prop-types';

// styles
import './ScatterPlot.scss';

const ScatterPlot = ({ campusList }) => (
    <div className="scatter-plot">
        <svg width="100%" height="300px"></svg>
    </div>
);

ScatterPlot.propTypes = {
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
};

export default ScatterPlot