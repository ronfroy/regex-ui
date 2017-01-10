import { connect } from 'react-redux';
import Rule from './rule';
import {removeRuleAction, changeRuleAction} from './rule-actions';

const mapStateToProps = (state) => {
    return {
        types: state.builder.rule_types
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeRule: () => {
            dispatch(removeRuleAction(ownProps.position))
        },
        changeType: (type)=> {
            dispatch(changeRuleAction(ownProps.position, type, ownProps.value))
        },
        changeValue: (value)=> {
            dispatch(changeRuleAction(ownProps.position, ownProps.type, value))
        },
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Rule);

export default Container;
