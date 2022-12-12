import React, { CSSProperties, ReactNode, useCallback } from 'react';
import { CloseModalButton, CreateMenu } from './styles';

interface IProps {
  children: ReactNode;
  style: CSSProperties;
  show: boolean;
  onCloseModal: (e: React.MouseEvent<HTMLElement>) => void;
  closeButton?: boolean;
}

const Menu = ({ children, style, show, onCloseModal, closeButton }: IProps) => {
  const stopPropagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <CreateMenu onClick={onCloseModal}>
      <div onClick={stopPropagation} style={style}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
};

Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
