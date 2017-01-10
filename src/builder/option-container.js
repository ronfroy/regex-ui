import { connect } from 'react-redux';
import Option from './option';
import {changeOptionAction} from './option-actions';

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeOption: (checked) => {
            dispatch(changeOptionAction(ownProps.name, checked))
        }
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Option);

export default Container;
