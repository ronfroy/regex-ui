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
            { identifier: ++i, type: 'then', value: 'http'},
            { identifier: ++i, type: 'maybe', value: 's'},
            { identifier: ++i, type: 'then', value: '://'},
            { identifier: ++i, type: 'maybe', value: 'www.'},
            { identifier: ++i, type: 'anythingBut', value: ' '},
            { identifier: ++i, type: 'endOfLine', value: ''},
        ],
        next_identifier: ++i,
        regex_tests: [
            { subject: 'http://www.google.fr', match: true },
            { subject: 'https://www.google.fr', match: true },
            { subject: 'ftp://localhost', match: true }
        ]
    }
};