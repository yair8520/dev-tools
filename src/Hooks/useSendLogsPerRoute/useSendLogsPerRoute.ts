import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getAnalytics, logEvent } from 'firebase/analytics';
import firebaseReference from '../../Config/Firebase';

export const useSendLogsPerRoute = () => {
  const location = useLocation();
  const analytics = getAnalytics(firebaseReference);

  useEffect(() => {
    console.log(location.pathname);
    logEvent(analytics, location.pathname, {
      page_path: location.pathname,
    });
  }, [location, analytics]);
};
