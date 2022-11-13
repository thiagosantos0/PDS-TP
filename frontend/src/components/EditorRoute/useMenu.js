import { useState, useMemo, useCallback } from 'react';

const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClickAway = useCallback(() => {
    setIsOpen(false);
  }, []);

  return useMemo(
    () => ({
      handleClick,
      handleClickAway,
      isOpen,
    }),
    [handleClick, handleClickAway, isOpen],
  );
};

export default useMenu;
