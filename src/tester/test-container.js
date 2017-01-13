import { connect } from 'react-redux';
import Test from './test';
import {changeTestAction, removeTestAction} from './test-actions';

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRemove: () => {
            dispatch(removeTestAction(ownProps.identifier))
        },
        onChangeSubject: (subject)=> {
            dispatch(changeTestAction(ownProps.identifier, subject, ownProps.must_match))
        },
        onChangeMatch: ()=> {
            dispatch(changeTestAction(ownProps.identifier, ownProps.subject, !ownProps.must_match))
        },
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);

export default Container;