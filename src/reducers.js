import _ from 'lodash'
import {REGEX_BUILDER_ADD_RULE, REGEX_BUILDER_OPTION_CHANGE, REGEX_BUILDER_RESET} from './builder/builder-actions'
import {REGEX_BUILDER_CHANGE_RULE, REGEX_BUILDER_REMOVE_RULE} from './builder/rule-actions'
import {REGEX_TESTER_ADD_TEST, REGEX_TESTER_RESET} from './tester/tester-actions'
import {REGEX_TESTER_CHANGE_TEST, REGEX_TESTER_REMOVE_TEST} from './tester/test-actions'
import {REGEX_LOADER_LOAD} from './loader/loader-actions'
import regexBuilder from './builder/builder-service'
import init from './state'


const builderReducer = (state, action) => {

    if(REGEX_BUILDER_OPTION_CHANGE === action.type)
    {
        state.builder.options = _.map(state.builder.options, function(option) {
            if(option.name === action.option_name) {
                return _.assign({}, option, {
                    'active': !option.active
                })
            }

            return option
        })
    }

    if(REGEX_BUILDER_ADD_RULE === action.type)
    {
        state.builder.rules = _.concat(state.builder.rules, [{
            identifier: _.uniqueId(),
            type: 'find',
            value: '',
            repeat_min: '',
            repeat_max: ''
        }])
    }

    if(REGEX_BUILDER_REMOVE_RULE === action.type)
    {
        state.builder.rules = _.filter(state.builder.rules, function(rule) {
            return rule.identifier !== action.rule_identifier
        })
    }

    if(REGEX_BUILDER_RESET === action.type)
    {
        state.builder.options = _.map(state.builder.options, function(option) {
            return _.assign({}, option, { 'active': false })
        })

        state.builder.rules = []
    }

    if(REGEX_BUILDER_CHANGE_RULE === action.type)
    {
        state.builder.rules =_.map(state.builder.rules, function(rule) {
            var repeat_min = _.replace(action.rule_repeat_min, /\D/, '')
            var repeat_max = _.replace(action.rule_repeat_max, /\D/, '')

            if(rule.identifier === action.rule_identifier) {
                return _.assign({}, rule, {
                    'type': action.rule_type,
                    'value': action.rule_value,
                    'repeat_min': repeat_min,
                    'repeat_max': repeat_max
                })
            }

            return rule
        })
    }

    return state
}

const testerReducer = (state, action) => {

    if(REGEX_TESTER_RESET === action.type)
    {
        state.tester.tests = []
    }

    if(REGEX_TESTER_REMOVE_TEST === action.type)
    {
        state.tester.tests = _.filter(state.tester.tests, function(test) {
            return test.identifier !== action.test_identifier
        })
    }

    if(REGEX_TESTER_ADD_TEST === action.type)
    {
        state.tester.tests = _.concat(state.tester.tests, [{
            identifier: _.uniqueId(),
            subject: '',
            must_match: true
        }])
    }

    if(REGEX_TESTER_CHANGE_TEST === action.type)
    {
        state.tester.tests = _.map(state.tester.tests, function(test) {
            if(test.identifier === action.test_identifier) {
                return _.assign({}, test, {
                    'subject': action.test_subject,
                    'must_match': action.test_must_match
                })
            }

            return test
        })
    }

    return state
}

const loaderReducer = (state, action) => {
    if(REGEX_LOADER_LOAD == action.type)
    {
        state.builder.options = action.regex_options
        state.builder.rules = action.regex_rules
        state.tester.tests = action.regex_tests
    }

    return state
}

const appReducer = (state = init, action) => {

    state = builderReducer(state, action)
    state = testerReducer(state, action)
    state = loaderReducer(state, action)

    const regex = regexBuilder(state.builder)

    state.tester.tests = _.map(state.tester.tests, function(test) {
        return _.assign({}, test, {
            'pass': test.must_match === regex.test(test.subject)
        })
    })

    return _.assign({}, state, {
        'regex': regex.toString(),
    })
}

export default appReducer