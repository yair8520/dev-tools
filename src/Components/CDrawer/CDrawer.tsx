import React, { useContext, useEffect, useState } from 'react';
import { IconButton, Drawer, Avatar } from '@mui/material';
import { Menu } from '@material-ui/icons';
import './CDrawer.css';
import { Text } from '../Text';
import { useMediaQuery } from '../../Hooks/useMediaQuery';
import { AppContext } from '../ThemeContext/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { CIconButton } from '../CIconButton';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { pages } from '../../Constant/Pages';
import { UserContext } from '../../Context/UserContext';
import { DrawerContext } from '../../Context/DrawerContext';
import { googleLogOut, handleGoogleLogin } from '../../Helpers/FireBase/auth';
import GoogleIcon from '@mui/icons-material/Google';
export const CDrawer = () => {
  const { isDark, setIsDark } = useContext(AppContext);
  const isSmallScreen = useMediaQuery('(max-width: 500px)');
  const { user }: any = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState(user);

  useEffect(() => {
    setLoginInfo(user);
  }, [user]);

  function onLogin() {
    handleGoogleLogin()
      .then((user) => {
        setLoginInfo(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function onLogOut() {
    googleLogOut()
      .then(() => {
        setLoginInfo(null);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <WithDrawer>
        <div className="nav">
          <ul>
            {pages.map((Item, i) => (
              <CustomLink key={Item.href} to={Item.href}>
                <div className="item">
                  {Item.Icon && <Item.Icon />}
                  <Text
                    style={{
                      marginTop:-10,
                      color: !isDark && isSmallScreen ? 'black' : 'white',
                    }}
                    variant="subtitle1"
                  >
                    {Item.title}
                  </Text>
                </div>
              </CustomLink>
            ))}
            <CIconButton
              title={!isDark ? 'Dark' : 'Light'}
              onClick={() => {
                setIsDark(!isDark);
              }}
            >
              {!isDark ? <DarkModeIcon /> : <LightModeIcon />}
            </CIconButton>
            {!loginInfo?.photoURL ? (
              <CIconButton onClick={() => onLogin()}>
                <GoogleIcon sx={{ width: 25, height: 25 }} />
                <Text className={'loginText'}>Login</Text>
              </CIconButton>
            ) : (
              <CIconButton title={loginInfo.email} onClick={() => onLogOut()}>
                <Avatar
                  sx={{ width: 25, height: 25 }}
                  src={loginInfo?.photoURL}
                />
                <Text className={'logoutText'}>LogOut</Text>
              </CIconButton>
            )}
          </ul>
        </div>
      </WithDrawer>
    </>
  );
};
export const WithDrawer = ({ children }: any) => {
  const isSmallScreen = useMediaQuery('(max-width: 500px)');
  const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext);
  if (isSmallScreen) {
    return (
      <>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu />
        </IconButton>
        <Drawer
          // BackdropProps={{style:{backgroundColor:"transparent"}}}
          elevation={0}
          anchor="right"
          PaperProps={{
            sx: {
              width: '40%',
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'center',

              paddingTop: '50px',
            },
          }}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          {children}
        </Drawer>
      </>
    );
  } else {
    return children;
  }
};
export function CustomLink({ to, name, inDrawer, children, ...props }: any) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext);

  return (
    <li
      onClick={() => isDrawerOpen && setIsDrawerOpen(false)}
      className={isActive ? 'active' : ''}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
