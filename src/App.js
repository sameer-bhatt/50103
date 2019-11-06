import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './product-list/product-list';
import Cart from './cart/cart-list';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {index: 1, productname: 'Mobile', price:'15000'},
        {index: 2, productname: 'Tv', price:'30000'},
        {index: 3, productname: 'AC', price:'40000'},
        {index: 4, productname: 'Pendrive', price:'200'},
        {index: 5, productname: 'Laptop', price:'50000'},
        {index: 6, productname: 'External Hard disk', price:'6000'},
        {index: 7, productname: 'Men clothes', price:'5100'},
        {index: 8, productname: 'women clothes', price:'8000'},
        {index: 9, productname: 'books', price:'150'},
        {index: 10, productname: 'Home theatre', price:'10000'},
      ],
      cartList: []
    }
  }

  addItem = (index) => {
    const cartList = [...this.state.cartList];
    const productList = {...this.state.productList[index]};
    if(cartList.length == 0) {
        cartList.push({
          index: this.state.cartList.length+1,
          productname: productList.productname
        })
      } else {
        cartList.unshift({
          index: this.state.cartList.length+1,
          productname: productList.productname
        });
      }
      this.setState((prevState)=> {
        return {
          cartList: cartList
        } 
      });
      //console.log(this.state.cartList);
  }

  removeItem = (index) => {
    console.log(index);
    const cartList = [...this.state.cartList];
    cartList.splice(index,1);
    this.setState({cartList});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <ProductList products={this.state.productList} addItem={this.addItem} />
          <Cart products={this.state.cartList} removeItem={this.removeItem} />
        </div>
      </div>
    )
  }
}

export default App;
