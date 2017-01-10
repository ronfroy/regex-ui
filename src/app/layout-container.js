import { connect } from 'react-redux';
import Layout from './layout';

const mapStateToProps = (state) => {
    return {
        regex: state.regex,
        navigation: state.navigation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);

export default Container;
