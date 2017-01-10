export const changeOptionAction = (name, active) => {
    return {
        type: 'REGEX_BUILDER_OPTION_CHANGE',
        option_name: name,
        option_active: active
    }
};