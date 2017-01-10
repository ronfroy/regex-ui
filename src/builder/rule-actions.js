export const removeRuleAction = (identifier) => {
    return {
        type: 'REGEX_BUILDER_REMOVE_RULE',
        rule_identifier: identifier
    }
};

export const changeRuleAction = (identifier, type, value) => {
    return {
        type: 'REGEX_BUILDER_CHANGE_RULE',
        rule_identifier: identifier,
        rule_type: type,
        rule_value: value
    }
};