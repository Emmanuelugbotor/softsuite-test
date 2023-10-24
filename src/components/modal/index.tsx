import React, { ReactNode } from "react";
import styles from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        {/* <div className={styles.modal_header}>
          <button
            type="button"
            className={styles.close_button}
            onClick={onClose}
          >
            Close
          </button>
        </div> */}
        <div className={styles.modal_content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
