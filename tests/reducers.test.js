import React from 'react';
import reducers from 'src/reducers';
import iniState from 'src/state';

describe('Reducers - Initialization', () => {
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

describe('Reducers - Builder - Reset', () => {
    const action = {'type': 'REGEX_BUILDER_RESET'};
    const newState = reducers(iniState, action);

    it('have no rules', () => {
        expect(newState.builder.rules.length).toEqual(0);
    });

    it('have no active option', () => {
        for (var i = 0, len = newState.builder.options; i < len; i++) {
            expect(newState.builder.options[i].active).toBeFalsy();
        }
    });
});