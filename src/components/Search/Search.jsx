import React, { Component } from 'react';
import PropTypes from 'prop-types';

// styles
import './Search.scss';

class Search extends Component {
    handleSearch(merp, mop) {
        console.log(mop)
    }

    render() {
        const { campusList } = this.props;

        return (
            <div className="search">
                <p className="instructions">Search for a Bexar County elementary, middle or high school:</p>
                <input
                    type="text"
                    placeholder="Eg. Alamo Heights HS"
                    id="searchbar"
                    name="searchbar"
                    onChange={this.handleSearch}
                    list="searchlist"
                />
                <datalist id="searchlist">
                    { campusList.map(campus => (<option value={campus.name} key={campus.id} />)) }
                </datalist>
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