import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from '../GlobalStyle';
import { AppBar } from '../AppBar/AppBar';
import { Container, Title } from './Layout.styled';

export const Layout = ({ title, children }) => {
  return (
    <Container>
      <AppBar />
      <Title>{title}</Title>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
