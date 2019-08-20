import React, { Component } from 'react';
import { hot }              from 'react-hot-loader';

// modles
import models from '../../models';

// components
import NavBar           from '../NavBar/NavBar';
import Header           from '../Header/Header';
import Search           from '../Search/Search';
import ScatterPlot      from '../ScatterPlot/ScatterPlot';
import Dashboard        from '../Dashboard/Dashboard';

// styles
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.campuses = models.getCampuses();
        this.state = {
            campus: this.campuses.getCampus(186), // Bohnam Academy, 186, is default
        };
        this.setCampus = this.setCampus.bind(this);
    }

    setCampus(id) {
        this.setState({
            campus: this.campuses.getCampus(id),
        })
    }

    render() {
        const { campus } = this.state;

        return(
            <div className="App">
                <NavBar url="https://www.expressnews.com/" />
                <div className="wrapper">
                    <Header />
                    <Search
                        setCampus={this.setCampus}
                        campusList={this.campuses.getCampusList()}
                        isValidCampus={!!campus.id}
                    />
                    <ScatterPlot campusList={this.campuses.getCampusList()} />
                    {campus.id && <Dashboard campus={campus} />}
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
