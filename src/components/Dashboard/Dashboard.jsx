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
        <hr />
        <SchoolStats
            totalPop={campus.total_pop}
            ellPop={campus.ell_pop}
            totalAttnRate={campus.total_attn_rate}
            ellAttnRate={campus.ell_attn_rate}
        />
        <BarChart staarScores={campus.staar_scores} />
        <div className="definitions">
            <div className="title">Definitions</div>
            <ul>
                <li><span>Two-way dual language:</span> Integrates native English speakers with native speakers of another language, usually Spanish. All academic subjects are taught in both languages, with the goal of achieving literacy and spoken fluency in both languages.</li>
                <li><span>One-way dual language:</span> Serves only students with limited English. All academic subjects are taught in English and another language (usually Spanish) with the goal of achieving literacy and spoken fluency in both languages.</li>
                <li><span>Content-based English as a second language:</span> Serves students with limited English. Provides a full-time certified teacher for supplemental help with all academic content areas such as mathematics, science and social studies.</li>
                <li><span>Pull-out English as a second language:</span> Serves students with limited English. Provides a part-time certified teacher for English language arts instruction, while students remain in mainstream classes for all other subjects.</li>
            </ul>
        </div>
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
