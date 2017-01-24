import _ from 'lodash';

export const REGEX_LOADER_LOAD = 'REGEX_LOADER_LOAD';

export const loadUrlValidationRegexAction = () => {
    var i = 0;
    return {
        type: REGEX_LOADER_LOAD,
        regex_options: [
            { name: 'Start of line', value: 'sol', active: true },
            { name: 'End of line', value: 'eol', active: true },
            { name: 'Global', value: 'g', active: false },
            { name: 'Case insensitive', value: 'i', active: false },
            { name: 'Multi line', value: 'm', active: false },
            { name: 'Unicode', value: 'u', active: false }
        ],
        regex_rules: [
            { identifier: _.uniqueId(), type: 'find', value: 'http', repeat_min: '1', repeat_max: '1'},
            { identifier: _.uniqueId(), type: 'find', value: 's', repeat_min: '0', repeat_max: '1'},
            { identifier: _.uniqueId(), type: 'find', value: '://', repeat_min: '1', repeat_max: '1'},
            { identifier: _.uniqueId(), type: 'find', value: 'www', repeat_min: '0', repeat_max: '1'},
            { identifier: _.uniqueId(), type: 'find', value: '.', repeat_min: '0', repeat_max: '1'},
            { identifier: _.uniqueId(), type: 'any', value: '0-9a-z', repeat_min: '1', repeat_max: '99'},
            { identifier: _.uniqueId(), type: 'find', value: '.', repeat_min: '1', repeat_max: '1'},
            { identifier: _.uniqueId(), type: 'any', value: '0-9a-z', repeat_min: '2', repeat_max: '6'},
        ],
        regex_tests: [
            { identifier: _.uniqueId(), subject: 'http://www.domain.com', must_match: true },
            { identifier: _.uniqueId(), subject: 'https://www.domain.com', must_match: true },
            { identifier: _.uniqueId(), subject: 'http://sub.domain.com', must_match: true },
            { identifier: _.uniqueId(), subject: 'http://domain', must_match: false },
            { identifier: _.uniqueId(), subject: 'http://.domain.com', must_match: false}
        ],
    }
};

export const loadEmailValidationRegexAction = () => {
    var i = 0;
    return {
        type: REGEX_LOADER_LOAD,
        regex_options: [
            { name: 'Start of line', value: 'sol', active: true },
            { name: 'End of line', value: 'eol', active: true },
            { name: 'Global', value: 'g', active: false },
            { name: 'Case insensitive', value: 'i', active: false },
            { name: 'Multi line', value: 'm', active: false },
            { name: 'Unicode', value: 'u', active: false }
        ],
        regex_rules: [
            { identifier: _.uniqueId(), type: 'word', value: '09az', repeat_min: '2', repeat_max: '80'},
            { identifier: _.uniqueId(), type: 'find', value: '@', repeat_min: '', repeat_max: ''},
            { identifier: _.uniqueId(), type: 'any', value: '0-9a-z', repeat_min: '2', repeat_max: '80'},
            { identifier: _.uniqueId(), type: 'find', value: '.', repeat_min: '', repeat_max: ''},
            { identifier: _.uniqueId(), type: 'any', value: 'a-z', repeat_min: '2', repeat_max: '4'},
        ],
        regex_tests: [
            { identifier: _.uniqueId(), subject: 'name@domain.com', must_match: true },
            { identifier: _.uniqueId(), subject: 'first.last@domain.com', must_match: true },
            { identifier: _.uniqueId(), subject: 'name@sub.domain.com', must_match: true },
            { identifier: _.uniqueId(), subject: 'name@sub.sub.domain.com', must_match: true },
            { identifier: _.uniqueId(), subject: 'name@domain', must_match: false},
            { identifier: _.uniqueId(), subject: 'name@.domain.com', must_match: false },
            { identifier: _.uniqueId(), subject: 'name@.domain.com', must_match: false },
            { identifier: _.uniqueId(), subject: 'name@Domain.com', must_match: true },
            { identifier: _.uniqueId(), subject: 'name@Domain.com', must_match: true },
            { identifier: _.uniqueId(), subject: 'name@domain.Com', must_match: true },
        ]
    }
};