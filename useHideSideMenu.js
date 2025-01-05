import { useEffect } from 'react';

const useHideSideMenu = (setSideMenuVisibility, handleReplaceMenu) => {
  useEffect(() => {
    setSideMenuVisibility(false);
    if (handleReplaceMenu) {
      handleReplaceMenu();
    }

    return () => {
      setSideMenuVisibility(true);
      if (handleReplaceMenu) {
        handleReplaceMenu();
      }
    };
  }, []);
};

export default useHideSideMenu;
