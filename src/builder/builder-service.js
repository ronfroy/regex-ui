import _ from 'lodash';
var VerEx = require('verbal-expressions');

const optionBuilder = (regexVE, options) => {

    _.each(options, (option) => {
        if(!option.active) {
            // remove default modifiers
            regexVE.removeModifier(option.value);
            return;
        }

        if('sol' === option.value) {
            regexVE.startOfLine();
            return;
        }

        if('eol' === option.value) {
            regexVE.endOfLine();
            return;
        }

        regexVE.addModifier(option.value);
    });

    return regexVE;
};

const repeatBuilder = (regexVE, rule) => {
    const minString = _.replace(rule.repeat_min, /\D/, '');
    const maxString = _.replace(rule.repeat_max, /\D/, '');
    const min = Number(minString);
    const max = Number(maxString);

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

    // min limit
    if('' === minString && '' !== maxString) {
        if(1 === max) {
            return regexVE.add('?');
        }

        return regexVE.add( '{0,' + max + '}');
    }

    // max limit
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

    _.each(config.rules, (rule) => {

        if('0' === rule.repeat_min && '0' === rule.repeat_max) {
            // ignore rule if repeat 0-0
            return;
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
    });

    return regexVE;
};

export default regexBuilder;