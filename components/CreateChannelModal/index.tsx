import React, { useCallback } from 'react';
import Modal from '@components/Modal';
import { Button, Input, Label } from '@pages/SingUp/styles';
import useInput from '@hooks/useInput';
import axios, { AxiosResponse } from 'axios';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
  setShowCreateChannelModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateChannelModal = ({ show, onCloseModal, setShowCreateChannelModal }: IProps) => {
  const [newChannel, onChangeNewChannel, setNewChannel] = useInput('');
  const { workspace, channel } = useParams(); // 주소창에서 정보가져오는 hook;
  const { data: userData, error, mutate } = useSWR<IUser | false | undefined>('/api/users', fetcher);
  const { data: channelData, mutate: mutateChannel } = useSWR<IChannel[]>(
    // const { data: channelData, mutate: mutateChannel } = useSWR<any>(
    userData ? `/api/workspaces/${workspace}/channels` : null,
    fetcher,
  );

  const onCreateChannel = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log(workspace);
      axios
        .post(
          `/api/workspaces/${workspace}/channels`,
          {
            name: newChannel,
          },
          {
            withCredentials: true,
          },
        )
        .then(({ data }: { data: IChannel }) => {
          setShowCreateChannelModal(false);
          mutateChannel([...channelData!, data], false);
          setNewChannel('');
        })
        .catch((error) => {
          console.dir(error);
          toast.error(error.response?.data, { position: 'bottom-center' });
        });
    },
    [newChannel],
  );

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onCreateChannel}>
        <Label id="channel-label">
          <span>채널</span>
          <Input id="channel" value={newChannel} onChange={onChangeNewChannel} />
        </Label>
        <Button>생성하기</Button>
      </form>
    </Modal>
  );
};

export default CreateChannelModal;
