import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ url, tags, removeUrlForModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        removeUrlForModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      removeUrlForModal();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <img src={url} alt={tags} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

modalRoot.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  removeUrlForModal: PropTypes.func.isRequired,
};
