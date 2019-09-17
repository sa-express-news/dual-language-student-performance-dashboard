import React        from 'react';
import PropTypes    from 'prop-types';

// components
import SchoolStats  from '../SchoolStats/SchoolStats';
import BarChart     from '../BarChart/BarChart';

// styles
import './Dashboard.scss';

const Dashboard = ({ campus }) => (
    <div className="dashboard">
        <h2>{campus.name}</h2>
        <SchoolStats
            totalPop={campus.total_pop}
            ellPop={campus.ell_pop}
            totalAttnRate={campus.total_attn_rate}
            ellAttnRate={campus.ell_attn_rate}
        />
        <BarChart staarScores={campus.staar_scores} name={campus.name} />
    </div>
)

Dashboard.propTypes = {
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
    }).isRequired
};

export default Dashboard
