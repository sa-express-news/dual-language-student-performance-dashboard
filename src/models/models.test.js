import Campuses from './Campuses';

describe('Campus model tests', () => {
    const campuses = new Campuses();

    test('getCampus returns selected campus by ID', () => {
        let campus = campuses.getCampus(7);
        expect(campus.id).toBe(7);

        campus = campuses.getCampus(null)
        expect(campus.id).toBe(null);
    });

    test('getCampusList returns list of campus name and ID hashes', () => {
        const list = campuses.getCampusList()
        expect(list[3].name).toBe('Ray D Corbett J H')
        expect(list[8].id).toBe(9)
    })
});