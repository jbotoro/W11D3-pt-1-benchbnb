import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';

const benchesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches;
        default:
            return state;
    }
};


export default benchesReducer;