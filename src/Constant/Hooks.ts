export const HooksDescription: IHooksDescription[] = [
  {
    title: 'useNetworkStatus',
    launch: true,
    desc: `A piece of state that tracks whether the network is online.\n
    An Effect that subscribes to the global online and offline events, and updates that state.
    This will keep your component synchronized with the network status.\n You might start with something like this:`,
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
  }`,
  },
  {
    title: 'useInternetConnection',
    native: true,
    desc: `This hook uses the NetInfo module to check the device's internet connectivity status. It sets the initial state to true, and then listens for changes in the connectivity status using the useEffect hook. When the connectivity status changes, it updates the state accordingly.`,
    code: `
    import { useState, useEffect } from 'react';
    import NetInfo from '@react-native-community/netinfo';
    
    export function useInternetConnection() {
      const [isConnected, setIsConnected] = useState(true);
    
      useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
          setIsConnected(state.isConnected);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
    
      return isConnected;
    }`,
  },
  {
    title: 'useMediaQuery',
    desc: 'This is a custom React hook called "useMediaQuery" that takes in a query string and returns a boolean indicating whether the current viewport matches the specified media query. The hook uses the useState and useEffect hooks to update the matches state and register a listener for changes in viewport size.',
    code: `import { useState, useEffect } from 'react';

  export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    }, [matches, query]);
  
    return matches;
  };
  `,
  },
  {
    title: 'useToggle',
    desc: `This is a custom React hook called "useToggle" that takes in an optional boolean initial state and returns a tuple with the current boolean state and a function to toggle the state. The hook uses the useState hook to initialize and update the state, and the useCallback hook to memoize the toggle function to prevent unnecessary re-renders. In the example usage, the hook is used to toggle a boolean value with a button click.`,
    code: `import { useCallback, useState } from 'react';
  // Usage
  function App() {
      // Call the hook which returns, current value and the toggler function
      const [isTextChanged, setIsTextChanged] = useToggle();
      return (
          <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
      );
  }
  // Hook
  // Parameter is the boolean, with default "false" value
  const useToggle = (initialState: boolean = false): [boolean, any] => {
      // Initialize the state
      const [state, setState] = useState<boolean>(initialState);
      // Define and memorize toggler function in case we pass down the comopnent,
      // This function change the boolean value to it's opposite value
      const toggle = useCallback((): void => setState(state => !state), []);
      return [state, toggle]
  }`,
  },
  {
    title: 'useLocalStorage',
    desc: `This hook takes in a key and initial value and returns an array with two values: the current value stored in local storage and a function to update the value. The hook uses the useState and useEffect hooks to get and set the value in local storage.`,
    code: `import { useState, useEffect } from 'react';

  const useLocalStorage = (key: string, initialValue: any) => {
    const [value, setValue] = useState(() => {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  };
  
  export default useLocalStorage;
  `,
  },
  {
    title: 'useCopyToClipboard',
    desc: `The useCopyToClipboard hook can be used in any React functional component to enable copying text to the clipboard and displaying the result of the copy operation to the user.`,
    code: `import { useState } from 'react'

    type CopiedValue = string | null
    type CopyFn = (text: string) => Promise<boolean> // Return success
    
    function useCopyToClipboard(): [CopiedValue, CopyFn] {
      const [copiedText, setCopiedText] = useState<CopiedValue>(null)
    
      const copy: CopyFn = async text => {
        if (!navigator?.clipboard) {
          console.warn('Clipboard not supported')
          return false
        }
    
        // Try to save to clipboard then save it in the state if worked
        try {
          await navigator.clipboard.writeText(text)
          setCopiedText(text)
          return true
        } catch (error) {
          console.warn('Copy failed', error)
          setCopiedText(null)
          return false
        }
      }
    
      return [copiedText, copy]
    }
    
    export default useCopyToClipboard
    
  `,
  },
  {
    title: 'usePrevious',
    desc: `This hook can be useful when you need to compare the previous value of a prop or state variable with the current value to trigger some action or effect. By storing the previous value in a ref, you can compare it to the current value in a subsequent render cycle of the component. `,
    code: `import { useEffect, useRef } from 'react';

  export const usePrevious = <K = any>(value: K) => {
    const ref = useRef<K>();
  
    useEffect(() => {
      ref.current = value;
    }, [value]);
  
    return ref.current;
  };`,
  },
  {
    title: 'useDebouncedEffect',
    desc: `The useDebouncedEffect hook is a custom hook that allows you to create an effect that is debounced. This means that the effect will only run after a certain delay has passed since the last update to its dependencies.`,
    code: `import { useEffect } from 'react';

  export const useDebouncedEffect = (
    effect: () => void,
    deps: any,
    delay: number
  ) => {
    useEffect(() => {
      const handler = setTimeout(() => effect(), delay);
  
      return () => clearTimeout(handler);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...(deps || []), delay]);
  };
  `,
  },
  {
    title: 'useIsForeground',
    native: true,
    desc: `The useIsForeground hook is a custom hook that is used in a React Native application to detect if the app is currently in the foreground or not. It uses the AppState module from react-native to listen for changes in the app state and updates its own state accordingly.

    The hook returns a boolean value indicating whether the app is currently in the foreground or not. `,
    code: `import { useEffect,useState } from 'react';
  import { AppState, AppStateStatus } from 'react-native';
  
  export const useIsForeground = (): boolean => {
    const [isForeground, setIsForeground] = useState(true);
  
    useEffect(() => {
      const onChange = (state: AppStateStatus): void => {
        setIsForeground(state === 'active');
      };
      const listener = AppState.addEventListener('change', onChange);
      return () => {
        listener.remove();
      };
    }, [setIsForeground]);
  
    return isForeground;
  };
  `,
  },
  {
    title: `useKeyBoardStatus`,
    native: true,
    desc: `The useKeyBoardStatus hook is a custom hook that is used in a React Native application to detect the status of the keyboard. It uses the Keyboard module from react-native to listen for events when the keyboard is shown or hidden.

  The hook returns an object with a boolean value called keyboardStatus, which is true if the keyboard is currently shown and false if it is hidden.`,
    code: `import { useEffect, useState } from 'react';
    import { Keyboard } from 'react-native';
    
    const useKeyBoardStatus = () => {
      const [keyboardStatus, setKeyboardStatus] = useState(false);
      useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
          setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
          setKeyboardStatus(false);
        });
        return () => {
          showSubscription.remove();
          hideSubscription.remove();
        };
      }, []);
      return { keyboardStatus };
    };
    
    export default useKeyBoardStatus;
    `,
  },
  {
    title: 'useBackButton',
    native: true,
    desc: `This code defines a custom hook useBackButton that allows a developer to define a callback function that will be executed when the Android device's back button is pressed. The hook uses the useNavigation hook from the @react-navigation/native library to determine if the current screen is focused. If it is, the callback function is called and true is returned to indicate that the back button press has been handled. If the screen is not focused, false is returned to allow the default back button behavior to occur.`,
    code: `import React from 'react';
  import { useNavigation } from '@react-navigation/native';
  import { BackHandler } from 'react-native';
  
  const useBackButton = (callBack?: () => void) => {
    const nav = useNavigation();
    React.useEffect(() => {
      const backAction = () => {
        if (nav.isFocused()) {
          callBack?.();
          return true;
        }
        return false;
      };
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      );
      return () => backHandler.remove();
    }, [nav, callBack]);
  };
  
  export default useBackButton;
  `,
  },
  {
    title: 'useDarkModeListener',
    native: true,
    desc: `This code exports a custom hook called useDarkModeListener that takes an optional callback function. The hook uses the useEffect hook to listen for changes in the appearance mode (light or dark) of the app using the Appearance API provided by react-native. When the appearance mode changes, the callback function is called with a boolean value indicating whether the new mode is dark or not.`,
    code: `import { useEffect } from 'react';
    import { Appearance } from 'react-native';
    
    const useDarkModeListener = (callBack?: (isDark: boolean) => void) => {
      useEffect(() => {
        const subscription = Appearance.addChangeListener(
          ({ colorScheme: newColorScheme }) => {
            callBack?.(newColorScheme === 'dark');
          }
        );
    
        return () => subscription.remove();
      }, [callBack]);
    };
    
    export default useDarkModeListener;
    `,
  },
  {
    title: 'useOrientation',
    native: true,
    desc: `This hook uses the Dimensions module to get the window dimensions and determine the current orientation. It sets the initial orientation based on the window dimensions, and then listens for changes in the window dimensions using the useEffect hook. When the dimensions change, it updates the orientation accordingly.`,
    code: `import { useState, useEffect } from 'react';
    import { Dimensions } from 'react-native';
    
    export function useOrientation() {
      const [orientation, setOrientation] = useState(
        Dimensions.get('window').width > Dimensions.get('window').height ? 'landscape' : 'portrait'
      );
    
      useEffect(() => {
        const updateOrientation = () => {
          setOrientation(
            Dimensions.get('window').width > Dimensions.get('window').height ? 'landscape' : 'portrait'
          );
        };
    
        Dimensions.addEventListener('change', updateOrientation);
    
        return () => {
          Dimensions.removeEventListener('change', updateOrientation);
        };
      }, []);
    
      return orientation;
    }`,
  },
];
export interface IHooksDescription {
  title: string;
  desc: string;
  code: string;
  native?: boolean;
  launch?: boolean;
}
