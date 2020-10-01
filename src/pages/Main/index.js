import React, { Component } from 'react';
import * as ActionsCart from '../../store/modules/cart/actions';
import { FiPlusCircle } from 'react-icons/fi';
import { ProductList } from './styles';
import api from '../../services/api';
import { priceFormat } from '../../util/format';
import titleFormat from '../../util/titleFormat';
import { connect } from 'react-redux';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map((product) => ({
      ...product,
      priceFormated: priceFormat(product.price),
      titleFormated: titleFormat(product.title),
    }));
    this.setState({
      products: data,
    });
  }

  handleAddCard = (id) => {
    const { dispatch } = this.props;
    dispatch(ActionsCart.addRequestCart(id));
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <ProductList>
        {products.map((product) => (
          <div>
            <li key={String(product.id)}>
              <img src={product.image} alt="imagem de teste" />
              <strong>{product.titleFormated}</strong>
              <span>{product.priceFormated}</span>
              <button type="button" onClick={() => this.handleAddCard(product.id)}>
                <div>
                  <FiPlusCircle size={15} />
                </div>
                {amount[product.id] || 0}{' - '} Adicionar ao Carrinho
              </button>
            </li>
          </div>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

export default connect(mapStateToProps)(Main);
