import { useAuth } from 'hooks';
import { NavLinkButton } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkButton to="/">Home</NavLinkButton>
      {isLoggedIn && <NavLinkButton to="/contacts">Contacts</NavLinkButton>}
    </nav>
  );
};
