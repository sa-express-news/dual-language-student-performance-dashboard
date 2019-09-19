import React, { Component } from 'react';
import { hot }              from 'react-hot-loader';

// modles
import models from '../../models';

// components
import NavBar               from '../NavBar/NavBar';
import Header               from '../Header/Header';
import Search               from '../Search/Search';
import ToggleDualLanguage   from '../ToggleDualLanguage/ToggleDualLanguage';
import ScatterPlot          from '../ScatterPlot/ScatterPlot';
import Dashboard            from '../Dashboard/Dashboard';

// styles
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.campuses = models.getCampuses();
        this.state = {
            campus: this.campuses.getCampus(186), // Bohnam Academy, 186, is default
            isOnlyDualLanguage: this.campuses.isOnlyDualLanguage(),
            scatterPlotWidth: 0,
        };
        this.setScatterPlotWidth    = this.setScatterPlotWidth.bind(this);
        this.setCampus              = this.setCampus.bind(this);
        this.setIsOnlyDualLanguage  = this.setIsOnlyDualLanguage.bind(this);
    }

    componentDidMount() {
        this.setScatterPlotWidth();
        window.addEventListener('resize', this.setScatterPlotWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setScatterPlotWidth);
    }

    setCampus(id) {
        this.setState({
            campus: this.campuses.getCampus(id),
        })
    }

    setIsOnlyDualLanguage(isOnlyDualLanguage) {
        this.campuses.setShowOnlyDualLanguage(isOnlyDualLanguage);
        this.setState({
            isOnlyDualLanguage: this.campuses.isOnlyDualLanguage(),
        });
    }

    setScatterPlotWidth() {
        this.setState({
            scatterPlotWidth: document.querySelector('div.App div.wrapper').clientWidth,
        });
    }

    render() {
        const { campus, isOnlyDualLanguage, scatterPlotWidth } = this.state;

        return(
            <div className="App">
                <NavBar url="https://www.expressnews.com/dual-language-student-performance-explorer/" />
                <div className="wrapper">
                    <Header />
                    <Search
                        setCampus={this.setCampus}
                        campusList={this.campuses.getCampusList()}
                        isValidCampus={!!campus.id}
                    />
                    {campus.id && <Dashboard campus={campus} />}
                    <ToggleDualLanguage
                        setShowOnlyDualLanguage={this.setIsOnlyDualLanguage}
                        isOnlyDualLanguage={isOnlyDualLanguage}
                    />
                    <ScatterPlot
                        campusList={this.campuses.getCleanCampusList()}
                        isOnlyDualLanguage={this.campuses.isOnlyDualLanguage()}
                        width={scatterPlotWidth}
                        currCampus={campus.id}
                        setCampus={this.setCampus}
                    />
                    <div className="definitions">
                        <div className="title">Definitions</div>
                        <ul>
                            <li><span>Two-way dual language:</span> Integrates native English speakers with native speakers of another language, usually Spanish. All academic subjects are taught in both languages, with the goal of achieving literacy and spoken fluency in both languages.</li>
                            <li><span>One-way dual language:</span> Serves only students with limited English. All academic subjects are taught in English and another language (usually Spanish) with the goal of achieving literacy and spoken fluency in both languages.</li>
                            <li><span>Content-based English as a second language:</span> Serves students with limited English. Provides a full-time certified teacher for supplemental help with all academic content areas such as mathematics, science and social studies.</li>
                            <li><span>Pull-out English as a second language:</span> Serves students with limited English. Provides a part-time certified teacher for English language arts instruction, while students remain in mainstream classes for all other subjects.</li>
                        </ul>
                        <div className="note"><em>Note: To mask individual student perfomance in compliance with the Family Educational Rights and Privacy Act, programs with less than five test-takers are not included in this explorer.</em></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
