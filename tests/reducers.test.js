import React from 'react';
import _ from 'lodash';
import reducers from 'src/reducers';
import initState from 'src/state';

const cloneState  = (state) => {
    return JSON.parse(JSON.stringify(state))
};

describe('Initialization', () => {
    const input = undefined;
    const action = {type: undefined};
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

describe('Builder', () => {
    describe('Rule', () => {
        describe('Add', () => {
            const input = cloneState(initState);
            const nbInputRule = input.builder.rules.length;
            const action = {type: 'REGEX_BUILDER_ADD_RULE'};
            const output = reducers(input, action);

            it('have one more rule', () => {
                expect(output.builder.rules.length).toEqual(nbInputRule + 1);
            });
        });

        describe('Remove', () => {
            const input = cloneState(initState);
            input.builder.rules.push({identifier: 'foo'});
            const nbInputRule = input.builder.rules.length;
            const action = {type: 'REGEX_BUILDER_REMOVE_RULE', rule_identifier: 'foo'};
            const output = reducers(input, action);

            it('have one less rule', () => {
                expect(output.builder.rules.length).toEqual(nbInputRule - 1);
            });

            it("doesn't contain removed rule", () => {
                _.each(output.builder.rules, (rule) => {
                    expect(rule.identifier).not.toEqual('foo')
                });
            });
        });

        describe('Change', () => {
            const input = cloneState(initState);
            input.builder.rules = [{identifier: 'foo', type: 'word', value: '', repeat_min: '', repeat_max: ''}];
            const action = {
                type: 'REGEX_BUILDER_CHANGE_RULE',
                rule_identifier: 'foo',
                rule_type: 'any',
                rule_value: 'a',
                rule_repeat_min: '1',
                rule_repeat_max: '2'
            };
            const output = reducers(input, action);

            it('must have type updated', () => {
                expect(output.builder.rules[0].type).toEqual(action.rule_type);
            });

            it('must have value updated', () => {
                expect(output.builder.rules[0].value).toEqual(action.rule_value);
            });
            it('must have minimum repeat updated', () => {
                expect(output.builder.rules[0].repeat_min).toEqual(action.rule_repeat_min);
            });
            it('must have maximun repeat updated', () => {
                expect(output.builder.rules[0].repeat_max).toEqual(action.rule_repeat_max);
            });
        });
    });

    describe('Option', () => {
        describe('Change', () => {
            const action = {type: 'REGEX_BUILDER_OPTION_CHANGE', option_name: 'foo'};

            it('must be activated', () => {
                const input = cloneState(initState);
                input.builder.options = [{name: 'foo', value: 'g', active: false}];
                expect(reducers(input, action).builder.options[0].active).toBeTruthy();
            });

            it('must be unactivated', () => {
                const input = cloneState(initState);
                input.builder.options = [{name: 'foo', value: 'g', active: true}];
                expect(reducers(input, action).builder.options[0].active).toBeFalsy();
            });
        });
    });

    describe('Reset', () => {
        const input = cloneState(initState);
        input.builder.rules.push({});
        const action = {type: 'REGEX_BUILDER_RESET'};
        const output = reducers(input, action);

        it('have no rules', () => {
            expect(output.builder.rules.length).toEqual(0);
        });

        it('have no active option', () => {
            _.each(output.builder.options, (option) => {
                expect(option.active).toBeFalsy()
            });
        });
    });
});

describe('Tester', () => {
    describe('Test', () => {
        describe('Add', () => {
            const input = cloneState(initState);
            const nbInputTests = input.tester.tests.length;
            const action = {type: 'REGEX_TESTER_ADD_TEST'};
            const output = reducers(input, action);

            it('have one more test', () => {
                expect(output.tester.tests.length).toEqual(nbInputTests + 1);
            });
        });

        describe('Remove', () => {
            const input = cloneState(initState);
            input.tester.tests.push({identifier: 'foo'});
            const nbInputTests = input.tester.tests.length;
            const action = {type: 'REGEX_TESTER_REMOVE_TEST', test_identifier: 'foo'};
            const output = reducers(input, action);

            it('have one less test', () => {
                expect(output.tester.tests.length).toEqual(nbInputTests - 1);
            });

            it("doesn't contain removed test", () => {
                _.each(output.tester.tests, (test) => {
                    expect(test.identifier).not.toEqual('foo')
                });
            });
        });
    });
});