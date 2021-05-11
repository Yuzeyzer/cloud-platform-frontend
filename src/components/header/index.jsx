import React from 'react';
import { HeaderWrapper, HeaderButton, HeaderContainer, LogoText, Logo } from './style';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../actions/userAction';
import Input from '../input';
import { searchFiles } from '../../actions/file';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);

  const logout = () => {
    if (window.confirm('Вы уверены что хотите выйти?')) {
      dispatch(userLogout());
    }
  };

  const [searchName, setSearchName] = React.useState('')

  const handleSearch = (event) => {
    setSearchName(event.target.value)
    dispatch(searchFiles(event.target.value))
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>
          <svg
            width='63'
            height='34'
            viewBox='0 0 63 34'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <ellipse cx='31.5' cy='17' rx='31.5' ry='17' fill='#566885' />
          </svg>
          <LogoText>MERN CLOUD</LogoText>
        </Logo>
        <div>
          {isAuth && (
           <input value={searchName} onChange={(e) => handleSearch(e)} name="search" type="text" placeholder="Введите текст для поиска"/>
          )}
          {!isAuth && (
            <>
              <HeaderButton>
                <Link to='/login'>Войти</Link>
              </HeaderButton>
              <HeaderButton>
                <Link to='/register'>Регистрация</Link>
              </HeaderButton>
            </>
          )}
          {isAuth && (
            <HeaderButton onClick={logout}>
              <Link to='/'>Выход</Link>
            </HeaderButton>
          )}
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
