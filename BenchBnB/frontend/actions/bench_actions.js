import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';


export const receiveBenches = bench => ({
    type: RECEIVE_BENCHES,
    bench,
});
export const fetchBenches = filters => dispatch => (
    APIUtil.fetchBenches(filters)
        .then(benches => dispatch(receiveBenches(benches)))
);



