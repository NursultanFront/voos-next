import { PropsWithChildren, useEffect } from 'react';
import Modal from 'react-modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(6px)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    maxWidth: '420px',
  },
};

export const Popup: React.FC<PropsWithChildren<Props>> = ({
  isOpen,
  onClose,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      return;
    }
    document.documentElement.style.overflow = '';

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        ariaHideApp={false}
      >
        <>{children}</>
      </Modal>
    </div>
  );
};
