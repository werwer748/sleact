import React, { forwardRef, MutableRefObject, useCallback, useRef } from 'react';
import { IChat, IDM } from '@typings/db';
import { ChatZone, Section, StickyHeader } from './styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Chat from '@components/Chat';

interface IProps {
  chatSections: { [key: string]: (IDM | IChat)[] };
  setSize: (f: (size: number) => number) => Promise<(IDM | IChat)[][] | undefined>;
  isEmpty: boolean;
  isReachingEnd: boolean;
}

const ChatList = forwardRef<Scrollbars, IProps>(({ chatSections, setSize, isEmpty, isReachingEnd }, scrollRef) => {
  const onScroll = useCallback((values: any) => {
    if (values.scrollTop === 0 && !isReachingEnd) {
      const current = (scrollRef as MutableRefObject<Scrollbars>)?.current;
      console.log('맨 위 도착');
      console.log('스크롤바 current1', current.getScrollHeight());
      //데이터 추가 로딩
      setSize((prevSize) => prevSize + 1).then(() => {
        // 스크롤 위치 유지
        setTimeout(() => {
          if (current) {
            console.log('스크롤바 current2', current.getScrollHeight());
            console.log('스크롤바 values', values);
            current.scrollTop(current.getScrollHeight() - values.scrollHeight);
          }
        }, 0);
      });
    }
  }, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          // Object.entries <= 객체 반복문 돌릴 때 사용
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
});

export default ChatList;
