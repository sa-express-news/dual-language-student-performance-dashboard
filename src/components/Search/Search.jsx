import React, { Component } from 'react';
import PropTypes            from 'prop-types';

// styles
import './Search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleKeyDown  = this.handleKeyDown.bind(this);
        this.getSchool      = this.getSchool.bind(this);
    }

    handleOnChange(event) {
        this.setState({
            searchTerm: event.target.value,
        });
    }

    handleKeyDown(event) {
        if (event.keyCode === 13) {
            this.getSchool();
        }
    }

    getSchool() {
        const { setCampus, campusList } = this.props;
        const school = campusList.find(({ name }) => this.state.searchTerm === name);
        return school ? setCampus(school.id) : setCampus(null);
    }

    render() {
        const { campusList, isValidCampus } = this.props;

        return (
            <div className="search">
                <p className="instructions">Search for a Bexar County elementary, middle or high school:</p>
                <input
                    type="text"
                    placeholder="Eg. Bonham Academy"
                    id="searchbar"
                    name="searchbar"
                    onChange={this.handleOnChange}
                    onKeyDown={this.handleKeyDown}
                    list="searchlist"
                />
                <datalist id="searchlist" onChange={this.merp}>
                    { campusList.map(campus => (<option value={campus.name} key={campus.id} />)) }
                </datalist>
                <button type="submit" onClick={this.getSchool}><i className="fa fa-search"></i></button>
                {!isValidCampus && (<div className="no-canvas">Please search for a campus found in the dropdown list ^</div>)}
            </div>
        );
    }
}

Search.propTypes = {
    setCampus: PropTypes.func.isRequired,
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
    isValidCampus: PropTypes.bool.isRequired,
}

export default Search