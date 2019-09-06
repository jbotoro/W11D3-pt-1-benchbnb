import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
    benches: asArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter,value) => (updateFilter(filter,value))
});

export default connect(mapStateToProps,mapDispatchToProps)(Search);