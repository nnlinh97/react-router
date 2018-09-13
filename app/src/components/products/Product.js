import React, { Component } from 'react';

class Product extends Component {

    render() {
        let {match} = this.props;
        let {slug} = match.params;
        return (
            <div>
                {slug}
            </div>
        );
    }
}

export default Product;