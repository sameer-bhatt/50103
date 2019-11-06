import React from 'react';
import ProductItem from './product-item/product-item';

class ProductList extends React.Component {
    render() {
        let product = this.props.products.map((product, index) => {
            return (
                <ProductItem key={index} index={index} product={product} addItem={this.props.addItem} />
            )
        })
        return (
            <div className="d-block">
                <h2>Product</h2>
                <table colSpan="0">
                    <tbody>
                        {product}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductList;