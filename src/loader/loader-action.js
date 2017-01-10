export const loadEmailValidationRegexAction = () => {
    var i = 0;
    return {
        type: 'REGEX_LOADER_LOAD',
        regex_options: [
            { name: 'Global', value: 'g', active: true },
            { name: 'Case insensitive', value: 'i', active: true },
            { name: 'Multi line', value: 'm', active: false }
        ],
        regex_rules: [
            { identifier: ++i, type: 'startOfLine', value: ''},
            { identifier: ++i, type: 'then', value: 'http'},
            { identifier: ++i, type: 'maybe', value: 's'},
            { identifier: ++i, type: 'then', value: '://'},
            { identifier: ++i, type: 'maybe', value: 'www.'},
            { identifier: ++i, type: 'anythingBut', value: ' '},
            { identifier: ++i, type: 'endOfLine', value: ''},
        ],
        next_identifier: ++i,
    }
};