import { connect } from 'react-redux';
import Loader from './loader';
import {loadUrlValidationRegexAction} from  './loader-action'

const mapStateToProps = (state) => {
    return {
        options: state.regex.options,
        rules: state.regex.rules
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadUrlValidation: () => {
            dispatch(loadUrlValidationRegexAction());
        },
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Loader);

export default Container;
