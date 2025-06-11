import { useCallback, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return { isOpen, openModal, closeModal };
};
