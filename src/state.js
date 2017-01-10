var i = 0;
const State = {
    regex: '',
    navigation: [
        { name: 'Builder', route: 'builder' },
        { name: 'Loader', route: 'loader' },
    ],
    builder: {
        options: [
            { name: 'Global', value: 'g', active: true },
            { name: 'Case insensitive', value: 'i', active: true },
            { name: 'Multi line', value: 'm', active: false }
        ],
        rules: [
            { position: ++i, type: 'startOfLine', value: ''},
            { position: ++i, type: 'then', value: ''},
        ],
        rule_types: [
            { value: 'add', name: 'Add', valuable: true },
            { value: 'any', name: 'Any', valuable: true },
            { value: 'anyOf', name: 'Any Of', valuable: true },
            { value: 'anything', name: 'Anything', valuable: false },
            { value: 'anythingBut', name: 'Anything But', valuable: true },
            { value: 'endOfLine', name: 'End of Line', valuable: false },
            { value: 'find', name: 'Find', valuable: true },
            { value: 'lineBreak', name: 'Line Break', valuable: false },
            { value: 'maybe', name: 'Maybe', valuable: true },
            { value: 'or', name: 'Or', valuable: true },
            { value: 'range', name: 'Range', valuable: true },
            { value: 'something', name: 'Something', valuable: false },
            { value: 'somethingBut', name: 'Something But', valuable: true },
            { value: 'startOfLine', name: 'Start of Line', valuable: false },
            { value: 'tab', name: 'Tab', valuable: false },
            { value: 'then', name: 'Then', valuable: true },
            { value: 'word', name: 'Word', valuable: false },
        ],
    }
};

export default State;