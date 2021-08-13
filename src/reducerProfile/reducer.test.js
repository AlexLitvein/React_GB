import React from 'react';
import { setName } from './actions';
import profileReducer from './reducer';

describe('reducer profile tests', () => {
    it('send name but name property not in store)', () => {
        const expected = {};

        const received = profileReducer(expected, setName('Boba'));
        expect(received).toEqual(expected);

    });
});