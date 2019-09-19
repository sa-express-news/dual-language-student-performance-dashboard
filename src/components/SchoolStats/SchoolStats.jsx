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
                <div className="desc">Población estudiantil total</div>
            </div>
        </div>
        <div className="block-wrapper">
            <div className="content">
                <div className="number">{ ellPop }</div>
                <div className="desc">Población estudiantil EL total</div>
            </div>
        </div>
        <div className="block-wrapper">
            {totalAttnRate && (
                <div className="content">
                    <div className="number">{ totalAttnRate }%</div>
                    <div className="desc">Tasa total de asistencia</div>
                </div>
            )}
        </div>
        <div className="block-wrapper">
            {ellAttnRate && (
                <div className="content">
                    <div className="number">{ ellAttnRate }%</div>
                    <div className="desc">Tasa de asistencia de EL</div>
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
