class Campuses {
    constructor() {
        this._showOnlyDualLanguage = false;
        this._campuses = this._buildCampusHashMap();
        this._list = this._buildCampusList();
        this._id = null;
    }

    _makeProperString(name) {
        return name.split(/\s+/).map(
            word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');
    }

    _mergeCampusProps(meta, staar) {
        return Object.assign(this.getEmptyCampus(), meta, {
            name: meta.name ? this._makeProperString(meta.name) : '',
            staar_scores: staar,
        });
    }

    _buildCampusHashMap() {
        const meta  = require('../data/meta.json');
        const staar = require('../data/staar.json');

        return Object.keys(meta).reduce((map, id) => {
            map.set(parseInt(id, 10), this._mergeCampusProps(meta[id], staar[id]));
            return map;
        }, new Map());
    }

    _setID(id = null) {
        this._id = id;
    }

    _getCampusByID() {
        if (this._campuses.has(this._id)) {
            return this._campuses.get(this._id);
        } else {
            return this.getEmptyCampus();
        }
    }
    
    _buildCampusList() {
        const list = [];
        this._campuses.forEach(campus => {
            if (
                !this._showOnlyDualLanguage ||
                (campus.dual_one_way && campus.dual_one_way > -1) ||
                (campus.dual_two_way && campus.dual_two_way > -1)
            ) {
                list.push(campus);
            }
        });
        return list;
    }

    setShowOnlyDualLanguage(isOnlyDualLanguage = false) {
        this._showOnlyDualLanguage = isOnlyDualLanguage;
        this._list = this._buildCampusList();
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
        return this._list.slice()
    }
}

export default Campuses