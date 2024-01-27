import React, { useEffect, useState } from 'react';
import './RedirectToNew.css';
import { RedirectToNewProps } from './RedirectToNewProps';

export const RedirectToNew = ({}: RedirectToNewProps) => {
  const [redirectTimer, setRedirectTimer] = useState(5);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRedirectTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Redirect after 3 seconds
    const redirectTimeout = setTimeout(() => {
      window.location.replace('https://frontend-dev-tools.vercel.app/');
    }, 5000);

    return () => {
      clearInterval(timerInterval);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className="redirect-page">
      <p>Thank you for visiting!</p>
      <p>
        We have moved to a new location. You will be redirected in{' '}
        {redirectTimer} seconds...
      </p>
      <p>
        If you are not redirected,{' '}
        <p>
          If you are not redirected,{' '}
          <a
            href="https://frontend-dev-tools.vercel.app/"
            onClick={() =>
              window.location.replace('https://frontend-dev-tools.vercel.app/')
            }
          >
            click here
          </a>
          .
        </p>
      </p>
    </div>
  );
};
