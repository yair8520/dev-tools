export const HooksDescription: IHooksDescription[] = [
  {
    title: 'useNetworkStatus',
    desc: `A piece of state that tracks whether the network is online.
    An Effect that subscribes to the global online and offline events, and updates that state.
    This will keep your component synchronized with the network status. You might start with something like this:`,
    code: `import { useState, useEffect } from 'react';

  export default function StatusBar() {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
      function handleOnline() {
        setIsOnline(true);
      }
      function handleOffline() {
        setIsOnline(false);
      }
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);
  
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
  }
  `,
  },
  { title: '', desc: '', code: '' },
];
export interface IHooksDescription {
  title: string;
  desc: string;
  code: string;
}
