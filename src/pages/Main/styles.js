import styled from 'styled-components';
import forma from '../../assets/images/forma.svg';
export const ProductList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  max-width: 1200px;
  div {
    border-radius: 10px;
    border: 1px dashed rgb(250, 250, 250, 0.3);
    padding: 0.2px;
    margin: 15px;
    margin-bottom: 15px;
    max-width:270px;
    &:hover {
      background: #0a2036;
      border: 1px dashed rgb(250, 250, 250, 0.8);
      -moz-box-shadow: 0px 0px 5px 6px #0a2036;
      -webkit-box-shadow: 0px 0px 5px 6px #0a2036;
      box-shadow: 0px 0px 5px 6px #0a2036;
    }
  }
  li {
    border-radius: 5px;
    list-style-type: none;
    margin: 10px;
    background: white;
    padding: 30px 20px;
    background-image: url(${forma});
    background-repeat: no-repeat;
    background-position: top 12px center;

    img {
      display: flex;
      margin: 0 auto;
      padding: 0;
      width: 120px;
      max-height: 120px;
    }
    strong {
      text-transform: uppercase;
      font-size: 11px;
      margin-top: 20px;
      color: #333b42;
      display: block;
    }
    span {
      font-weight: bold;
      margin: 10px 3px;
      display: block;
      font-size: 16px;
    }
    button {
      margin-top: 10px;
      border-radius: 4px;
      padding-right: 5px;
      background: #123456;
      display: flex;
      color: white;
      align-items: center;
      border-color: #123456;

      &:hover {
        background: #0a2036;
      }

      div {
        margin: 0px;
        border-radius: 0px;
        border: none;
        padding: 10px;
        margin-right: 5px;
        background: #194d82;
        color: #eee;

        &:hover {
          background: #194d82;
          border: none;
          -moz-box-shadow: none;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
      }
    }
  }
`;
