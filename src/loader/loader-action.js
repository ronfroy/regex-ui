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
            { position: ++i, type: 'startOfLine', value: ''},
            { position: ++i, type: 'then', value: 'http'},
            { position: ++i, type: 'maybe', value: 's'},
            { position: ++i, type: 'then', value: '://'},
            { position: ++i, type: 'maybe', value: 'www.'},
            { position: ++i, type: 'anythingBut', value: ' '},
            { position: ++i, type: 'endOfLine', value: ''},
        ]
    }
};