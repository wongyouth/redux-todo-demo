import {connect} from 'react-redux';
import Link from '../components/Link';
import {setVisibility} from '../actions';

let mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibleFilter === ownProps.filter
  };
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibility(ownProps.filter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
