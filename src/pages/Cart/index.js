import React from 'react';
import { connect } from 'react-redux';
import { Container, ProductTable, Total } from './styles';
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io';
import { FaRegTrashAlt } from 'react-icons/fa';
import * as ActionCart from '../../store/modules/cart/actions';
import { priceFormat } from '../../util/format';
function Cart({ cart, total, dispatch }) {

  function addAmount(product) {
    dispatch(ActionCart.updateAmountRequest(product.id, product.amount + 1));
  }

  function removeAmout(product) {
    dispatch(ActionCart.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th>Ações</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormat}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => removeAmout(product)}>
                    <IoMdRemoveCircleOutline size={20} color="#123456" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => addAmount(product)}>
                    <IoMdAddCircleOutline size={20} color="#123456" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button>
                  <FaRegTrashAlt
                    size={22}
                    color="#0a2036"
                    onClick={() =>
                      dispatch(ActionCart.removeFromCart(product.id))
                    }
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button"> Finalizar Pedido</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: priceFormat(product.amount * product.price),
  })),
  total: priceFormat(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});
export default connect(mapStateToProps)(Cart);
