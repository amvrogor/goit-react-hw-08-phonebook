import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-weight: 700;
  color: #2a363b;
`;

export const Button = styled.button`
  padding: 2px 10px;
  border-radius: 2px;
  background-color: #e7ecf2;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #2a363b;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  line-height: 24px;
  font-style: normal;
  font-weight: 700;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: #dddddd;
  }
`;
