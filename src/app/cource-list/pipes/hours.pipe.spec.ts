import { HoursPipe } from './hours.pipe';

describe('HoursPipe', () => {

    const pipe = new HoursPipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });
    it('pipe transform 123', () => {
        expect(pipe.transform(123)).toBe('2h 05 min');
    });
    it('pipe transform 12345', () => {
        expect(pipe.transform(12345)).toBe('205h 75 min');
    });
    it('pipe transform 789456123', () => {
        expect(pipe.transform(789456123)).toBe('13157602h 05 min');
    });
});
