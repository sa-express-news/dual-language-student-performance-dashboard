import React, { Component} from 'react';
import { hot } from 'react-hot-loader';

// modles
import models from '../../models';

// components
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

// styles
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.campuses = models.getCampuses();
        this.state = {
            campus: this.campuses.getCampus(186), // Bohnam Academy, 186, is default
        };
    }

    setCampus(id) {
        this.setState({
            campus: this.campuses.getCampus(id)
        })
    }

    render() {
        const { campus } = this.state;

        return(
            <div className="App">
                <NavBar url="https://www.expressnews.com/" />
                <div className="wrapper">
                    <Header />
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
