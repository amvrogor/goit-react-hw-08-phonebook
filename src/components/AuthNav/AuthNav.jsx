import { NavLinkButton } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkButton to="/register">Register</NavLinkButton>
      <NavLinkButton to="/login">Log In</NavLinkButton>
    </div>
  );
};
