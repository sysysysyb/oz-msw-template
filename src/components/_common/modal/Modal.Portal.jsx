import { createPortal } from "react-dom";

export const ModalPortal = ({ children }) => {
  const id = "modal_portal";
  const portal = typeof window !== "undefined" && document.getElementById(id);

  if (!portal) {
    return null;
  }
  return createPortal(children, portal);
};
