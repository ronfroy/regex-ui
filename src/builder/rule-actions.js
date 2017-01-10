export const removeRuleAction = (position) => {
    return {
        type: 'REGEX_BUILDER_REMOVE_RULE',
        rule_position: position
    }
};

export const changeRuleAction = (position, type, value) => {
    return {
        type: 'REGEX_BUILDER_CHANGE_RULE',
        rule_position: position,
        rule_type: type,
        rule_value: value
    }
};