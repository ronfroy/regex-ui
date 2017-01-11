var VerEx = require('verbal-expressions');

const regexBuilder = (config) => {
    var regexVE = VerEx();

    for (var i = 0, len = config.options.length; i < len; i++) {
        var option = config.options[i];

        if(option.active) {
            regexVE.addModifier(option.value);
        } else {
            regexVE.removeModifier(option.value);
        }
    }

    for (var j = 0, len = config.rules.length; j < len; j++) {
        var rule = config.rules[j];

        switch(rule.type) {
            case 'add':
                regexVE.add(rule.value);
                break;
            case 'any':
                regexVE.any(rule.value);
                break;
            case 'anyOf':
                regexVE.anyOf(rule.value);
                break;
            case 'anything':
                regexVE.anything();
                break;
            case 'anythingBut':
                regexVE.anythingBut(rule.value);
                break;
            case 'endOfLine':
                regexVE.endOfLine();
                break;
            case 'find':
                regexVE.find(rule.value);
                break;
            case 'lineBreak':
                regexVE.lineBreak();
                break;
            case 'maybe':
                regexVE.maybe(rule.value);
                break;
            case 'or':
                regexVE.or(rule.value);
                break;
            case 'range':
                if(rule.value.length > 0) {
                    var range = rule.value.split('');
                    if(!(range.length % 2 === 0)) {
                        range = range.concat(range.slice(-1));
                    }
                    regexVE.range.apply(regexVE, range);
                }
                break;
            case 'something':
                regexVE.something();
                break;
            case 'somethingBut':
                regexVE.somethingBut(rule.value);
                break;
            case 'startOfLine':
                regexVE.startOfLine();
                break;
            case 'tab':
                regexVE.tab();
                break;
            case 'then':
                regexVE.then(rule.value);
                break;
            case 'word':
                regexVE.word();
                break;
        }
    }

    return regexVE;
};

export default regexBuilder;