import React, { FormEvent, useCallback, useState } from 'react';

import useInput from '@hooks/useInput';
import { Button, Error, Form, Header, Input, Label, LinkContainer } from '@pages/SingUp/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Navigate } from 'react-router-dom';

const LogIn = () => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher, {
    //? fetcher자리를 어떻게 써주느냐가 중요함
    dedupingInterval: 100000, // 캐시의 유지기간 이 시간동안 중복요청을 방지함
  });
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          'http://localhost:3095/api/users/login',
          {
            email,
            password,
          },
          { withCredentials: true }, // 백엔드와 프론트엔드가 서로 서버가 다를경우 추가해줘야 쿠키가 추가 됨
        )
        .then((response) => {
          mutate(response.data, false);
          //? 쿠키에 connect.id를 날리면 로그아웃처리 된다.(express의 경우) 로그인되어있는게 이렇게 확인됨 ㄷㄷ
          //? mutate는 서버에 요청을 보내지않고 수정하는것
          //? OPTIMISTIC UI(두번째 변수 관련) : 좋아요를 예로 버튼을 클릭했을때 바로 하트에 불이들어오고 요청을 보냄 이때 요청이 실패하면 다시 불을 꺼버림
          //? 낙관적 UI -> 내가 보낸 요청이 성공할거라 생각하고 미리 성공 Ui를 보여주고 요청해 점검
        })
        .catch((error) => {
          setLogInError(error.response.data.statusCode === 401);
        });
    },
    [email, password],
  );

  /*
   * swr? 리덕스, 컨텍스트 api 처럼 값을 저장해 둘 수 있는 방법
   * 보통 get 요청에 대한것을 저장함
   * 쿠키에 저장한다.
   * 백엔드와의 쿠키 공유설정으로 브라우저내에 저장
   */

  if (data === undefined) {
    return <div>로딩중....</div>;
  }

  if (data) {
    return <Navigate to="/workspace/sleact/channel/일반" />;
  }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;
