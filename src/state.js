import _ from 'lodash'

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
            { name: 'Multi line', value: 'm', active: false },
            { name: 'Unicode', value: 'u', active: false }
        ],
        rules: [
            { identifier: _.uniqueId(), type: 'find', value: '', repeat_min: '', repeat_max: ''},
        ],
        rule_types: [
            { value: 'any', name: 'Any of', valuable: true, repeatable: true },
            { value: 'anything', name: 'Anything', valuable: false, repeatable: true },
            { value: 'anythingBut', name: 'Anything but', valuable: true, repeatable: true },
            { value: 'somethingBut', name: 'Something but', valuable: true, repeatable: true },
            { value: 'find', name: 'Find', valuable: true, repeatable: true },
            { value: 'word', name: 'Find - Word', valuable: false, repeatable: true },
            { value: 'digit', name: 'Find - Digit', valuable: false,repeatable: true },
            { value: 'lineBreak', name: 'Find - Line break', valuable: false, repeatable: true },
            { value: 'carriageReturn', name: 'Find - Carriage return', valuable: false, repeatable: true },
            { value: 'tab', name: 'Find - Tab', valuable: false, repeatable: true },
        ],
    },
    tester: {
        tests: [
            { identifier: _.uniqueId(), subject: '', must_match: true, pass: true },
        ]
    },
}

export default State