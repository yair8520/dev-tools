import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildSiteTitle } from '../../Constant/Pages';

export const usePageTitle = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = buildSiteTitle(location.pathname);
    return () => {
      document.title = "Dev-Tools";
    };
  }, [location.pathname]);
};

