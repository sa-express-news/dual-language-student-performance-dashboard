import React from 'react';

// styles
import './header.scss';

const getScatterPlotDesc = () => {
    return window.innerWidth > 767 ? ' use the scatter plot to see and click on those ELL and Dual Language programs that performed best on STAAR tests,' : '';
};

export default () => (
    <div className="header">
        <h1>Dual Language Student Performance Explorer</h1>
        <p className="byline">By <a href="https://www.expressnews.com/author/luke-whyte/" target="_blank">Luke Whyte</a> and <a href="https://www.expressnews.com/author/alia-malik/" target="_blank">Alia Malik</a>, Data updated June 10th, 2019</p>
        <p className="subhead">Use this tool to search, evaluate and compare dual language and english language learner STAAR test performance in programs throughout Bexar County. You can search for individual schools in the search bar, {getScatterPlotDesc()} and filter by all ELL programs or just Dual Language using the radio button. <em>All data sourced from the Texas Education Agency.</em></p>
        <p className="related"><strong>Related story:</strong> <a href="#" target="_blank">Dual language students...</a></p>
    </div>
)
