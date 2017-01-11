import { connect } from 'react-redux';
import Tester from './tester';

const mapStateToProps = (state) => {
    return {
        tests: state.tester.tests,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tester);

export default Container;