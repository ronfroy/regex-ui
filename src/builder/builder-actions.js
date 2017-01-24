export const REGEX_BUILDER_ADD_RULE = 'REGEX_BUILDER_ADD_RULE';
export const REGEX_BUILDER_RESET = 'REGEX_BUILDER_RESET';
export const REGEX_BUILDER_OPTION_CHANGE = 'REGEX_BUILDER_OPTION_CHANGE';

export const addRuleAction = () => {
    return {
        type: REGEX_BUILDER_ADD_RULE
    }
};

export const resetAction = () => {
    return {
        type: REGEX_BUILDER_RESET
    }
};

export const changeOptionAction = (name) => {
    return {
        type: REGEX_BUILDER_OPTION_CHANGE,
        option_name: name
    }
};