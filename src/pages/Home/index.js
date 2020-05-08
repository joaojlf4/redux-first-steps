import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import { ProductList } from './styles';
import api from '../../services/api';

class Home extends Component {
  state = {
    products: [],
  };
  
  async componentDidMount() {
    console.tron.log('hellow')
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }))

    this.setState({ products: data })
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  }

  render(){

    const { products } = this.state;
    console.tron.log(products);
    // Cuidar de funções sendo executadas no método render
    return (
      <ProductList>
        {
          products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt="Tênis"/>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>

              <button type="button" onClick={() => this.handleAddProduct(product)}>
                <div>
                  <MdAddShoppingCart size={16} color="#FFF"/>
                  {this.props.cartSize}
                </div>
                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          ))
        }
    </ProductList>
    );
  }
}

export default connect(state => ({
  cartSize: state.cart.length
}))(Home);