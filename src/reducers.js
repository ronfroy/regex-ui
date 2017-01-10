import regexBuilder from './builder/builder-service';
import initialState from './state';

const reducers = (state = initialState, action) => {

    if('REGEX_LOADER_LOAD' == action.type){
        state.builder.options = action.regex_options
        state.builder.rules = action.regex_rules;
    }

    if('REGEX_BUILDER_RESET_RULES' == action.type){
        state.builder.rules = [];
    }

    if('REGEX_BUILDER_OPTION_CHANGE' == action.type){
        for (var i = 0, len = state.builder.options.length; i < len; i++) {
            if(state.builder.options[i].name === action.option_name) {
                state.builder.options[i].active = action.option_active;
            }
        }
    }

    if('REGEX_BUILDER_REMOVE_RULE' == action.type){
        state.builder.rules = state.builder.rules.filter(function(rule) {
            return rule.position !== action.rule_position;
        });
    }

    if('REGEX_BUILDER_ADD_RULE' == action.type){
        var rules = [];
        var newPosition = 0;

        for (var j = 0, len = state.builder.rules.length; j < len; j++) {
            state.builder.rules[j].position = ++newPosition;
            rules.push(state.builder.rules[j]);

        }

        // TODO : use real unique id instead of position

        rules.push({ position: ++newPosition, type: 'any', value: '' });
        state.builder.rules =  rules;
    }

    if('REGEX_BUILDER_CHANGE_RULE' == action.type)
    {
        state.builder.rules = state.builder.rules.map(function(rule) {
            if(rule.position === action.rule_position) {
                rule.type = action.rule_type;
                rule.value = action.rule_value;
            }

            return rule;
        });
    }

    state.regex = regexBuilder(state.builder);

    return Object.assign({}, state);
};

export default reducers;