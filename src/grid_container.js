import {connect} from 'react-redux';
import {Grid} from './grid';
import {drop} from './play';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        dropTile: col => dispatch(drop(col))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid)