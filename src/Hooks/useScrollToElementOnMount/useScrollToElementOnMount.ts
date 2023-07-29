import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { scrollTo } from '../../Helpers/Scroll';

export const useScrollToElementOnMount = () => {
  const { targetId } = useParams();
  useEffect(() => {
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        scrollTo({ id: targetId, withHighlight: true });
      }
    }
  }, [targetId]);
};

