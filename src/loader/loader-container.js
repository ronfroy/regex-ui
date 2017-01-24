import { connect } from 'react-redux'
import Loader from './loader'
import {loadUrlValidationRegexAction, loadEmailValidationRegexAction} from  './loader-actions'

const mapStateToProps = (state) => {
    return {
        options: state.regex.options,
        rules: state.regex.rules
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadUrlValidation: () => {
            dispatch(loadUrlValidationRegexAction())
        },
        onLoadEmailValidation: () => {
            dispatch(loadEmailValidationRegexAction())
        },
    }
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Loader)

export default Container
