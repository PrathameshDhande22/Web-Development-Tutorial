"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClose?: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  const router = useRouter();

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    router.back();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-900"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
