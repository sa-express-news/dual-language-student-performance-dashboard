class Campuses {
    constructor() {
        this._meta = this._resetMeta();
        this._staar = this._resetStaar();
        this._list = this._buildList();
        this._id = null;
    }

    _resetMeta() {
        return require('../data/meta.json');
    }

    _resetStaar() {
        return require('../data/staar.json');
    }

    _setID(id = null) {
        this._id = id;
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

    _makeProperString(name) {
        return name.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }
    
    _buildList() {
        return Object.keys(this._meta).reduce((list, id) => {
            list.push({
                id: this._meta[id].id,
                name: this._makeProperString(this._meta[id].name)
            });
            return list;
        }, []);
    }

    getEmptyCampus() {
        return {
            id: null,
            name: '',
            district: '',
            total_pop: null,
            ell_pop: null,
            total_attn_rate: null,
            ell_attn_rate: null,
            staar_scores: {
                id: null,
                all: null,
                dual_one_way: null,
                dual_two_way: null,
                esl_content: null,
                esl_pull_out: null,
                ell: null
            },
        }
    }

    getCampus(campusID) {
        this._setID(campusID)
        return this._getCampusByID();
    }

    getCampusList() {
        return this._list;
    }

    cloneCampusList() {
        return Object.assign({}, this._list);
    }
}

export default Campuses