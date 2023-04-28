import React, { useContext, useState } from 'react';
import { IconButton, Drawer } from '@mui/material';
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
export const CDrawer = () => {
  const { isDark, setIsDark } = useContext(AppContext);
  const isSmallScreen = useMediaQuery('(max-width: 500px)');

  return (
    <>
      <WithDrawer>
        <div className="nav">
          <ul>
            {pages.map((item, i) => (
              <CustomLink key={item.href} to={item.href}>
                <Text
                  style={{
                    color: !isDark && isSmallScreen ? 'black' : 'white',
                  }}
                  variant="subtitle1"
                >
                  {item.title}
                </Text>
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
          </ul>
        </div>
      </WithDrawer>
    </>
  );
};
export const WithDrawer = ({ children }: any) => {
  const isSmallScreen = useMediaQuery('(max-width: 500px)');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
          anchor="right"
          PaperProps={{
            sx: {
              width: '40%',
              display: 'flex',
              alignItems: 'center',
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
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
