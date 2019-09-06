import React from 'react';
import IndexItem from './bench_index_item';

const BenchIndex = ({ benches }) => (
    <div>
        <h2> Benches: </h2>
        {benches.map(bench => (
            <IndexItem
                bench={bench}
                key={bench.id}
            />
        ))}
    </div>
);

export default BenchIndex;