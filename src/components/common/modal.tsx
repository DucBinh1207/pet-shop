import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CancelIcon from "./icons/cancel-icon";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isVisible, onClose, children }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isVisible) {
    return null;
  }

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative rounded-lg bg-white p-5 shadow-lg">
        <button
          onClick={() => {
            console.log("1");
            onClose();
          }}
          className="absolute right-2 top-2"
        >
          <CancelIcon size={18} className="fill-current text-primary" />
        </button>
        {children}
      </div>
    </div>
  );

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default Modal;
