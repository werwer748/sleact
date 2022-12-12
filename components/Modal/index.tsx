import React, { MouseEvent, ReactNode, useCallback } from 'react';
import { CloseModalButton, CreateModal } from './styles';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
  children: ReactNode;
}

const Modal = ({ show, children, onCloseModal }: IProps) => {
  const stopPropagation = useCallback((e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }

  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
