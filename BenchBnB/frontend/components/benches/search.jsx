import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';


const Search = ({ benches, }) => (
    <div>
        <div className='search-bench-map-container'>
            <BenchMap benches={benches}/>
        </div>
        <div className= 'search-bench-index-container'>
            <BenchIndex benches={benches} />
        </div>
    </div>
)

export default Search;