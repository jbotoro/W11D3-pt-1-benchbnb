import React from 'react';

class IndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const benchId = this.props.bench.id;
        this.props.history.push(`/benches/${benchId}`);
    }

    render () {
        return (
            <div 
            className='bench-index-item-container'
            onClick={this.handleClick}>

            </div>
        )
    }
}

export default IndexItem;