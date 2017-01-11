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
        onRemoveRule: () => {
            dispatch(removeRuleAction(ownProps.identifier))
        },
        onChangeType: (type)=> {
            dispatch(changeRuleAction(ownProps.identifier, type, ownProps.value))
        },
        onChangeValue: (value)=> {
            dispatch(changeRuleAction(ownProps.identifier, ownProps.type, value))
        },
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Rule);

export default Container;
