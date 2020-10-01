import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  img {
    margin-left:40px;
  }
`;
export const Cart = styled(Link)`
  margin-top: -15px;
  margin-right:40px;
  display: flex;
  align-items:center;
  text-decoration:none;

  div {
    color: #00CCFF;
    text-align: right;
    margin-right: 10px;
  }
  strong {
    display: block;
  }
  span {
    font-size:11px;
    color: white;
  }
  &:hover {
    strong, span {
    color: white;

    }
  }


`;
