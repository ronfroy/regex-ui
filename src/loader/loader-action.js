export const loadUrlValidationRegexAction = () => {
    var i = 0;
    return {
        type: 'REGEX_LOADER_LOAD',
        regex_options: [
            { name: 'Global', value: 'g', active: false },
            { name: 'Case insensitive', value: 'i', active: false },
            { name: 'Multi line', value: 'm', active: false }
        ],
        regex_rules: [
            { identifier: ++i, type: 'startOfLine', value: ''},
            { identifier: ++i, type: 'find', value: 'http'},
            { identifier: ++i, type: 'maybe', value: 's'},
            { identifier: ++i, type: 'find', value: '://'},
            { identifier: ++i, type: 'maybe', value: 'www.'},
            { identifier: ++i, type: 'anything', value: ''},
            { identifier: ++i, type: 'endOfLine', value: ''},
        ],
        regex_tests: [
            { identifier: ++i, subject: 'http://www.domain.com', must_match: true, pass: true },
            { identifier: ++i, subject: 'https://www.domain.com', must_match: true, pass: true },
            { identifier: ++i, subject: 'http://sub.domain.com', must_match: true, pass: true },
            { identifier: ++i, subject: 'http://domain', must_match: false, pass: true },
            { identifier: ++i, subject: 'http://.domain.com', must_match: false, pass: true }
        ],
        next_identifier: ++i
    }
};

export const loadEmailValidationRegexAction = () => {
    var i = 0;
    return {
        type: 'REGEX_LOADER_LOAD',
        regex_options: [
            { name: 'Global', value: 'g', active: false },
            { name: 'Case insensitive', value: 'i', active: false },
            { name: 'Multi line', value: 'm', active: false }
        ],
        regex_rules: [
            { identifier: ++i, type: 'startOfLine', value: ''},
            { identifier: ++i, type: 'range', value: '09az'},
            { identifier: ++i, type: 'find', value: '@'},
            { identifier: ++i, type: 'range', value: '09az'},
            { identifier: ++i, type: 'find', value: '.'},
            { identifier: ++i, type: 'range', value: 'az'},
            { identifier: ++i, type: 'endOfLine', value: ''},
        ],
        regex_tests: [
            { identifier: ++i, subject: 'name@domain.com', must_match: true, pass: true },
            { identifier: ++i, subject: 'first.last@domain.com', must_match: true, pass: true },
            { identifier: ++i, subject: 'name@sub.domain.com', must_match: true, pass: true },
            { identifier: ++i, subject: 'name@.domain.com', must_match: false, pass: false }
        ],
        next_identifier: ++i
    }
};