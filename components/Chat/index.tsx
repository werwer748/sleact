import React, { memo, useMemo } from 'react';
import { ChatWrapper } from './styles';
import gravatar from 'gravatar';
import { IChat, IDM } from '@typings/db';
import dayjs from 'dayjs';
import regexifyString from 'regexify-string';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

interface IProps {
  data: IDM | IChat;
}

//* a?.b => optinal chaining
//* a??.b => nullish coalescing

const BACK_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3095' : 'https://sleact.nodebird.com';

const Chat = ({ data }: IProps) => {
  //? 이렇게 작성하면 타입스크립트가 dm인지 channel인지 판단한다.(javascript 문법)
  //? 두가지 이상의 타입이 겹쳐져있을때 타입을 구분해주는거 -> 타입가드
  const user = 'Sender' in data ? data.Sender : data.User;
  const { workspace } = useParams();

  /*
  ? \(역슬래시) <- escape라고한다 : 특수기호를 무력화!
  ? \d 숫자
  ? +는 1개 이상 ?, *는 0개 이상
  ? +는 최대한 많이 +? 는 최대한 조금
  ? g는 모두 찾기
  ? |는 또는 \n은 줄바꿈
  ? ()로 묶는건 그루핑이라고 한다. 묶인 값이 arr[1],arr[2]... 에 추가 된다고 함.
  */
  const result = useMemo(
    () =>
      data.content.startsWith('uploads\\') || data.content.startsWith('uploads/') ? (
        <img src={`${BACK_URL}/${data.content}`} style={{ maxHeight: 200 }} />
      ) : (
        regexifyString({
          //? hooks안에서 개별값을 캐싱하고 싶다면 useMemo
          input: data.content,
          pattern: /@\[(.+?)]\((\d+?)\)|\n]/g,
          decorator(match, index, result) {
            const arr = match.match(/@\[(.+?)]\((\d+?)\)/)!;
            if (arr) {
              return (
                <Link key={match + index} to={`/workspace/${workspace}/dm/${arr[2]}`}>
                  @{arr[1]}
                </Link>
              );
            }
            return <br key={index} />;
          },
        })
      ),
    [data.content, workspace],
  ); //? 디펜던시는 캐싱을 푸는 (캐싱을 갱신하는 조건)을 써줘야 함.

  return (
    <ChatWrapper>
      <div className="chat-img">
        <img src={gravatar.url(user.email, { s: '36px', d: 'retro' })} alt={user.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>&nbsp;{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <p>{result}</p>
      </div>
    </ChatWrapper>
  );
};

//? memo의 역할: props가 똑같으면 부모가 바뀌어도 자식이 리렌더링 되지 않게 해준다.
//? 최적화를 위해서는 말단 컴포넌트 단에서 memo, useMemo를 잘 써줘야 한다.
export default memo(Chat);
