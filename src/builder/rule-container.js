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
        onRemove: () => {
            dispatch(removeRuleAction(ownProps.identifier))
        },
        onChangeType: (type)=> {
            dispatch(changeRuleAction(
                ownProps.identifier,
                type,
                '',
                '',
                ''
            ))
        },
        onChangeValue: (value)=> {
            dispatch(changeRuleAction(
                ownProps.identifier,
                ownProps.type,
                value,
                ownProps.repeat_min,
                ownProps.repeat_max
            ))
        },
        onChangeRepeatMin: (repeatMin)=> {
            dispatch(changeRuleAction(
                ownProps.identifier,
                ownProps.type,
                ownProps.value,
                repeatMin,
                ownProps.repeat_max
            ))
        },
        onChangeRepeatMax: (repeatMax)=> {
            dispatch(changeRuleAction(
                ownProps.identifier,
                ownProps.type,
                ownProps.value,
                ownProps.repeat_min,
                repeatMax
            ))
        },
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Rule);

export default Container;
