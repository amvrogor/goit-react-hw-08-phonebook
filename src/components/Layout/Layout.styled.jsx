import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  /* min-width: 400px; */
  height: 100vh;
  margin: 0 auto;
  padding: 16px;
  background-color: #e7ecf2;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
`;

export const Main = styled.main`
  /* min-width: 400px; */
  /* height: 100vh; */
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 10px;
`;
