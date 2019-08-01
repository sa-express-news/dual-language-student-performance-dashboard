import React, { Component} from 'react';
import { hot } from 'react-hot-loader';

// modles
import models from '../../models';

// styles
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.campuses = models.getCampuses();
        this.state = {
            campus: this.campuses.getEmptyCampus(),
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
            <div className="App">{ campus.name }</div>
        );
    }
}

export default hot(module)(App);
