import ModalContent from "./Modal.Content";
import { ModalPortal } from "./Modal.Portal";

export const CustomModal = ({ children, onClose, isOpen }) => {
  return (
    isOpen && (
      <ModalPortal>
        <ModalContent onClose={onClose}>{children}</ModalContent>
      </ModalPortal>
    )
  );
};
