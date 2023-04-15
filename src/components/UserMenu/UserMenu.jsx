import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { useAuth } from 'hooks';
import { Wrapper, Username, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Wrapper>
  );
};
