import BenchIndex from './bench_index';
import { fetchBenches } from '../../actions/bench_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ benches }) => {
    return {
        benches: benches
    }
};

const mapDispatchToProps = dispatch => ({
    fetchBenches: dispatch(fetchBenches())
});

export default connect(mapStateToProps,mapDispatchToProps)(BenchIndex);