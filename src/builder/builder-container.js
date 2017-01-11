import { connect } from 'react-redux';
import Builder from './builder';
import {addRuleAction, resetAction} from './builder-actions';

const mapStateToProps = (state) => {
    return {
        options: state.builder.options,
        rules: state.builder.rules
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAdd: () => {
            dispatch(addRuleAction())
        },
        onReset: () => {
            dispatch(resetAction())
        },
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Builder);

export default Container;
