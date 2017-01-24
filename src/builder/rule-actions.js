export const REGEX_BUILDER_REMOVE_RULE = 'REGEX_BUILDER_REMOVE_RULE'
export const REGEX_BUILDER_CHANGE_RULE = 'REGEX_BUILDER_CHANGE_RULE'

export const removeRuleAction = (identifier) => {
    return {
        type: REGEX_BUILDER_REMOVE_RULE,
        rule_identifier: identifier
    }
}

export const changeRuleAction = (identifier, type, value, min, max) => {
    return {
        type: REGEX_BUILDER_CHANGE_RULE,
        rule_identifier: identifier,
        rule_type: type,
        rule_value: value,
        rule_repeat_min: min,
        rule_repeat_max: max
    }
}