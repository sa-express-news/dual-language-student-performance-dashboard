class Campuses {
    constructor() {
        this._meta = this._resetMeta();
        this._staar = this._resetStaar();
        this._id = null;
    }

    _resetMeta() {
        return require('../data/meta.json');
    }

    _resetStaar() {
        return require('../data/staar.json');
    }

    _setID(id = null) {
        this._id = id
    }

    _getCampusByID() {
        if (this._meta[this._id] && this._staar[this._id]) {
            return Object.assign(this.getEmptyCampus(), Object.assign({}, this._meta[this._id], {
                staar_scores: this._staar[this._id],
            }));
        } else {
            return this.getEmptyCampus();
        }
    }

    getEmptyCampus() {
        return {
            id: -1,
            name: '',
            district: '',
            total_pop: -1,
            ell_pop: -1,
            total_attn_rate: -0.1,
            ell_attn_rate: -0.1,
            staar_scores: {
                id: -1,
                all: -1,
                dual_one_way: -1,
                dual_two_way: -1,
                esl_content: -1,
                esl_pull_out: -1,
                ell: -1
            },
        }
    }

    getCampus(campusID) {
        this._setID(campusID)
        return this._getCampusByID();
    }
}

export default Campuses