import { connect } from 'react-redux';
import Builder from './builder';
import {addRuleAction, resetRulesAction} from './builder-actions';

const mapStateToProps = (state) => {
    return {
        options: state.builder.options,
        rules: state.builder.rules
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addRule: () => {
            dispatch(addRuleAction())
        },
        resetRules: () => {
            dispatch(resetRulesAction())
        },
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Builder);

export default Container;
