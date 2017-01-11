import { connect } from 'react-redux';
import Tester from './tester';
import {addTestAction, resetAction} from './tester-actions';

const mapStateToProps = (state) => {
    return {
        tests: state.tester.tests,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddTest: ()=> {
            dispatch(addTestAction())
        },
        onReset: ()=> {
            dispatch(resetAction())
        },
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tester);

export default Container;