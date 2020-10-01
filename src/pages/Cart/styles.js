import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 7px;
  margin: 0 auto;
  max-width: 1200px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 10px;
      border-radius: 4px;
      background: #123456;
      display: flex;
      color: white;
      border-color: #123456;

      &:hover {
        background: #0a2036;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead
  {
    th {
      color: #999;
      text-align: left;
    }
  }

  tbody td {
    padding: 9px;
    border-bottom:1px solid #ddd;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  button {
    border: none;
    background: none;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
      text-align: center;
    }

    button {
      background: none;
      border: 0;
      padding: 6px;
    }
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
