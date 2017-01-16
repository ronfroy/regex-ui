var i = 0;
const State = {
    regex: '',
    navigation: [
        { name: 'Builder', route: 'builder' },
        { name: 'Tester', route: 'tester' },
        { name: 'Loader', route: 'loader' },
    ],
    builder: {
        options: [
            { name: 'Global', value: 'g', active: true },
            { name: 'Case insensitive', value: 'i', active: true },
            { name: 'Multi line', value: 'm', active: false }
        ],
        rules: [
            { identifier: ++i, type: 'find', value: '', repeat: false, repeat_min: '', repeat_max: ''},
        ],
        rule_types: [
            { value: 'any', name: 'Any', valuable: true, repeatable: true  },
            { value: 'anyOf', name: 'Any Of', valuable: true, repeatable: false },
            { value: 'anything', name: 'Anything', valuable: false, repeatable: true },
            { value: 'anythingBut', name: 'Anything But', valuable: true, repeatable: false },
            { value: 'endOfLine', name: 'End of Line', valuable: false, repeatable: false },
            { value: 'digit', name: 'Digit', valuable: false,repeatable: true },
            { value: 'find', name: 'Find', valuable: true, repeatable: true },
            { value: 'lineBreak', name: 'Line Break', valuable: false, repeatable: false },
            { value: 'maybe', name: 'Maybe', valuable: true, repeatable: false },
            { value: 'or', name: 'Or', valuable: true, repeatable: false },
            { value: 'range', name: 'Range', valuable: true, repeatable: true },
            { value: 'something', name: 'Something', valuable: false, repeatable: false },
            { value: 'somethingBut', name: 'Something But', valuable: true, repeatable: false },
            { value: 'startOfLine', name: 'Start of Line', valuable: false,repeatable: false },
            { value: 'tab', name: 'Tab', valuable: false, repeatable: false },
            { value: 'then', name: 'Then', valuable: true,repeatable: true },
            { value: 'word', name: 'Word', valuable: false,repeatable: true }
        ],
        next_identifier: ++i,
    },
    tester: {
        tests: [
            { identifier: ++i, subject: '', must_match: true, pass: true },
        ]
    }
};

export default State;