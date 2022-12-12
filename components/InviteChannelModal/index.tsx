import React from 'react';
import Modal from '@components/Modal';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
  setShowInviteChannelModal: (flag: boolean) => void;
}

const InviteChannelModal = ({ show, onCloseModal, setShowInviteChannelModal }: IProps) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      adsf
    </Modal>
  );
};

export default InviteChannelModal;
