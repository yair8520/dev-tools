import { useGoogleOneTapLogin } from 'react-google-one-tap-login';

export const GoogleOneTap = ({ handleAnonymousSignIn }: any) => {
  useGoogleOneTapLogin({
    onError: (error) => console.log(error),
    googleAccountConfigs: {
      callback: ({ credential }) => handleAnonymousSignIn(credential),
      client_id: process.env.REACT_APP_CLIENT_ID!,
    },
  });
  return null;
};
