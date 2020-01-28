import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  background-color: #ef7460;
  padding: 30px 40px;
  color: white;
  text-align: center;

  > div {
    display: flex;
    align-items: center;

    > input {
      outline: none;
      margin: 0;
      border: none;
      border-radius: 0;
      width: 75%;
      padding: 10px;
      font-size: 16px;
      border-radius: 3px;
    }

    > a {
      text-decoration: none;
      border: 0;
      padding: 10px;
      width: 23%;
      background: #d9d9d9;
      color: #555;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 0;
      margin-left: 2%;
      border-radius: 3px;
    }

    > a:hover {
      background-color: #bbb;
    }
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  > li {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;
    list-style: none;
    user-select: none;
  }

  > li:nth-child(odd) {
    background: #f9f9f9;
  }

  > li:hover {
    background: #ddd;
  }
`;

type Props = {
  checked?: boolean;
};

export const Item = styled.li<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props =>
    props.checked &&
    css`
      span {
        text-decoration: line-through;
      }
    `}

  .close {
    border: 0;
    margin: 0;
    padding: 15px;
    border-radius: 3px;
  }

  .close:hover {
    background-color: #f44336;
    color: white;
  }
`;

export const Check = styled.img`
  height: 15px;
  margin-right: 20px;
`;
