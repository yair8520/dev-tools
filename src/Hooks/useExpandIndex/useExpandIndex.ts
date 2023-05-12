import { useCallback, useState } from 'react';

export const useExpandIndex = (
  initial: number
): [number, (index: number) => void] => {
  const [state, setState] = useState<number>(initial);
  const toggle = useCallback(
    (index: number): void =>
      setState((state) => {
        if (index === state) {
          return initial;
        } else {
          return index;
        }
      }),
    [initial]
  );
  return [state, toggle];
};
