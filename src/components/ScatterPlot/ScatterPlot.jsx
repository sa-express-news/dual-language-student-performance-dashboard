import React        from 'react';
import PropTypes    from 'prop-types';
import * as d3      from 'd3';

// components
import Axis     from './Axis';
import Points   from './Points';

// styles
import './ScatterPlot.scss';

const getScale = (domain, range) => d3.scaleLinear().domain(domain).range(range).nice();

const ScatterPlot = ({ campusList, isOnlyDualLanguage, width, currCampus, setCampus }) => {
    const height        = width * 0.28;
    const padding       = width * 0.04;
    const staarKey      = isOnlyDualLanguage ? 'dual_two_way' : 'ell';
    const staarLabel    = isOnlyDualLanguage ? 'Dual Language' : 'All Ell';
    
    const xScale = getScale(
        [40, d3.max(campusList.map(campus => campus.staar_scores.all))],
        [padding, width - (padding)]
    );
    const yScale = getScale(
        [20, d3.max(campusList.map(campus => campus.staar_scores[staarKey]))],
        [height - padding, padding]
    );

    return (
        <div className="scatter-plot">
            <div className="title">Schools ranked by average Staar score</div>
            <div className="chatter">{`Each point represents a Bexar County school. The vertical axis is the ${staarLabel} staar score and the horizontal axis represents the all student average score.`}</div>
            <div className="action">Click on any school for more details.</div>
            <svg width={width} height={height}>
                 <g>
                    <Axis
                        type="axisLeft"
                        scale={yScale}
                        translate={`translate(${padding}, 0)`}
                        len={width - padding}
                        isGridline
                     />
                     <Points
                        campusList={campusList}
                        height={height}
                        xScale={xScale}
                        yScale={yScale}
                        staarKey={staarKey}
                        currCampus={currCampus}
                        setCampus={setCampus}
                     />
                     <Axis
                        type="axisLeft"
                        scale={yScale}
                        translate={`translate(${padding}, 0)`}
                     />
                     <Axis
                        type="axisBottom"
                        scale={xScale}
                        translate={`translate(0, ${height - padding})`}
                     />
                     <text
                        transform={`translate(${width / 2}, ${height - 10})`}
                        textAnchor="middle"
                    >All students</text>
                     <text
                        transform="rotate(-90)"
                        textAnchor="middle"
                        x={height / -2}
                        y="12"
                    >{`${staarLabel} students`}</text>
                 </g>
            </svg>
        </div>
    )
};

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
    isOnlyDualLanguage: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
    currCampus: PropTypes.number,
    setCampus: PropTypes.func.isRequired,
};

export default ScatterPlot
