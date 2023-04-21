import React, { useContext } from 'react';
import './Header.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import {
  AppBar,
  Box,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Text } from '../Text';
import { AppContext } from '../ThemeContext/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const Header = () => {
  const { isDark, setIsDark } = useContext(AppContext);
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dev-Tools
          </Typography>
          <div className="nav">
            <ul>
              <CustomLink to="/json-formatter">JSON</CustomLink>
              <CustomLink to="/diff-checker">Diff</CustomLink>
              <CustomLink to="/flex-play">Flex</CustomLink>
              <FormControlLabel
                control={
                  <Switch
                    classes={{
                      root: classes.switchRoot,
                      switchBase: classes.switchBase,
                      track: classes.switchTrack,
                      checked: classes.switchBaseChecked,
                    }}
                    color="warning"
                    checked={isDark}
                    icon={<LightModeIcon />}
                    checkedIcon={<DarkModeIcon />}
                    onClick={() => {
                      setIsDark(!isDark);
                    }}
                  />
                }
                label={<Text>{isDark ? 'Dark' : 'Light'}</Text>}
              />
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
function CustomLink({ to, children, ...props }: any) {
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

const useStyles = makeStyles({
  switchRoot: {
    width: '64px',
    padding: '10px 12px',
  },
  switchBase: {
    width: '26px',
    height: '26px',
    top: '50%',
    padding: '4px',

    marginTop: 'calc(-26px / 2 - 4px)',

    backgroundColor: '#212121',
    '&:hover': {
      backgroundColor: '#212121 !important',
    },
  },
  switchBaseChecked: {
    transform: 'translateX(30px) !important',
  },
  switchTrack: {
    borderRadius: '20px',
  },
});
