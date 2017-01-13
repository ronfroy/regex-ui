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
            { identifier: ++i, type: 'find', value: 'http', repeat: false, repeat_min: '', repeat_max: ''},
            { identifier: ++i, type: 'maybe', value: 's', repeat: false, repeat_min: '', repeat_max: ''},
            { identifier: ++i, type: 'find', value: '://', repeat: false, repeat_min: '', repeat_max: ''},
            { identifier: ++i, type: 'maybe', value: 'www.', repeat: false, repeat_min: '', repeat_max: ''},
            { identifier: ++i, type: 'range', value: '09az', repeat: true, repeat_min: '1', repeat_max: '99'},
            { identifier: ++i, type: 'find', value: '.', repeat: false, repeat_min: '', repeat_max: ''},
            { identifier: ++i, type: 'range', value: '09az', repeat: true, repeat_min: '2', repeat_max: '6'},
        ],
        regex_tests: [
            { identifier: ++i, subject: 'http://www.domain.com', must_match: true },
            { identifier: ++i, subject: 'https://www.domain.com', must_match: true },
            { identifier: ++i, subject: 'http://sub.domain.com', must_match: true },
            { identifier: ++i, subject: 'http://domain', must_match: false },
            { identifier: ++i, subject: 'http://.domain.com', must_match: false}
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
            { identifier: ++i, type: 'range', value: '09az', repeat: true, repeat_min: '2', repeat_max: '80'},
            { identifier: ++i, type: 'any', value: '@', repeat: false, repeat_min: '', repeat_max: ''},
            { identifier: ++i, type: 'range', value: '09az', repeat: true, repeat_min: '', repeat_max: ''},
            { identifier: ++i, type: 'any', value: '.', repeat: false, repeat_min: '', repeat_max: ''},
            { identifier: ++i, type: 'range', value: 'az', repeat: true, repeat_min: '2', repeat_max: '4'},
        ],
        regex_tests: [
            { identifier: ++i, subject: 'name@domain.com', must_match: true },
            { identifier: ++i, subject: 'first.last@domain.com', must_match: true },
            { identifier: ++i, subject: 'name@sub.domain.com', must_match: true },
            { identifier: ++i, subject: 'name@sub.sub.domain.com', must_match: true },
            { identifier: ++i, subject: 'name@domain', must_match: false},
            { identifier: ++i, subject: 'name@.domain.com', must_match: false },
            { identifier: ++i, subject: 'name@.domain.com', must_match: false },
            { identifier: ++i, subject: 'name@Domain.com', must_match: true },
            { identifier: ++i, subject: 'name@Domain.com', must_match: true },
            { identifier: ++i, subject: 'name@domain.Com', must_match: true },
        ],
        next_identifier: ++i
    }
};