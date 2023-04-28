import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { CDrawer } from '../CDrawer';
import { useNavigate } from 'react-router-dom';
import { Text } from '../Text';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar style={{ height: '60px' }} position="static">
      <Toolbar>
        <Text
          onClick={() => navigate('/')}
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            '&:hover': {
              textDecoration: 'underline',
              cursor: 'pointer',
            },
          }}
        >
          Dev-Tools
        </Text>
        <CDrawer />
      </Toolbar>
    </AppBar>
  );
};
