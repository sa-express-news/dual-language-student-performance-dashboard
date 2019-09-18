import React from 'react';

// styles
import './header.scss';

const getScatterPlotDesc = () => {
    return window.innerWidth > 767 ? ' click on the scatter plot to evaluate programs ranked by STAAR score,' : '';
};

export default () => (
    <div className="header">
        <h1>Dual Language Student Performance Explorer</h1>
        <p className="explorer-byline">By <a href="https://www.expressnews.com/author/luke-whyte/" target="_blank">Luke Whyte</a> and <a href="https://www.expressnews.com/author/alia-malik/" target="_blank">Alia Malik</a>, Data updated June 10th, 2019</p>
        <p className="subhead">Use this tool to search and compare Bexar County Dual Language and English Language Learner (ELL) program student performance on STAAR tests. You can search for a school in the search bar, {getScatterPlotDesc()} and filter by all ELL or just Dual Language programs. <em>All data sourced from the Texas Education Agency.</em></p>
        <p className="related"><strong>Related story:</strong> <a href="#" target="_blank">Dual language students...</a></p>
    </div>
)
