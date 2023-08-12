import React, { useRef, useState, useEffect } from 'react';

const TRIGGER_THRESHOLD = 100;
const SHOW_INDICATOR_THRESHOLD = 50;
const RESET_TRANSITION_DURATION = 0.3; // Duration for the reset transition in seconds

const MAX = 128;
const k = 0.4;

function appr(x: number) {
  return MAX * (1 - Math.exp((-k * x) / MAX));
}

export function usePullToRefresh(
  ref: React.RefObject<HTMLDivElement>,
  onTrigger: () => Promise<void>
): boolean {
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener('touchstart', handleTouchStart);

    function handleTouchStart(startEvent: TouchEvent) {
      if (!el) return;

      const initialY = startEvent.touches[0].clientY;

      el.addEventListener('touchmove', handleTouchMove);
      el.addEventListener('touchend', handleTouchEnd);

      async function handleTouchMove(moveEvent: TouchEvent) {
        if (!el) return;

        const currentY = moveEvent.touches[0].clientY;
        const dy = currentY - initialY;

        if (dy < 0) return;

        el.style.transform = `translateY(${appr(dy)}px)`;

        if (dy > TRIGGER_THRESHOLD) {
          setIsRefreshing(true);
        } else {
          setIsRefreshing(false);
        }
      }

      async function handleTouchEnd(endEvent: TouchEvent) {
        if (!el) return;

        el.style.transition = `transform ${RESET_TRANSITION_DURATION}s ease-in-out`;
        el.style.transform = 'translateY(0)';

        const y = endEvent.changedTouches[0].clientY;
        const dy = y - initialY;

        if (dy > TRIGGER_THRESHOLD) {
          try {
            await onTrigger();
          } catch (error) {
            console.error('Error during refresh:', error);
          } finally {
            setIsRefreshing(false);
            el.style.transition = ''; // Remove the transition after the reset
          }
        }

        el.addEventListener('transitionend', onTransitionEnd);

        el.removeEventListener('touchmove', handleTouchMove);
        el.removeEventListener('touchend', handleTouchEnd);
      }

      function onTransitionEnd() {
        if (!el) return;
        el.style.transition = '';
        el.removeEventListener('transitionend', onTransitionEnd);
      }
    }

    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
    };
  }, [ref.current, onTrigger]);

  return isRefreshing;
}
