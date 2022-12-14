import React, { useCallback } from 'react';
import Modal from '@components/Modal';
import { Button, Input, Label } from '@pages/SingUp/styles';
import { useParams } from 'react-router';
import useInput from '@hooks/useInput';
import useSWR from 'swr';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import { toast } from 'react-toastify';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
  setShowInviteWorkspaceModal: (flag: boolean) => void;
}

const InviteWorkspaceModal = ({ show, onCloseModal, setShowInviteWorkspaceModal }: IProps) => {
  const { workspace } = useParams();
  const [newMember, onChangeNewMember, setNewMember] = useInput('');
  const { data: userData } = useSWR<IUser>('/api/users', fetcher);
  const { mutate: mutateMembers } = useSWR<IChannel[]>(
    userData ? `/api/workspaces/${workspace}/members` : null,
    fetcher,
  );

  const onInviteMember = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!newMember || !newMember.trim()) return;

      axios
        .post(`/api/workspaces/${workspace}/members`, {
          email: newMember,
        })
        .then((response) => {
          mutateMembers();
          setShowInviteWorkspaceModal(false);
          setNewMember('');
        })
        .catch((error) => {
          console.dir(error);
          toast.error(error.response?.data, { position: 'bottom-center' });
        });
    },
    [workspace, newMember],
  );
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onInviteMember}>
        <Label id="channel-label">
          <span>이메일</span>
          <Input id="channel" value={newMember} onChange={onChangeNewMember} />
        </Label>
        <Button type="submit">초대하기</Button>
      </form>
    </Modal>
  );
};

export default InviteWorkspaceModal;
