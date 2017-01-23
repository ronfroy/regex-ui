import React from 'react';
import reducers from 'src/reducers';
import initState from 'src/state';

const cloneState  = (state) => {
    return JSON.parse(JSON.stringify(state))
};

describe('Reducers - Initialization', () => {
    const input = undefined;
    const action = {'type': undefined};
    const output = reducers(input, action);

    it('must have regex as string', () => {
        expect(typeof output.regex).toEqual('string');
    });

    it('must have navigation as array', () => {
        expect(output.navigation instanceof Array).toBeTruthy();
    });

    it('must have builder as object', () => {
        expect(output.builder instanceof Object).toBeTruthy();
    });

    it('must have tester as object', () => {
        expect(output.tester instanceof Object).toBeTruthy();
    });
});

describe('Reducers - Builder - Add rule', () => {
    const input = cloneState(initState);
    const nbInputRule = input.builder.rules.length;
    const action = {'type': 'REGEX_BUILDER_ADD_RULE'};
    const output = reducers(input, action);

    it('have one more rule', () => {
        expect(output.builder.rules.length).toEqual(nbInputRule + 1);
    });
});

describe('Reducers - Builder - Remove rule', () => {
    const identifier = 123;
    const input = cloneState(initState);
    input.builder.rules.push({identifier: identifier});
    const nbInputRule = input.builder.rules.length;
    const action = {'type': 'REGEX_BUILDER_REMOVE_RULE', 'rule_identifier': identifier};
    const output = reducers(input, action);

    it('have one less rule', () => {
        expect(output.builder.rules.length).toEqual(nbInputRule - 1);
    });

    it("doesn't contain removed rule", () => {
        for (var i = 0, len = output.builder.rules.length; i < len; i++) {
            expect(output.builder.rules[i].identifier).not.toEqual(identifier);
        }
    });
});

describe('Reducers - Builder - Reset', () => {
    const input = cloneState(initState);
    input.builder.rules.push({});
    const action = {'type': 'REGEX_BUILDER_RESET'};
    const output = reducers(input, action);

    it('have no rules', () => {
        expect(output.builder.rules.length).toEqual(0);
    });

    it('have no active option', () => {
        for (var i = 0, len = output.builder.options; i < len; i++) {
            expect(output.builder.options[i].active).toBeFalsy();
        }
    });
});