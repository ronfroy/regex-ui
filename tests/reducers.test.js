import React from 'react';
import reducers from '../src/reducers';

describe('Reducers', () => {
    it('must be initialization', () => {
        const state = undefined;
        const action = {'type': undefined};

        const newState = reducers(state, action);

        expect(newState instanceof Object).toBeTruthy();
        expect(typeof newState.regex).toBeTruthy();
        expect(typeof newState.navigation).toBeTruthy();
        expect(typeof newState.builder).toBeTruthy();
        expect(typeof newState.tester).toBeTruthy();
        expect(typeof newState.next_identifier).toBeTruthy();
    });
});