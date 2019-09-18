import React        from 'react';
import PropTypes    from 'prop-types';

// styles
import './SchoolStats.scss';

const SchoolStats = ({
    totalPop,
    ellPop,
    totalAttnRate,
    ellAttnRate
}) => (
    <div className="school-stats">
        <div className="block-wrapper">
            <div className="content">
                <div className="number">{ totalPop }</div>
                <div className="desc">Total Student Population</div>
            </div>
        </div>
        <div className="block-wrapper">
            <div className="content">
                <div className="number">{ ellPop }</div>
                <div className="desc">Total Ell Population</div>
            </div>
        </div>
        <div className="block-wrapper">
            {totalAttnRate && (
                <div className="content">
                    <div className="number">{ totalAttnRate }</div>
                    <div className="desc">Total Attendance Rate</div>
                </div>
            )}
        </div>
        <div className="block-wrapper">
            {ellAttnRate && (
                <div className="content">
                    <div className="number">{ ellAttnRate }</div>
                    <div className="desc">Ell Attendance Rate</div>
                </div>
            )}
        </div>
    </div>
);

SchoolStats.propTypes = {
    totalPop: PropTypes.number,
    ellPop: PropTypes.number,
    totalAttnRate: PropTypes.number,
    ellAttnRate: PropTypes.number,
};

export default SchoolStats
