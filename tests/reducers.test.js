import React from 'react';
import reducers from '../src/reducers';

describe('Reducer - Initialization', () => {

    const state = undefined;
    const action = {'type': undefined};
    const newState = reducers(state, action);

    it('must have regex as string', () => {
        expect(typeof newState.regex).toEqual('string');
    });

    it('must have next_identifier as number', () => {
        expect(typeof newState.next_identifier).toEqual('number');
    });

    it('must have navigation as array', () => {
        expect(newState.navigation instanceof Array).toBeTruthy();
    });

    it('must have builder as object', () => {
        expect(newState.builder instanceof Object).toBeTruthy();
    });

    it('must have tester as object', () => {
        expect(newState.tester instanceof Object).toBeTruthy();
    });
});