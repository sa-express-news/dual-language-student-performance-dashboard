class Campuses {
    constructor() {
        this._meta = this._setMeta();
        this._staar = this._setStaar();
        this._id = this._setID();
    }

    _setMeta() {
        return require('../data/meta.json')
    }

    _setStaar() {
        return require('../data/staar.json')
    }

    _setID(id = null) {
        return id;
    }

    getCampus(campusID) {
        this._setID(campusID)
        return this._getCampusByID()
    }
}

export default Campuses