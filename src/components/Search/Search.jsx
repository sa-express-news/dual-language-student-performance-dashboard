import React, { Component } from 'react';
import PropTypes from 'prop-types';

// styles
import './Search.scss';

class Search extends Component {
    handeSearch() {

    }

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    value="Eg. Alamo Heights HS"
                    id="search"
                    onChange={this.handleSearch}
                    placeholder="Search the Top 100 by name or filter by category below"
                />
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
}

export default Search