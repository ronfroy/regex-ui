var VerEx = require('verbal-expressions');

const optionBuilder = (regexVE, options) => {
    for (var i = 0, len = options.length; i < len; i++) {
        var option = options[i];

        if(option.active) {

            if('sol' === option.value) {
                regexVE.startOfLine();
                continue;
            }

            if('eol' === option.value) {
                regexVE.endOfLine();
                continue;
            }

            regexVE.addModifier(option.value);
        } else {
            regexVE.removeModifier(option.value); // must remove default modifier
        }
    }

    return regexVE;
};

const repeatBuilder = (regexVE, rule) => {
    var minString = rule.repeat_min.replace(/\D/,'');
    var maxString = rule.repeat_max.replace(/\D/,'');
    var min = Number(minString);
    var max = Number(maxString);

    // limit max and min
    if('' !== minString && '' !== maxString) {
        if(0 === min && 1 === max) {
            return regexVE.add('?');
        }

        if(1 === min && max === min) {
            return regexVE;
        }

        if(max > min) {
            return regexVE.add( '{' + min + ',' + max + '}');
        }

        return regexVE.add( '{' + max + '}');
    }

    // no limit
    if('' === minString && '' === maxString) {
        return regexVE.add('*');
    }

    // max limit
    if('' === minString && '' !== maxString) {
        if(1 === max) {
            return regexVE.add('?');
        }

        return regexVE.add( '{0,' + max + '}');
    }

    // min limit
    if('' === maxString && '' !== minString) {
        switch(min) {
            case 0:
                return regexVE.add('*');
            case 1:
                return regexVE.add('+');
            default:
                return regexVE.add('{' + min + ',}');
        }
    }
};

const regexBuilder = (config) => {
    var regexVE = VerEx();

    regexVE = optionBuilder(regexVE, config.options);

    for (var i = 0, len = config.rules.length; i < len; i++) {
        var rule = config.rules[i];

        if('0' === rule.repeat_min && '0' === rule.repeat_max) {
            // ignore rule if repeat 0-0
            continue;
        }

        switch(rule.type) {
            case 'any':
                regexVE.add('[' + regexVE.sanitize(rule.value) + ']');
                break;
            case 'anything':
                regexVE.add('.');
                break;
            case 'anythingBut':
                regexVE.add('([^' + regexVE.sanitize(rule.value) + ']*)');
                break;
            case 'somethingBut':
                regexVE.add('([^' + regexVE.sanitize(rule.value) + ']+)');
                break;
            case 'find':
                regexVE.add('(' + regexVE.sanitize(rule.value) + ')');
                break;
            case 'carriageReturn':
                regexVE.add('\\r');
                break;
            case 'lineBreak':
                regexVE.add('\\n');
                break;
            case 'tab':
                regexVE.add('\\t');
                break;
            case 'word':
                regexVE.add('\\w');
                break;
            case 'digit':
                regexVE.add('\\d');
                break;
        }

        regexVE = repeatBuilder(regexVE, rule);
    }

    return regexVE;
};

export default regexBuilder;