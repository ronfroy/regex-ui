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
            { name: 'Start of line', value: 'sol', active: true },
            { name: 'End of line', value: 'eol', active: true },
            { name: 'Global', value: 'g', active: false },
            { name: 'Case insensitive', value: 'i', active: false },
            { name: 'Multi line', value: 'm', active: false }
        ],
        rules: [
            { identifier: ++i, type: 'find', value: '', repeat_min: '', repeat_max: ''},
        ],
        rule_types: [
            { value: 'find', name: 'Find', valuable: true, repeatable: true },
            { value: 'any', name: 'Any Of', valuable: true, repeatable: true },
            { value: 'anything', name: 'Anything', valuable: false, repeatable: true },
            { value: 'anythingBut', name: 'Anything But', valuable: true, repeatable: true },
            { value: 'somethingBut', name: 'Something But', valuable: true, repeatable: true },
           // { value: 'or', name: 'Or', valuable: false, repeatable: false },
            { value: 'word', name: 'Word', valuable: false, repeatable: true },
            { value: 'digit', name: 'Digit', valuable: false,repeatable: true },
            { value: 'lineBreak', name: 'Line Break', valuable: false, repeatable: true },
            { value: 'tab', name: 'Tab', valuable: false, repeatable: true },
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