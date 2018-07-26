import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selector', () => {
    describe('authorsFormattedDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'jaemin-han', firstName: 'Jaemin', lastName: 'Han'},
                {id: 'john-smith', firstName: 'John', lastName: 'Smith'}
            ];

            const expected = [
                {value: 'jaemin-han', text: 'Jaemin Han'},
                {value: 'john-smith', text: 'John Smith'}
            ];

            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });
});