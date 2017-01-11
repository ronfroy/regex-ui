import { connect } from 'react-redux';
import Test from './test';
import {changeTestAction} from './test-actions';

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSubject: (subject)=> {
            dispatch(changeTestAction(ownProps.identifier, subject, ownProps.must_match))
        },
        changeMatch: ()=> {
            dispatch(changeTestAction(ownProps.identifier, ownProps.subject, !ownProps.must_match))
        },
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);

export default Container;