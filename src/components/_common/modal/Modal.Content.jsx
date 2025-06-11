import { useEffect } from "react";

const ModalContent = ({ children, onClose }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      className="fixed flex justify-center items-center left-0 right-0 top-0 bottom-0 bg-gray-500/80"
      onClick={onClose}
    >
      <div
        className=" rounded-2xl bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalContent;
