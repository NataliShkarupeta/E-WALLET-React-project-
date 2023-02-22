import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { Link } from 'react-router-dom';
import { selectUser } from 'redux/auth/authSelectors';
import { Logo } from 'components/Logo/Logo';
import Icons from 'images/icons.svg';
import { HeaderWrap, Container, LogoutWrapper, User, Button, Icon } from './Header.styled';
import { openModalLogOut } from 'redux/global/globalSlice';



export const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);
  const isTablet = useMedia('(min-width: 768px)');

  return (
    <HeaderWrap>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <LogoutWrapper>
          <User>{userName}</User>
          <Button
            href="#"
            onClick={()=> dispatch(openModalLogOut())}
          >
            <Icon>
              <use href={`${Icons}#icon-exit`} />
            </Icon>
            {isTablet && <span>exit</span>}
          </Button>
        </LogoutWrapper>
      </Container>
    </HeaderWrap>
  );
  
}