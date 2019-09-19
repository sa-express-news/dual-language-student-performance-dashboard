import React from 'react';

// styles
import './header.scss';

const getScatterPlotDesc = () => {
    return window.innerWidth > 767 ? ' click on the scatter plot to evaluate programs ranked by STAAR passing rate,' : '';
};

export default () => (
    <div className="header">
        <h1>Dual Language Student Performance Explorer</h1>
        <p className="explorer-byline">By <a href="https://www.expressnews.com/author/luke-whyte/" target="_blank">Luke Whyte</a> and <a href="https://www.expressnews.com/author/alia-malik/" target="_blank">Alia Malik</a>, Data updated June 10th, 2019</p>
        <p className="subhead">Use this tool to search and compare Bexar County dual language and English learner (EL) program student passing rates on STAAR tests. You can search for a school in the search bar, {getScatterPlotDesc()} and filter by all EL or just dual language programs. <em>All data sourced from the Texas Education Agency.</em></p>
        <p className="related"><strong>Related story:</strong> <a href="https://www.expressnews.com/news/education/article/doubling-down-dual-language-programs-in-San-Antoni-14434903.php" target="_blank">As dual language programs soar in San Antonio schools, growing pains ensue</a></p>
        <p className="related"><a href="https://www.expressnews.com/explorador-de-rendimiento-del-estudiante-de-lenguaje-dual/">Ver en español</a></p>
    </div>
)
