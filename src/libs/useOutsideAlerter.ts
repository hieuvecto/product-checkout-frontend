import { MutableRefObject, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(ref: MutableRefObject<any>, cb: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
