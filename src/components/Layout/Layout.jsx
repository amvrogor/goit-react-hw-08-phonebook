import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from '../GlobalStyle';
import { AppBar } from '../AppBar/AppBar';
import { Container, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          <GlobalStyle />
          <Toaster position="top-right" reverseOrder={false} />
        </Container>
      </Main>
    </>
  );
};
