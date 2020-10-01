import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { IoIosCart } from 'react-icons/io';
import { Container, Cart } from './styles';
import { connect } from 'react-redux';
function Header({ sizeCart }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="StickersBr" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{sizeCart} itens</span>
        </div>
        <IoIosCart size={25} color="00CCFF" />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  sizeCart: state.cart.length,
}))(Header);
