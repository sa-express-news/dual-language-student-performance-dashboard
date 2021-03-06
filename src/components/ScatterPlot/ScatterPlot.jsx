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
    const height        = width * 0.35;
    const padding       = width * 0.04;
    const tabletPad     = window.innerWidth < 980 ? 6 : 0;
    const staarKey      = isOnlyDualLanguage ? 'dual_high_score' : 'ell';
    const staarLabel    = isOnlyDualLanguage ? 'dual language' : 'EL';
    
    const xScale = getScale(
        [40, d3.max(campusList.map(campus => campus.staar_scores.all))],
        [padding, width - (padding)]
    );
    const yScale = getScale(
        [20, d3.max(campusList.map(campus => campus.staar_scores[staarKey]))],
        [height - padding, padding]
    );

    const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="scatter-plot">
            <hr />
            <div className="title">Schools ranked by STAAR passing rate</div>
            <div className="chatter">{`Each red circle represents a Bexar County school and they've been plotted by STAAR passing rate ranking. The vertical axis is the ${staarLabel} STAAR passing rate and the horizontal axis represents the campuswide passing rate. Thus, schools in the top right corner performed best in both ${staarLabel} program and campuswide evaluations. Schools on the bottom left performed worst. The school highlighted in blue is in the above bar chart.`}</div>
            <div className="action"><em>Click on any school to see performance details in the bar chart above.</em></div>
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
                        staarLabel={capitalizeFirstLetter(staarLabel)}
                        currCampus={currCampus}
                        setCampus={setCampus}
                     />
                     <Axis
                        type="axisLeft"
                        scale={yScale}
                        translate={`translate(${padding + tabletPad}, 0)`}
                     />
                     <Axis
                        type="axisBottom"
                        scale={xScale}
                        translate={`translate(0, ${height - padding - tabletPad})`}
                     />
                     <text
                        transform={`translate(${width / 2}, ${height - 10})`}
                        textAnchor="middle"
                    >Campuswide STAAR passing rate</text>
                     <text
                        transform="rotate(-90)"
                        textAnchor="middle"
                        x={height / -2}
                        y="12"
                    >{`${capitalizeFirstLetter(staarLabel)} STAAR passing rate`}</text>
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
