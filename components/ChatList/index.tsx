import React, { useCallback, useRef } from 'react';
import { IDM } from '@typings/db';
import { ChatZone, Section } from './styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Chat from '@components/Chat';

interface IProps {
  chatData?: IDM[];
}

const ChatList = ({ chatData }: IProps) => {
  const scrollbarRef = useRef(null);

  const onScroll = useCallback(() => {}, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        {chatData?.map((item) => (
          <Chat key={item.id} data={item} />
        ))}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
